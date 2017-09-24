import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empList:FirebaseListObservable<any>
  constructor(private employeeService:EmployeeService) { 
  }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(){
    console.log('Employee method called');
    this.empList=this.employeeService.getEmployees();
    console.log(this.empList);
  }
}
