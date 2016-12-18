import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { Person } from './core/person';
import { EmailService } from './emails/shared/email.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading: boolean = true;

  constructor(
    private authService: AuthService) { }

  unreadEmailCount: Observable<number>;
  currentUser: Observable<Person>;

  ngOnInit() {
    this.currentUser = this.authService.getUserInformation();
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }


}
