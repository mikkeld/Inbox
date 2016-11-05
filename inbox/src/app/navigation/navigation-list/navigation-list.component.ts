import {Component, Input} from '@angular/core';

@Component({
  selector: 'navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.css']
})
export class NavigationListComponent {

  @Input()
  unreadEmailCount: number;

}
