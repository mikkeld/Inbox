export interface IPhotoTag {
  tag: string;
  image: string;
  tagCount: number;
}

export class PhotoTag implements IPhotoTag {
  constructor(public tag, public image, public tagCount: number) {
  }
}
