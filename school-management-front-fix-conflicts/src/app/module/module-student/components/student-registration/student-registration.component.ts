import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuleStudentService } from '../../module-student.service';
import { Student } from '../../models/Student';
import { Observable, Subscription, firstValueFrom, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-student-module-student',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  studentList$: Observable<Student[] | undefined>;
  updateStudentForm: FormGroup;
  studentToUpdateId: number | undefined;
  originalIdentifier: string | undefined;

  selectedStudent: Student | null = null;

  addStudentForm: FormGroup;

  private subscription: Subscription;
  // variables for pagination
  totalElements: number = 0;
  currentPage: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20];

  // variable to only show "ajouter button" when user choose "Gestion etudiants tab"

  showAjouterButton: boolean = true;

  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: ModuleStudentService,
    private http: HttpClient
  ) {

    this.addStudentForm = this.formBuilder.group({
      name: ['',Validators.required],
      firstName: ['',Validators.required],
      dateOfBirth: ['',Validators.required],
      address: ['',Validators.required],
      identifier: ['',Validators.required],
      level: ['',Validators.required],
      isActive:['',Validators.required],
      educationalPath: ['',Validators.required],
      healthCondition: ['',Validators.required],
      parent: this.formBuilder.group({
        name: [''],
        firstName: [''],
        address: [''],
        phoneNumber: [''],
        occupation: [''],
        emailAddress: ['']
      })
    });

    this.searchForm = this.formBuilder.group({
      keyword: ['']
    });
    

    this.getStudentsForCurrentPage();
    

    this.updateStudentForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      address: ['', Validators.required],
      identifier: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getStudentsForCurrentPage();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
   // get students for current page (check pagination)
  getStudentsForCurrentPage(): void {
    this.studentService.getAllStudents(this.pageSize, this.currentPage)
    .subscribe((response: Student[]) => {
      this.studentList$ = new Observable<Student[]>(observer => {
        observer.next(response);
        observer.complete();
      });
      this.totalElements = response.length; 
    });
  }
  
  // modifier un etudiant en passant L'id de l'etudiant et l'etudiant 

  editStudent(studentId: number, student: Student): void {
    this.studentToUpdateId = studentId;
    this.originalIdentifier = student.identifier;

    this.updateStudentForm.patchValue({
      name: student.name,
      firstName: student.firstName,
      address: student.address,
      identifier: student.identifier
    });
  }

  // Modifiy student attributes

  updateStudent(): void {
    if (this.updateStudentForm.valid && this.studentToUpdateId !== undefined) {
      const updatedStudent: Student = this.updateStudentForm.value;
      this.studentService.updateStudent(this.studentToUpdateId, updatedStudent).subscribe(() => {
        this.getStudentsForCurrentPage();
        this.cancelUpdate();
      });
    }
  }

  // Cancel the process 

  cancelUpdate(): void {
    this.studentToUpdateId = undefined;
    this.updateStudentForm.reset();
  }

  cancelAdd(): void {
    this.addStudentForm.reset();
  }


 // dont let user change the "identifier" 

  onIdentifierChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newIdentifier = inputElement.value;

    if (this.originalIdentifier !== newIdentifier) {
      alert("Vous ne pouvez pas modifier l'identifiant !");
    }
  }

  // only display "ajouter" when user choose gestion tab
  updateAjouterButton(tab: string) {
    this.showAjouterButton = tab === 'gestionEtudiants'; 
  }

 // delete a student 
  deleteStudent(studentId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')) {
      this.studentService.deleteStudent(studentId).subscribe(() => {
        this.getStudentsForCurrentPage();
      });
    }
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getStudentsForCurrentPage();
  }

  getPages(totalElements: number, pageSize: number): number[] {
    const totalPages = Math.ceil(totalElements / pageSize);
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  getLastPageIndex(): number {
    return Math.ceil(this.totalElements / this.pageSize) - 1;
  }


 async addStudent(): Promise<void> {
     const newStudent: Student = this.addStudentForm.value;

    try {
      const response = await firstValueFrom(this.studentService.addStudent(newStudent));
      console.log('Student added successfully:', response);
      this.addStudentForm.reset();
      this.getStudentsForCurrentPage();
    } catch (error) {
      console.error('Error adding student:', error);
    }
  }
// search student
  searchStudents(): void {
    const keyword = this.searchForm.get('keyword')!.value;
    this.studentService.searchStudents(keyword, this.pageSize, this.currentPage)
      .subscribe((students: Student[]) => {
        this.studentList$ = of(students);
      });
  }

// show details 
showDetails(student: Student): void {
  if (this.selectedStudent === student) {
    this.selectedStudent = null; // Deselect the student
  } else {
    this.selectedStudent = student;
  }
}

checkStudentStatus(studentId: number): void {
  this.studentService.checkStudentIsActive(studentId).subscribe(
    (isActive: boolean) => {
      // Find the student in the studentList$ and update its isActive property
      this.studentList$.subscribe((students: Student[] | undefined) => {
        const student = students?.find(s => s.id === studentId);
        if (student) {
          student.isActive = isActive;
        }
      });
    },
    (error: any) => {
      console.error('Error checking student status:', error);
    }
  );
}
// generate certiificate of a student
generateCertificate(studentId: number): void {
    this.studentService.downloadCertificate(studentId).subscribe(
      (blob: Blob) => {
        saveAs(blob, 'C:\Users\HP\Desktop\ProjetDeStage\Certificates'); // change path depend ! 
      },
      (error: any) => {
        console.error('Error downloading certificate:', error);
      }
    );
  }



}













