import {Component, Input, transition, trigger, state, style, animate} from '@angular/core';
import {IPhoto} from "../shared/photo";

@Component({
  selector: 'app-photo-item',
  template: `<img [@heroState]="selected" [routerLink]="'/photos/detail/' + photo.$key" class="responsive-image" [src]="photo.imgPath">`,
  styleUrls: ['./photo-item.component.css'],
  animations: [
    trigger('heroState', [
      state('false', style({
        transform: 'scale(1.0)'
      })),
      state('true', style({
        transform: 'scale(0.9)'
      })),
      transition('0 => 1', animate('100ms ease-in')),
      transition('1 => 0', animate('100ms ease-out'))
    ])
  ]
})
export class PhotoItemComponent {
  @Input() photo: IPhoto;
  @Input() selected: boolean;

}
