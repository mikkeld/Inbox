import { Injectable } from '@angular/core';
import { IPhoto } from './photo';
import { AngularFire } from 'angularfire2';
import {Observable} from "rxjs";
import { IPhotoTag, PhotoTag } from './photo-tag';

@Injectable()
export class PhotoGroupService {

  constructor(private af: AngularFire) { }

  public getNumberImages(numberImages: number): Observable<IPhotoTag[]> {
    return this.af.database.list('photos/Imf4nFal01MofFYqOe9I8LcfhX22')
      .map(photos => {
        return this.sortDict(this.wordCount(photos)).slice(0, numberImages)
          .map(sortedArr => {
            let tag = sortedArr[0];
            let tagCount = sortedArr[1];
            let image = this.findFirstPhoto(sortedArr[0], photos);
            return new PhotoTag(tag, image, tagCount);
          });
      })
  }

  private wordCount(photos: IPhoto[]): any {
    let wordCount = {};
    for(let photo of photos) {
      for(let tag of photo.tags) {
        if(wordCount[tag] != undefined) {
          wordCount[tag] += 1;
        } else {
          wordCount[tag] = 1;
        }
      }
    }
    return wordCount;
  }

  private sortDict(dictionary: any): any[] {
    return Object.keys(dictionary)
      .map(key => {
        return [key, dictionary[key]];
      })
      .sort((first, second) => {
        return second[1] - first[1]
      });
  }

  private findFirstPhoto(tag: string, photos: IPhoto[]): IPhoto {
    for(let photo of photos) {
      if(photo.tags.indexOf(tag) > -1) {
        return photo
      }
    }
  }

}
