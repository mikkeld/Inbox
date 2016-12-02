import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../shared/photos.service";
import {Photo, IPhoto} from '../shared/photo';
import {PhotoTag, IPhotoTag } from '../shared/photo-tag';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {

  photos: Observable<IPhoto[]>;
  photosTags: Observable<IPhotoTag[]>;
  filter: Observable<any>;

  constructor(private photoService: PhotosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.filter = this.route.params
      .pluck('filter');
    this.photos = this.filter.
      switchMap(filter => this.photoService.getVisiblePhotos(filter));
    this.photosTags = this.photoService.getNumberImages(5);
  }

}
