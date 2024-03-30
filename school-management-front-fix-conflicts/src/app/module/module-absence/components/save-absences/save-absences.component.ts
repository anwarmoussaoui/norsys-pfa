import { Component, OnInit } from '@angular/core';
import {AbsenceService} from "../../module-absence.service";
import {Absence} from "../../models/absence";
import { ModuleStudentService } from "../../../module-student/module-student.service"
import {Student} from "../../../module-student/models/Student";
import {identifierName} from "@angular/compiler";

@Component({
  selector: 'app-save-absences',
  templateUrl: './save-absences.component.html',
  styleUrls: ['./save-absences.component.css']
})
export class SaveAbsencesComponent implements  OnInit {

  ngOnInit(): void {
    this.GETAbsence();

  }
  absence: Absence = {
    id: 0,
    absenceDate: "2000/12/12",
    reason: '',
    justified: false,
    numberOfDays: 1,
    notified: false,
    notes: ''
  };
  studentIdentifier: string = 'student-identifier';
  successMessage: string = '';
  constructor(
    private absenceService: AbsenceService,
    private studentService: ModuleStudentService
  ) {}
  idEtudiant: any;
  identifiant: any;
  absences: any[];



  GETAbsence() {
    this.absenceService.getAbsences().subscribe(
      getAbsence => {
        this.absences = getAbsence;
        const comboboxElement = document.getElementById('comboboxId');
        if (comboboxElement) {
          this.absences.forEach(absence => {
            const optionElement = document.createElement('option');
            optionElement.value = absence.id;
            optionElement.textContent = absence.nom;
            comboboxElement.appendChild(optionElement);
          });
        }

        console.log('Absence enregistrée :', this.absences);
      },
      error => {
        console.error('Erreur lors de la récupération des absences :', error);
      }
    );
  }

  saveAbsencee(): void {
    this.absenceService.saveAbsence(this.studentIdentifier, this.absence).subscribe(
      (response) => {
        console.log('Response:', response);
        this.absence = {
          id: 0,
          absenceDate: "2000/12/12",
          reason: '',
          justified: false,
          numberOfDays: 1,
          notified: false,
          notes: ''
        };
        this.successMessage = 'Absence saved successfully.';
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
