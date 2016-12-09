import {Component, OnInit, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import {IPhoto} from "../../shared/photo";
import {Router} from "@angular/router";
import {AlbumSelectService} from "../album-select.service";

@Component({
  selector: 'app-album-select-bar',
  templateUrl: './album-select-bar.component.html',
  styleUrls: ['./album-select-bar.component.css']
})
export class AlbumSelectBarComponent implements OnInit {
  @Input() selectedPhotos: IPhoto[];
  @Output() close = new EventEmitter();

  constructor(private router: Router, private albumSelectService: AlbumSelectService) { }

  ngOnInit() { }

  public closeBar(): void {
    this.close.emit(true)
  }

  public gotoCreateAlbum(): void {
    this.albumSelectService.addSelectedPhotos(this.selectedPhotos);
    this.router.navigate([('/create-album')])
  }

}
