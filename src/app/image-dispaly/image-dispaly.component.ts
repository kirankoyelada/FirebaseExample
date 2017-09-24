import { ImageService } from './../image.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-image-dispaly',
  templateUrl: './image-dispaly.component.html',
  styleUrls: ['./image-dispaly.component.css']
})
export class ImageDispalyComponent implements OnInit {
  imgs:FirebaseListObservable<any>;
  constructor(private imageService:ImageService) { }

  ngOnInit() {
    this.getImgs();
  }
  getImgs(){
    this.imgs=this.imageService.getImages();
    console.log('images ',this.imgs);
    return this.imgs;
  }
}