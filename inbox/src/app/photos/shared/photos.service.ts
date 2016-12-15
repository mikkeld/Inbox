import { Injectable } from '@angular/core';
import { Photo, IPhoto } from '../shared/photo';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {Observable} from "rxjs";
import { IPhotoTag, PhotoTag } from '../shared/photo-tag';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhotosService {

  constructor(private af: AngularFire) {

  }

  public createPhoto(photo: Photo): void {
    this.af.database.list('photos/Imf4nFal01MofFYqOe9I8LcfhX22')
      .push(photo)
  }

  public getVisiblePhotos(filter: string): Observable<IPhoto[]> {
    if(filter) {
      return this.af.database.list('photos/Imf4nFal01MofFYqOe9I8LcfhX22')
        .map(photos => photos.filter(photo => photo.tags.indexOf(filter) > -1));
    } else {
      return this.af.database.list('photos/Imf4nFal01MofFYqOe9I8LcfhX22');
    }
  }

  public getPhotoForKey(key: string): FirebaseObjectObservable<IPhoto> {
    return this.af.database.object(`photos/Imf4nFal01MofFYqOe9I8LcfhX22/${key}`)
  }

  public previousPhotoForKey(key: string): void {
    this.af.database.list('photos/Imf4nFal01MofFYqOe9I8LcfhX22', {
      query: {
        orderByChild: 'timestamp',
        startsAt: 1480588440474,
        limitToLast: 2
      }
    })
      .single()
      .do(res => console.log(res))
  }

}
