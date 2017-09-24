import { Injectable } from '@angular/core';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EmployeeService {
employee$:FirebaseListObservable<any>
  constructor(private db:AngularFireDatabase) { 
    this.employee$=this.db.list('Employees');
  }
  getEmployees(){
    return this.employee$;
  }
  addEmployee(employee:any){
    //add employee
    this.employee$.push(employee);
  }
  updateEmployee(employee:any,$key:string){
    this.employee$.update($key,employee);
  }
  deleteEmployee(employee:any){
    this.employee$.remove(employee)
  }
}
