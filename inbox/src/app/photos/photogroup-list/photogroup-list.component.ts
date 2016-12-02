import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IPhoto} from "../shared/photo";

@Component({
  selector: 'app-photogroup-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './photogroup-list.component.html',
  styleUrls: ['./photogroup-list.component.css']
})
export class PhotogroupListComponent implements OnInit {

  @Input() photoTags: string[];
  @Input() filter: string;

  constructor() { }

  ngOnInit() {
  }

}
