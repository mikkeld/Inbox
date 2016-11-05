import { Component, OnInit, Input } from '@angular/core';
import { EmailService } from '../shared/email.service';
import {FirebaseObjectObservable} from "angularfire2";
import {Reply} from './reply';
import {Person} from '../../core/person';

@Component({
  selector: 'reply',
  templateUrl: 'reply.component.html',
  styleUrls: ['reply.component.css']
})
export class ReplyComponent implements OnInit {

  @Input()
  email: any;
  public inFocus:boolean;

  constructor(
    private emailService: EmailService,
  ) { }

  ngOnInit() {
    this.inFocus = false;
  }

  addReply(reply: string): void {

    let sender = new Person('Imf4nFal01MofFYqOe9I8LcfhX22', "Mikkel", "Dengsøe", "https://lh6.googleusercontent.com/-D3ZhLQkij2I/AAAAAAAAAAI/AAAAAAAAAAA/AGNl-OownkmptDpN_QjXHaRV7DOhtCverw/s96-c/photo.jpg");
    this.emailService.addReply(new Reply(reply, sender), this.email.$key);
  }

  public onFocus(): void {
    this.inFocus = true;
  }

  public onBlur(): void {
    this.inFocus = false;
  }


}
