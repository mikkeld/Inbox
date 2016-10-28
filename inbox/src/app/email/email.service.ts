import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Email } from '../email';
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

  getEmail(key: string): FirebaseObjectObservable<any> {
    return this.af.database.object(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22/${key}`);
  }

  markAsImportant(email: Email): void {
    this.af.database.object(`emails/${email.receiver.authId}/${email.$key}`).update({ starred: !email.starred })
  }

  markAsRead(email: Email): void {
    this.af.database.object(`emails/${email.receiver.authId}/${email.$key}`).update({ read: true })
  }

  unreadEmailCount(): FirebaseListObservable<any> {
    return this.af.database.list(`emails/Imf4nFal01MofFYqOe9I8LcfhX22`, {
      query: {
        orderByChild: 'read',
        equalTo: false
      }
    })

  }

}
