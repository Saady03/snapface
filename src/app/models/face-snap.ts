import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { SnapType } from "./snap-type";

export class FaceSnap{
   location?: string;
   id?: string;

    constructor(public  title: string,
        public description: string,
        public createdAt: Date,
        public snaps: number,
        public imageUrl: string,
        public userHasSnap: boolean,
        //public snapButtonText: string,
         ){
       this.id = crypto.randomUUID().substring(0,8);
    }
    addSnap():void {
        this.snaps++;
        this.userHasSnap = true;
    }
    removeSnap():void{
        this.snaps--;
        this.userHasSnap = false;
    }

    setLocation(location: string): void {
        this.location = location;
      }

    withLocation(location: string):FaceSnap{
        this.setLocation(location);
        return this;

    }

    snap(snapType: SnapType) {
        if (snapType === 'snap') {
          this.addSnap();
        } else if (snapType === 'unsnap') {
          this.removeSnap();
        }
    }

}