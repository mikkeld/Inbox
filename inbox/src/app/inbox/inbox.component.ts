import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { Person } from '../person';
import { Router } from '@angular/router';
import {FirebaseListObservable} from "angularfire2";
import {EmailService} from "../email/email.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  public emails: Email[];

  constructor(
    private router: Router,
    private emailService: EmailService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.getAllEmails();
  }

  public linkToCompose(): void {
    const link = ['compose'];
    this.router.navigate(link);
  }

  public markAsImportant(email: Email): void {
    this.emailService.markAsImportant(email);
  }

  private getAllEmails(): void {
    this.emailService.getAllEmails()
      .subscribe(emails => {
        this.emails = emails;
      })
  }

  public gotoDetail(email: Email): void {
    this.emailService.markAsRead(email);
    this.router.navigate(['/email', email.$key]);
  }

}
