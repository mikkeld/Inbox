import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IPhoto} from "../shared/photo";

@Component({
  selector: 'album-select',
  template: '<a (click)="toggleImageSelect(photo)" [ngClass]="{selected: selected}"><i class="material-icons">check_circle</i></a>',
  styles: ['a { color: darkgray; cursor: pointer} .selected { color: royalblue; } ']
})
export class AlbumSelectComponent {
  @Input() photo: IPhoto;
  @Input() selected: boolean;
  @Output() select = new EventEmitter();

  toggleImageSelect(photo: IPhoto): void {
    this.select.emit(photo);
  }

}
