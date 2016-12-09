import {Component, Input} from '@angular/core';
import {IAlbum} from "../../shared/album";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})

export class AlbumListComponent {
  @Input() albums: IAlbum[];

}
