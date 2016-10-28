import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { Person } from './person';
import { EmailService } from './email/email.service';

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

  unreadEmailCount: number;

  currentUser: Observable<Person>;

  ngOnInit() {
    this.currentUser = this.authService.getUserInformation();
    this.emailService.unreadEmailCount()
      .subscribe(unreadEmails => {
        this.unreadEmailCount = unreadEmails.length;
      })
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
