import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapsService } from '../services/face-snaps.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}
  ngOnInit(): void {
    const faceSnapId = this.route.snapshot.params['id'];
  }
            }