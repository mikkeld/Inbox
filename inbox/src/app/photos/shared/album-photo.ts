import {IPhoto, Photo} from "./photo";

export interface IPhotoAlbumItem extends IPhoto{
  selected: boolean;
}

export class PhotoAlbumItem extends Photo implements IPhotoAlbumItem {
  public selected: boolean = false;
  constructor(date: number, tags: string[], imgPath: string) {
    super(date, tags, imgPath);
  }
}
