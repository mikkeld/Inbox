import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photogroup-item',
  templateUrl: './photogroup-item.component.html',
  styleUrls: ['./photogroup-item.component.css']
})
export class PhotogroupItemComponent implements OnInit {

  @Input()
  photoTag: any;

  constructor() { }

  ngOnInit() {
  }

}
