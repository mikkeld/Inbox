import { Injectable } from '@angular/core';
import {IEmail} from "../shared/email";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Reply, IReply} from "./reply";

@Injectable()
export class ReplyService {

  private currentUserPath: string;

  constructor(private af: AngularFire) {
    this.currentUserPath = `/emails/Imf4nFal01MofFYqOe9I8LcfhX22`;
  }

  getRepliesForEmail(email: IEmail): FirebaseListObservable<IReply[]> {
    return this.af.database.list(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22/${email.$key}/replies`);
  }

  addReply(reply: IReply, email: IEmail): void {
    this.af.database.list(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22/${email.$key}/replies`)
      .push(reply)
  }

}
