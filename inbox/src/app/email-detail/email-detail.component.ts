import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { ActivatedRoute, Params }   from '@angular/router';
import { EmailService } from '../email/email.service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent implements OnInit {

  email: Email;

  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let key = params['id'];
      this.emailService.getEmail(key)
        .subscribe(email => {
          this.email = email;
        })
    })

  }


}
