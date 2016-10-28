import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { Person } from '../person';
import { Router } from '@angular/router';
import { EmailService } from '../email/email.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  emails: Email[];

  constructor(
    private router: Router,
    private emailService: EmailService
  ) { }

  ngOnInit() { }

  sendEmail(emailForm: any): void {
    let receiver = new Person("Imf4nFal01MofFYqOe9I8LcfhX22", "Mikkel", "Dengsoe", "/img", "Happy");
    let email = new Email(receiver, receiver, Date.now(), emailForm.content, emailForm.title);
    this.emailService.composeEmail(email).then(() => {
      console.log("Email sent succesfully");
    });

    let inbox = ['inbox'];
    this.router.navigate(inbox);
  }

}
