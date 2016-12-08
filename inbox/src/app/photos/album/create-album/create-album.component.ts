import { Component, OnInit } from '@angular/core';
import {CreateAlbumService} from "./create-album.service";
import {IPhoto} from "../../shared/photo";

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {
  selectedPhotos: IPhoto[];

  constructor(private createAlbumService: CreateAlbumService) {
    this.selectedPhotos = this.createAlbumService.getSelectedPhotos();
  }

  ngOnInit() {
  }

}
