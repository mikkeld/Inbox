import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { Person } from '../person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sendEmail(emailForm: any): void {
    let receiver = new Person(123, "Mikkel", "Dengsoe", "/img", "Happy");
    let email = new Email(receiver, receiver, Date.now(), emailForm.content, emailForm.title);
    console.log(email);
    let inbox = ['inbox'];
    this.router.navigate(inbox);
  }



}
