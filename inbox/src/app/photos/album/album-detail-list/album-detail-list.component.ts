import {Component, OnInit, Input} from '@angular/core';
import {IPhoto} from "../../shared/photo";

@Component({
  selector: 'app-album-detail-list',
  templateUrl: './album-detail-list.component.html',
  styleUrls: ['./album-detail-list.component.css']
})
export class AlbumDetailListComponent implements OnInit {
  @Input() photos: IPhoto[];

  constructor() { }

  ngOnInit() {
  }

}
