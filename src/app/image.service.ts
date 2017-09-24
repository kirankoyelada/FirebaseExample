import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  images:FirebaseListObservable<any>;
  constructor(private db:AngularFireDatabase) { 
    this.images=this.db.list('Images');
  }
  getImages(){
    return this.images;
  }
}