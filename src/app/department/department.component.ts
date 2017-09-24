import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  depts:FirebaseListObservable<any>;
  constructor(private deptService:DepartmentService) { }

  ngOnInit() {
    console.log('service called');
    this.getDept();
  }
  getDept(){
     this.depts= this.deptService.getDepet();
     return this.depts;
  }
}