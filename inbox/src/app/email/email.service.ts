import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Email } from '../email';

@Injectable()
export class EmailService {

  constructor(private af: AngularFire) { }
   private emailDb = this.af.database.list('/emails');

  composeEmail(email: Email): Promise<Email> {
    return Promise.resolve(this.emailDb.push(email));
  }

  getAllEmails(): FirebaseListObservable<any> {
    return this.emailDb;
  }

}
