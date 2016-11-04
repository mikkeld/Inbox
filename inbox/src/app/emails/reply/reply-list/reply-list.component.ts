import {Component, OnInit, Input} from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import {Reply} from "../reply";
import {IEmail} from '../../shared/email';
import {ReplyService} from "../reply.service";

@Component({
  selector: 'reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.css']
})
export class ReplyListComponent implements OnInit {

  @Input()
  email: IEmail;
  replies: FirebaseListObservable<Reply[]>;

  constructor(private replyService: ReplyService) { }

  ngOnInit() {
    this.replies = this.replyService.getRepliesForEmail(this.email);
  }

}
