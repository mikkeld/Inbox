import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPhoto} from "../shared/photo";
import {FirebaseObjectObservable} from "angularfire2";
import {PhotosService} from "../shared/photos.service";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  public photo: FirebaseObjectObservable<IPhoto>;
  public key: string;

  constructor(private route: ActivatedRoute, private photoService: PhotosService) { }

  ngOnInit() {
    this.key = this.route.snapshot.params['id'];
    this.photo = this.photoService.getPhotoForKey(this.key);
  }

}
