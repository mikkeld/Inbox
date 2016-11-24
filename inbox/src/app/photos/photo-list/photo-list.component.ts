import { Component, OnInit, Input } from '@angular/core';
import {IPhoto} from "../shared/photo";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  @Input()
  public photos: IPhoto[];

  constructor() { }

  ngOnInit() {
  }

}
