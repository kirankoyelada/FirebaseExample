import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locs: FirebaseListObservable<any>;
  constructor(private locService: LocationService) {
  }
  ngOnInit() {
    this.getLocations();
  }
  getLocations() {
    this.locs = this.locService.getLocations();
    console.log('method level ',this.locs);
    return this.locs;
  }

}
