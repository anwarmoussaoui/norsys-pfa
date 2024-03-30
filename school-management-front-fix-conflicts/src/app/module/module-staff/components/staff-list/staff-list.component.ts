import { Component, OnInit } from '@angular/core';
import { ModuleStaffService } from '../../module-staff.service';
import { Staff } from 'src/app/module/module-student/models/Staff';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staffList: Staff[] = []; 

  constructor(private staffService: ModuleStaffService) { }

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff() {
    this.staffService.getAllStaff().subscribe(
      (data) => {
        this.staffList = data;
      },
      (error) => {
        console.error('Error loading staff:', error);
      }
    );
  }
}