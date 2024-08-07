import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap('ANNN', 'nnnnnnPPM',new Date(), 1,'https://unsplash.com/photos/a-patio-with-a-table-and-chairs-and-an-umbrella-tJD9GnYkcvk', false),
        new FaceSnap('BANNN', 'nnnnnnOLLL',new Date(), 1,'https://unsplash.com/photos/a-bunch-of-boats-that-are-sitting-in-the-sand-Q1iKtROWntk', false),
        new FaceSnap(
            'Archibaldoooo',
            'Mon meilleur ami depuis tout petit2 !',
            new Date(),
            200,
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg', false

          ),
          new FaceSnap('ANNNOOOO', 'nnnnnnOOO',new Date(), 1,'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1024px-Three_Rock_Mountain_Southern_Tor.jpg', false).withLocation('Three Roch Montagne'),
          new FaceSnap(
          'Archibaldyyyyy',
          'Mon meilleur ami depuis tout petit1 !',
          new Date(),
          0,
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',false

        ).withLocation('Three Roch Montagne'),

    ];

    getFaceSnaps(): FaceSnap[]{
        return [...this.faceSnaps];
    }
    snapFaceById(faceSnapId:string, snapType:SnapType):void{
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!foundFaceSnap){
          throw new Error('faceSnap not found')
        }
        foundFaceSnap.snap(snapType);
    }
}