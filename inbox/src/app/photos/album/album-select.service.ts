import { Injectable } from '@angular/core';
import {IPhoto} from "../shared/photo";

@Injectable()
export class AlbumSelectService {
  private selectedPhotos: IPhoto[] = [];

  public addSelectedPhoto(photo: IPhoto): void {
    this.selectedPhotos.push(photo)
  }

  public addSelectedPhotos(photos: IPhoto[]): void {
    this.selectedPhotos = photos;
  }

  public getSelectedPhotos(): IPhoto[] {
    return this.selectedPhotos;
  }

}
