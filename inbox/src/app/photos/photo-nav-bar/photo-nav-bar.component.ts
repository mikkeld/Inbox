import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-photo-nav-bar',
  templateUrl: './photo-nav-bar.component.html',
  styleUrls: ['./photo-nav-bar.component.css']
})
export class PhotoNavBarComponent {

  constructor(private router: Router) { }

  gotoRoute(route: string): void {
    this.router.navigate([route])
  }

}
