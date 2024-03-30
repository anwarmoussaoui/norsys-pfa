import {Component, OnInit} from '@angular/core';
import {ModuleStudentService} from "../../module-student.service";
import {Student} from "../../models/Student";

@Component({
  selector: 'app-student-module-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  pageSize = 100;
  page = 0;
  listStudents: Student[] = [];

  constructor(private studentService: ModuleStudentService) {
  }

  ngOnInit(): void {
    this.studentService.getAllStudents(this.pageSize, this.page).subscribe(res => {
      this.listStudents = res;
    })
  }


  addStudent(): void {
    //this.studentService.addStudent()
  }

}
