import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {
  locs:FirebaseListObservable<any>;
  constructor(private db:AngularFireDatabase) { 
    this.locs=this.db.list('Locations');
  }
  getLocations(){
    console.log('location service called',this.locs);
    return this.locs;
  }
}
