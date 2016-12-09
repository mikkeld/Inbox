import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import {IPhoto} from "../shared/photo";
import {IPhotoAlbumItem, PhotoAlbumItem} from "../shared/album-photo";

@Component({
  selector: 'app-photo-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {
  @Input() photos: IPhoto[];
  @Input() selectedPhotos: IPhoto[];
  @Output() select = new EventEmitter();

  isSelected(photo: IPhoto): boolean {
    return this.selectedPhotos.indexOf(photo) > -1;
  }


}
