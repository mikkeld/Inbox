import { Injectable } from '@angular/core';
import { Photo, IPhoto } from '../shared/photo';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class PhotosService {

  constructor(private af: AngularFire) { }

  public createPhoto(photo: Photo): void {
    this.af.database.list('photos/Imf4nFal01MofFYqOe9I8LcfhX22')
      .push(photo)
  }

}
