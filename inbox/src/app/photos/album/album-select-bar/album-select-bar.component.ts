import {Component, OnInit, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import {IPhoto} from "../../shared/photo";
import {Router} from "@angular/router";
import {CreateAlbumService} from "../create-album/create-album.service";

@Component({
  selector: 'app-album-select-bar',
  templateUrl: './album-select-bar.component.html',
  styleUrls: ['./album-select-bar.component.css']
})
export class AlbumSelectBarComponent implements OnInit {
  @Input() selectedPhotos: IPhoto[];
  @Output() close = new EventEmitter();

  constructor(private router: Router, private createAlbumService: CreateAlbumService) { }

  ngOnInit() { }

  public closeBar(): void {
    this.close.emit(true)
  }

  public gotoCreateAlbum(): void {
    this.createAlbumService.addSelectedPhotos(this.selectedPhotos);
    this.router.navigate([('/create-album')])
  }

}
