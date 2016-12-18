import { Component, OnInit } from '@angular/core';
import { IEmail, Email } from '../shared/email';
import { Person } from '../../core/person';
import { Router, ActivatedRoute } from '@angular/router';
import {FirebaseListObservable} from "angularfire2";
import {EmailService} from "../shared/email.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-inbox',
  templateUrl: 'inbox.component.html',
  styleUrls: ['inbox.component.css']
})
export class InboxComponent implements OnInit {

  public emails: FirebaseListObservable<IEmail[]>;
  path: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    const path = this.route.snapshot.url[0].path;
    this.emails = this.emailService.getAllEmailsForRoute(path);
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
