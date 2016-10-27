import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { Person } from '../person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  public emails: Email[];

  constructor(private router: Router) { }

  ngOnInit() {
    let sender = new Person(123, "Mikkel", "Dengsøe", "/img", "happy");
    let receiver = new Person(234, "Gizem", "Uygun", "/img", "happy");
    this.emails = [
      new Email(receiver, sender, 1477562806, "This is my first email", "This is my title"),
      new Email(sender, receiver, 1477562806, "This is my second email", "This is my title", true, true)
    ]
  }

  public linkToCompose(): void {
    const link = ['compose'];
    this.router.navigate(link);
  }

}
