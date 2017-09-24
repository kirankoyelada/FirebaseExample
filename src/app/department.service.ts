import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentService {
  dept:FirebaseListObservable<any>;
  constructor(private db:AngularFireDatabase) { 
    this.dept=db.list('Departments');
  }
  getDepet(){
    return this.dept;
  }
  
}
