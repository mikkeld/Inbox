import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {IPhoto} from "../shared/photo";
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class ImageSearchService {

  private tags: Observable<string[]>;
  private photoPath: string;

  constructor(private af: AngularFire, private authService: AuthService) {
    this.photoPath = `photos/${this.authService.id}`;
    this.tags = this.uniqueCategories();
  }

  public search(term: string): Observable<string[]> {
    return this.tags
      .map(tags => tags.filter(tag => {
        return tag.search(term) > -1;
      }))
  }

  private uniqueCategories(): Observable<any[]> {
    return this.af.database.list(this.photoPath)
      .map(photos => photos.map(photo => photo.tags)
      .reduce((allTags, current) => {
        return allTags.concat(
          current.filter(item => allTags.indexOf(item) == -1))
      }, []))
  }


}
