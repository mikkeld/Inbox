import { Component, OnInit } from '@angular/core';
import {CreateAlbumService} from "./create-album.service";
import {IPhoto, Photo} from "../../shared/photo";
import {Album} from "../../shared/album";
import {AlbumService} from "../../shared/album.service";
import {Router} from "@angular/router";
import {AlbumSelectService} from "../album-select.service";


@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent {
  selectedPhotos: IPhoto[];

  constructor(private albumSelectService: AlbumSelectService, private albumService: AlbumService, private router: Router) {
    this.selectedPhotos = this.albumSelectService.getSelectedPhotos();
  }

  public createAlbum(formValue: any): void {
    let album = new Album(formValue.title, this.removeImgKey());
    this.albumService.createAlbum(album);
    this.router.navigate(['albums']);
  }

  private removeImgKey(): Photo[] {
    let photos = [];
    for(let photo of this.selectedPhotos) {
      photos.push(new Photo(photo.date, photo.tags, photo.imgPath));
    }
    return photos
  }

}
