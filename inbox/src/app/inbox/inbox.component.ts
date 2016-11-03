import { Component, OnInit } from '@angular/core';
import { IEmail, Email } from '../email';
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

  public emails: FirebaseListObservable<IEmail[]>;

  constructor(
    private router: Router,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.emails = this.emailService.getAllEmails();
  }

  public gotoDetail(email: IEmail): void {
    this.emailService.markAsRead(email);
    this.router.navigate(['/email', email.$key]);
  }

  public linkToCompose(): void {
    const link = ['compose'];
    this.router.navigate(link);
  }

  public markAsImportant(email: IEmail): void {
    this.emailService.markAsImportant(email);
  }

}
