import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Email } from '../email';
import { AuthService } from '../auth/auth.service';
import {BaseService} from "./base.service";

@Injectable()
export class EmailService {

  constructor(
    private af: AngularFire,
    private authService: AuthService
  ) { }

  composeEmail(email: Email): void {
    this.af.database.list(`/emails/${email.receiver.authId}`).push(email);
  }

  getAllEmails(): any {
    return this.authService.getUserInformation()
      .switchMap(user => {
        return this.af.database.list(`/emails/${user.authId}`);
      });
  }

  getEmail(key: string): any {
    return this.authService.getUserInformation()
      .switchMap(user => {
        return this.af.database.object(`emails/${user.authId}/${key}`)
      })
  }

  markAsImportant(email: Email, $key: string): void {
    this.af.database.object(`emails/${email.receiver.authId}/${$key}`).update({ starred: !email.starred })
  }

  markAsRead(email: Email, $key: string): void {
    this.af.database.object(`emails/${email.receiver.authId}/${$key}`).update({ read: true })
  }

  unreadEmailCount(): any {
    return this.authService.getUserInformation()
      .switchMap(user => {
        return this.af.database.list(`emails/${user.authId}`, {
          query: {
            orderByChild: 'read',
            equalTo: false
          }
        })
      }).map(unreadEmails => {
        return unreadEmails.length;
      })
  }

}
