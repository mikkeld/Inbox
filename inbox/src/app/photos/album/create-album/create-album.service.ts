import { Injectable } from '@angular/core';
import {IPhoto} from "../../shared/photo";

@Injectable()
export class CreateAlbumService {

  constructor() {

  }

  private selectedPhotos: IPhoto[];

  public addSelectedPhotos(photos: IPhoto[]): void {
    this.selectedPhotos = photos;
  }

  public getSelectedPhotos(): IPhoto[] {
    return this.selectedPhotos;
  }


}
