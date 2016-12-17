import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { IEmail, Email } from './email';
import { AuthService } from '../../auth/auth.service';
import {Observable} from "rxjs";
import {IPerson, Person} from "../../core/person";
import {Reply, IReply} from '../reply/reply';
@Injectable()
export class EmailService {

  private emails: FirebaseListObservable<IEmail[]>;
  private emailUserPath: string;

  constructor(private af: AngularFire, private authService: AuthService) {
    this.emailUserPath = `/emails/${authService.id}`;
  }

  composeEmail(title: string, content:string, receiver: IPerson): firebase.Promise<any> {
    let from = this.authService.currentUser;
    let to = new Person(receiver.authId, receiver.firstName, receiver.lastName, receiver.profilePicturePath);
    return this.af.database.list(`/emails/${receiver.authId}`)
      .push(new Email(to, from, Date.now(), content, title));
  }

  getAllEmails(): FirebaseListObservable<IEmail[]> {
    return this.af.database.list(this.emailUserPath);
  }

  getAllEmailsForRoute(route: string): FirebaseListObservable<IEmail[]> {
    switch(route) {
      case 'inbox':
        return this.af.database.list(this.emailUserPath, {
          query: {
            orderByChild: 'timestamp'
          }
        });

      case 'starred':
        return this.af.database.list(this.emailUserPath, {
          query: {
            orderByChild: 'starred',
            equalTo: true
          }
        });

      default:
        console.log("this is default. Why am I here")
    }
  }

  getEmail(key: string): FirebaseObjectObservable<Email> {
    return this.af.database.object(`${this.emailUserPath}/${key}`);
  }

  markAsImportant(email: IEmail): firebase.Promise<any> {
    return this.af.database.object(`${this.emailUserPath}/${email.$key}`)
      .update({ starred: !email.starred});
  }

  markAsRead(email: IEmail): firebase.Promise<any>  {
    return this.af.database.object(`${this.emailUserPath}/${email.$key}`)
      .update({ read: true })
  }

  addReply(reply: IReply, key: string) {
    this.af.database.list(`${this.emailUserPath}/${key}/replies`)
      .push(reply)
  }

  unreadEmailCount(): any {
    return this.af.database.list(`${this.emailUserPath}`, {
      query: {
        orderByChild: 'read',
        equalTo: false
      }
    }).map(unreadEmails => {
      return unreadEmails.length;
    });
  }

}
