import {Component, Input} from '@angular/core';
import {IAlbum} from "../../shared/album";

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent{
  @Input() album: IAlbum;

}
