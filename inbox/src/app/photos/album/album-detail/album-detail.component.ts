import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../../shared/album.service";
import {IAlbum} from "../../shared/album";
import {FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  public album: FirebaseObjectObservable<IAlbum>;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    let key = this.route.snapshot.params['id'];
    this.album = this.albumService.getAlbumForKey(key);
  }

}
