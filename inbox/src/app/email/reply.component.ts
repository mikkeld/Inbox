import { Component, OnInit, Input } from '@angular/core';
import { EmailService } from '../email/email.service';
import {FirebaseObjectObservable} from "angularfire2";
import {Reply} from './reply';

@Component({
  selector: 'reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  @Input()
  email: any;

  constructor(
    private emailService: EmailService,
  ) { }

  ngOnInit() {}

  addReply(reply: string): void {
    this.emailService.addReply(new Reply(reply), this.email.$key);
  }


}
