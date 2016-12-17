import { Injectable } from '@angular/core';
import { Photo, IPhoto } from '../shared/photo';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {Observable} from "rxjs";
import { IPhotoTag, PhotoTag } from '../shared/photo-tag';
import 'rxjs/add/operator/toPromise';
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class PhotosService {

  private photoPath: string;

  constructor(private af: AngularFire, private authService: AuthService) {
    this.photoPath = `photos/${this.authService.id}`;

  }

  public createPhoto(photo: Photo): void {
    this.af.database.list(this.photoPath)
      .push(photo)
  }

  public getVisiblePhotos(filter: string): Observable<IPhoto[]> {
    if(filter) {
      return this.af.database.list(this.photoPath)
        .map(photos => photos.filter(photo => photo.tags.indexOf(filter) > -1));
    } else {
      return this.af.database.list(this.photoPath);
    }
  }

  public getPhotoForKey(key: string): FirebaseObjectObservable<IPhoto> {
    return this.af.database.object(`${this.photoPath}/${key}`)
  }

  public previousPhotoForKey(key: string): void {
    this.af.database.list(this.photoPath, {
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
