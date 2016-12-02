import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {IPhoto} from "../shared/photo";

@Injectable()
export class ImageSearchService {

  public tags: Observable<string[]>;

  constructor(private af: AngularFire) {
    this.tags = this.uniqueCategories();
  }

  public search(term: string): Observable<string[]> {
    return this.tags
      .map(tags => tags.filter(tag => {
        return tag.search(term) > -1;
      }))
  }

  private uniqueCategories(): Observable<any[]> {
    return this.af.database.list('photos/Imf4nFal01MofFYqOe9I8LcfhX22')
      .map(photos => photos.map(photo => photo.tags)
      .reduce((allTags, current) => {
        return allTags.concat(
          current.filter(item => allTags.indexOf(item) == -1))
      }, []))
  }


}
