import { FaceSnapComponent } from "../face-snap/face-snap.component";

export class FaceSnap{
   location?: string;

    constructor(public  title: string,
        public description: string,
        public createdAt: Date,
        public snaps: number,
        public imageUrl: string,
        //public userHasSnap: boolean,
        //public snapButtonText: string,
         ){

    }
    addSnap():void {
        this.snaps++;
        //this.userHasSnap = true;
    }
    removeSnap():void{
        this.snaps--;
        //this.userHasSnap = false;
    }

    setLocation(location: string): void {
        this.location = location;
      }

    withLocation(location: string):FaceSnap{
        this.setLocation(location);
        return this;

    }

}