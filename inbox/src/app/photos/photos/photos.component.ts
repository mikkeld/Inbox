import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../shared/photos.service";
import {Photo, IPhoto} from '../shared/photo';
import {PhotoTag, IPhotoTag } from '../shared/photo-tag';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {PhotoGroupService} from "../shared/photo-group.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {

  photos: Observable<IPhoto[]>;
  photosTags: Observable<IPhotoTag[]>;
  filter: Observable<any>;
  albumSelectBarShowing: boolean = false;
  private selectedPhotos: IPhoto[];

  constructor(private photoService: PhotosService, private route: ActivatedRoute, private photoGroupService: PhotoGroupService) {
    this.selectedPhotos = [];
  }

  ngOnInit() {
    this.filter = this.route.params
      .pluck('filter');
    this.photos = this.filter.
      switchMap(filter => this.photoService.getVisiblePhotos(filter));
    this.photosTags = this.photoGroupService.getNumberImages(5);
  }

  toggleImageSelect(photo: IPhoto): void {
    let index = this.selectedPhotos.indexOf(photo);
    if(index === -1) {
      this.selectedPhotos.push(photo)
    } else {
      this.selectedPhotos.splice(index, 1);
    }
    this.setAlbumSelectBarShowing();
    console.log(this.selectedPhotos);
  }

  clearSelect(): void {
    this.selectedPhotos = [];
    this.setAlbumSelectBarShowing();
  }

  private setAlbumSelectBarShowing(): void {
    this.albumSelectBarShowing = !!this.selectedPhotos.length
  }

}
