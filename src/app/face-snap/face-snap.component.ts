import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, DatePipe, UpperCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  userHasSnap!: boolean

  ngOnInit():void {
    this.title = 'Archivald';
    this.description = 'My first snap';
    this.createdAt = new Date();
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snaps = 5;
    this.snapButtonText = "Oh Snap!"
    this.userHasSnap =false;
  }

  onSnap(){
    if(this.userHasSnap){
      this.unsnap();
    }else {
      this.snap();
    }

  }

  snap(){
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oups unsnap';
    //this.userHasSnap = true;
  }

  unsnap(){
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!'
    //this.userHasSnap = false;
  }

}
