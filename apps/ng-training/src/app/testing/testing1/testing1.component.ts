
import { Component, OnInit } from '@angular/core';
import { NgTrainingService } from '../../services/ng-training.service';

@Component({
  selector: 'fis-testing1',
  templateUrl: './testing1.component.html',
  styleUrls: ['./testing1.component.css'],
})
export class Testing1Component implements OnInit {
  students = [];
  err_msg: string;
  selectedStudent: any = {};
  fee = 0;
  constructor(public service: NgTrainingService) {}

  ngOnInit() {
    this.service.getStudents().subscribe(
      (res) => this.students = res['Students'],
      (err) => this.err_msg = 'Error while loading User List'
    );
  }

  getDetails(id: number): void {
    this.service.getStudentDetails(id).subscribe(
      (res) => {
        this.selectedStudent = res;
        this.fee = this.getFeePaid(id);
      },
      (err) => this.err_msg = 'Error while loading User Details'
    );
  }

  getFeePaid(id: number): number {
    return id * 1000;
  }
}
