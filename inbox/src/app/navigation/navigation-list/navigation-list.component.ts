import {Component, Input} from '@angular/core';

@Component({
  selector: 'navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.css']
})
export class NavigationListComponent {

  @Input() unreadEmailCount: number;
  drawer: any;

  constructor() {
    let MaterialLayout: any;
    this.drawer = document.querySelector('.mdl-layout');
  }

  toggleDrawer() {
    this.drawer.MaterialLayout.toggleDrawer();
  }

}
