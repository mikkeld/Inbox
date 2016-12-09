import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import {IAlbum} from "../../shared/album";
import {AlbumService} from "../../shared/album.service";

@Component({
  selector: 'album-component',
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.css']
})
export class AlbumComponent implements OnInit {
  allAlbums: FirebaseListObservable<IAlbum[]>;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
    this.allAlbums = this.albumService.getAllAlbums();
    window['albums'] = this.albumService.getAllAlbums();
  }

}
