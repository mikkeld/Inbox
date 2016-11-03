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

  composeEmail(title: string, content:string, receiver: IPerson): void {
    let from = new Person('Imf4nFal01MofFYqOe9I8LcfhX22', "Mikkel", "Dengsøe", "https://lh6.googleusercontent.com/-D3ZhLQkij2I/AAAAAAAAAAI/AAAAAAAAAAA/AGNl-OownkmptDpN_QjXHaRV7DOhtCverw/s96-c/photo.jpg");
    let to = new Person(receiver.authId, receiver.firstName, receiver.lastName, receiver.profilePicturePath);
    this.af.database.list(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22`)
      .push(new Email(to, from, Date.now(), content, title));
  }

  getAllEmails(): FirebaseListObservable<IEmail[]> {
    return this.af.database.list(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22`);
  }

  getAllEmailsForRoute(route: string): FirebaseListObservable<IEmail[]> {
    switch(route) {
      case 'inbox':
        return this.af.database.list(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22`);

      case 'starred':
        return this.af.database.list(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22`, {
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
    return this.af.database.object(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22/${key}`);
  }

  markAsImportant(email: IEmail): firebase.Promise<any> {
    return this.af.database.object(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22/${email.$key}`)
      .update({ starred: !email.starred});
  }

  markAsRead(email: IEmail): firebase.Promise<any>  {
    return this.af.database.object(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22/${email.$key}`)
      .update({ read: true })
  }

  addReply(reply: IReply, key: string) {
    this.af.database.list(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22/${key}/replies`)
      .push(reply)
  }

  unreadEmailCount(): any {
    return this.af.database.list(`/emails/Imf4nFal01MofFYqOe9I8LcfhX22/`, {
      query: {
        orderByChild: 'read',
        equalTo: false
      }
    }).map(unreadEmails => {
      return unreadEmails.length;
    });
  }

}
