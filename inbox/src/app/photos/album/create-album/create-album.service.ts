import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {IPhoto} from "../../shared/photo";

@Injectable()
export class CreateAlbumService {

  private selectedPhotos: IPhoto[];

  public addSelectedPhotos(photos: IPhoto[]): void {
    this.selectedPhotos = photos;
  }

  public getSelectedPhotos(): IPhoto[] {
    return this.selectedPhotos;
  }

}
