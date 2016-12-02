import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../shared/photos.service";
import {Photo, IPhoto} from '../shared/photo';
import {FirebaseListObservable} from "angularfire2";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ImageSearchService} from "../image-search/image-search.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {

  photos: Observable<any>;
  photosTags: any;
  filter: Observable<any>;

  constructor(private photoService: PhotosService, private route: ActivatedRoute, private imageSearchService: ImageSearchService) { }

  ngOnInit() {
    this.filter = this.route.params
      .pluck('filter');
    this.photos = this.filter.
      switchMap(filter => this.photoService.getVisiblePhotos(filter));
    this.photosTags = this.photoService.getNumberImages(5);
  }

  private createThreePhotos(): void {
    const IMGPATH = 'https://firebasestorage.googleapis.com/v0/b/friendlychat-61656.appspot.com/o/img1.jpg?alt=media&token=9413bd73-840f-46bb-8086-f839ded42827';
    const TAGS = ['Hike', 'Camping', 'Dad', 'Landscape'];
    const DATE = Date.now();

    for(let i = 0; i <= 2; i++) {
      this.photoService.createPhoto(new Photo(DATE, TAGS, IMGPATH));
      console.log(`Image ${i} created`);
    }
  }

}
