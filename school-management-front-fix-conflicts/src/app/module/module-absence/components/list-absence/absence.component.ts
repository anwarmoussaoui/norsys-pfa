import { data } from 'jquery';
import { AbsenceService } from './absence.service';
import { Component, OnInit } from "@angular/core";
import { routes } from "src/app/router";
import RouterType from "src/app/routerType";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Absence } from './absence';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector:'app-absence',
  templateUrl:'./absence.component.html',
  styleUrls:['./absence.component.css']
})
export class AbsenceComponent implements OnInit{
  searchText:any;
  filteredData:any;
  filteredData2:any;
  absenceService:AbsenceService;
  data:any[];
  Teacher:any[];
  show:boolean=true;
  test:string='hello';
  id:number;
  form = new FormGroup({reason :new FormControl(''),
    justifiee:new FormControl(''),
    duree:new FormControl(''),
    isSwitched:new FormControl('')});

  constructor(private AbsenceService:AbsenceService,formBuilder : FormBuilder){}
  ngOnInit():void{
    this.AbsenceService.getAllAbsences().subscribe(response => {
      this.data = response.map((item: any) => ({ ...item, visible: false }))});
    this.AbsenceService.getAllAbsences().subscribe(response => {
      this.filteredData = response.map((item: any) => ({ ...item, visible: false }))});
    this.AbsenceService.getAllTeacherAbsences().subscribe(response => {
      this.Teacher = response.map((item: any) => ({ ...item, visible: false }))});
    this.AbsenceService.getAllTeacherAbsences().subscribe(response => {
      this.filteredData2 = response.map((item: any) => ({ ...item, visible: false }))});

  }
  generatePdf(student: any) {
    const doc = new jsPDF();


    doc.setFontSize(18);
    doc.text('Liste des Absences pour '+student.name, 10, 10);

    doc.setFontSize(12);

    let yOffset = 20;

    // Add table header with custom style
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0);
    doc.text('DATE D\'ABSENCE', 10, yOffset);
    doc.text('REASON', 50, yOffset);
    doc.text('DURÉE', 100, yOffset);
    doc.text('JUSTIFIÉ', 140, yOffset);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 255);
    yOffset += 10;

    for (const absence of student.absences) {
      doc.text(absence.absenceDate, 10, yOffset);
      doc.text(absence.reason, 50, yOffset);
      doc.text(absence.numberOfDays.toString(), 100, yOffset);
      doc.text(absence.justified ? 'OUI' : 'NON', 140, yOffset);
      yOffset += 10;
    }
    doc.save('absence-list.pdf');
  }

  setId(id:number){
    this.id=id;
    console.log(id);
  }


  performSearch() {
    this.filteredData = this.data.filter(book =>
      book.identifier.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.filteredData2 = this.Teacher.filter(book =>
      book.firstName.toLowerCase().includes(this.searchText.toLowerCase())
    );}
  deletee(id:number,absenceid:number){
    let x=confirm('vous voullez vous vraiment supprimer cette absence?')
    if(x===true){
      this.AbsenceService.deleteAbsence(id,absenceid).subscribe(
        (response) => {
          console.log('Response:', response);
          // Handle the response here
        },
        (error) => {
          console.error('Error:', error);
          // Handle errors here
        }
      );}
    this.ngOnInit();
  }

  generateTeacherPdf(teacher: any) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Liste des Absences pour le Professeur ' + teacher.name, 10, 10);

    doc.setFontSize(12);

    let yOffset = 20;


    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0);
    doc.text('DATE D\'ABSENCE', 10, yOffset);
    doc.text('REASON', 50, yOffset);
    doc.text('DURÉE', 100, yOffset);
    doc.text('JUSTIFIÉ', 140, yOffset);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 255);
    yOffset += 10;

    for (const absence of teacher.absences) {
      doc.text(absence.absenceDate, 10, yOffset);
      doc.text(absence.reason, 50, yOffset);
      doc.text(absence.numberOfDays.toString(), 100, yOffset);
      doc.text(absence.justified ? 'OUI' : 'NON', 140, yOffset);
      yOffset += 10;
    }
    doc.save('teacher-absence-list.pdf');
  }

  deleteeTeacher(id:number,absenceid:number){
    let x=confirm('vous voullez vous vraiment supprimer cette absence?')
    if(x===true){
      this.AbsenceService.deleteTeacherAbsence(id,absenceid).subscribe(
        (response) => {
          console.log('Response:', response);
        },
        (error) => {
          console.error('Error:', error);
        }
      );}this.ngOnInit();
  }

  Update(data:Absence){
    data.reason=this.form.value.reason;
    data.numberOfDays=this.form.value.duree;
    data.justified=this.form.value.isSwitched;
    console.log(data);
    let x=confirm('vous voullez vous vraiment enregistrer ces changement?')
    if(x===true){
      this.AbsenceService.UpdateAb(this.id,data).subscribe(
        (response) => {
          console.log('Response:', response);
          // Handle the response here
        },
        (error) => {
          console.error('Error:', error);
          // Handle errors here
        }
      );
    }
  }

}
