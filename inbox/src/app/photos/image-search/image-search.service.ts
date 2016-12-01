import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {IPhoto} from "../shared/photo";

@Injectable()
export class ImageSearchService {

  constructor(private af: AngularFire) { }

  search(term: string): Observable<IPhoto[]> {
    return this.af.database.list('photos/Imf4nFal01MofFYqOe9I8LcfhX22')
      .map(photos => {
        return photos.filter(photo => {
          return photo.tag.indexOf(term) > -1;
        })
      })
  }

}
