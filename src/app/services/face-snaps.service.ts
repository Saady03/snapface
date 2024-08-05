import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap('ANNN', 'nnnnnn',new Date(), 1,'https://source.unsplash.com/1600x900/?nature,water'),
        new FaceSnap('BANNN', 'nnnnnn',new Date(), 1,'https://source.unsplash.com/1600x900/?nature,water'),
        new FaceSnap(
            'Archibald',
            'Mon meilleur ami depuis tout petit !',
            new Date(),
            200,
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',

          ),
          new FaceSnap('ANNN', 'nnnnnn',new Date(), 1,'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1024px-Three_Rock_Mountain_Southern_Tor.jpg').withLocation('Three Roch Montagne'),
          new FaceSnap(
          'Archibald',
          'Mon meilleur ami depuis tout petit !',
          new Date(),
          0,
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'

        ).withLocation('Three Roch Montagne'),

    ];

    getFaceSnaps(): FaceSnap[]{
        return [...this.faceSnaps];
    }
}