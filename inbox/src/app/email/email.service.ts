import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Email } from '../email';
import {BaseService} from "./base.service";
import { AuthService } from '../auth/auth.service';

@Injectable()
export class EmailService {

  constructor(
    private af: AngularFire
  ) { }

  composeEmail(email: Email): Promise<Email> {
    return Promise.resolve(this.af.database.list(`/emails/${email.receiver.authId}`).push(email));
  }

  getAllEmails(): FirebaseListObservable<any> {
    return this.af.database.list('/emails/Imf4nFal01MofFYqOe9I8LcfhX22');
  }

  markAsImportant(email: Email): void {
    this.af.database.object(`emails/${email.receiver.authId}/${email.$key}`).update({ starred: !email.starred })
  }

}
