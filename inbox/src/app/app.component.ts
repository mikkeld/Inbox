import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) { }

  currentUser: Observable<Person>;

  ngOnInit() {
    this.currentUser = this.authService.getUserInformation();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
