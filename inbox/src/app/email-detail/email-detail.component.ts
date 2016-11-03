import { Component, OnInit } from '@angular/core';
import { Email, IEmail } from '../email';
import { ActivatedRoute, Params }   from '@angular/router';
import { EmailService } from '../email/email.service';
import {FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {

  email: FirebaseObjectObservable<IEmail  >;

  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let key = this.route.snapshot.params['id'];
    this.email = this.emailService.getEmail(key);
  }


}
