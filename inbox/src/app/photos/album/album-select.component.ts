import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IPhoto} from "../shared/photo";
import {AlbumSelectService} from "./album-select.service";

@Component({
  selector: 'album-select',
  template: '<a (click)="toggleImageSelect(photo)" [ngClass]="{selected: selected}"><i class="material-icons">check_circle</i></a>',
  styles: ['a { color: darkgray; cursor: pointer} .selected { color: royalblue; } ']
})
export class AlbumSelectComponent {
  @Input() photo: IPhoto;
  @Input() selected: boolean;
  @Output() select = new EventEmitter();

  constructor(private albumSelectService: AlbumSelectService) { }

  toggleImageSelect(photo: IPhoto): void {
    this.albumSelectService.addSelectedPhoto(photo);
    this.select.emit(photo);
  }

}
