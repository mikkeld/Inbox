import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { Person } from './core/person';
import { EmailService } from './emails/shared/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) { }

  unreadEmailCount: Observable<number>;
  currentUser: Observable<Person>;

  ngOnInit() {
    this.currentUser = this.authService.getUserInformation();
    this.unreadEmailCount = this.emailService.unreadEmailCount();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
