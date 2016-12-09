import { Injectable } from '@angular/core';
import {IPhoto} from "../shared/photo";

@Injectable()
export class AlbumSelectService {
  selectedPhotos: IPhoto[] = [];

  public addSelectedPhoto(photo: IPhoto): void {
    this.selectedPhotos.push(photo)
  }

}
