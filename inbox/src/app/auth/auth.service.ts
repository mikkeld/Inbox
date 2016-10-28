import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Person } from '../person';
import { Observable }        from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private af: AngularFire) {
    const allUsersPath = this.af.database.list('/users')
  }

  private allUIDs: string[];

  public login() {
    var me = this;
    this.af.auth.login()
      .then(() => {
        console.log("user logged in");
        console.log(me.af.auth)
      });
  }

  public logout() {
    this.af.auth.logout();
    // Redirect user
  }

  public getUserInformation(): Observable<Person> {
    return this.af.auth.map(authInfo => {
      return new Person(
        authInfo.google.uid,
        authInfo.google.displayName,
        authInfo.google.displayName,
        authInfo.google.photoURL
      )
    });
  }

  // private firstLogin(person: Person): boolean {
  //
  // }
  //
  // private getAllUIDs(): string[] {
  //   this.allUsersPath.subscribe(users => {
  //     this.allUIDs = users.map(user => {
  //       return user.authId;
  //     });
  //   })
  // }
  //
  // private createUser(person: Person): void {
  //
  // }

}
