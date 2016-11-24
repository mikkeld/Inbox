import { Component, OnInit, Input } from '@angular/core';
import {IPhoto} from "../shared/photo";

@Component({
  selector: 'app-photogroup-list',
  templateUrl: './photogroup-list.component.html',
  styleUrls: ['./photogroup-list.component.css']
})
export class PhotogroupListComponent implements OnInit {

  @Input()
  photoTags: any[];

  constructor() { }

  ngOnInit() {
  }

}
