import {IPhoto, Photo} from "./photo";

export interface IAlbum {
  $key?: string,
  title: string,
  photos: Photo[]
}

export class Album {
  title: string;
  photos: IPhoto[];
  constructor(title: string, photos: IPhoto[]) {
    this.title = title;
    this.photos = photos;
  }
}
