import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Person } from '../person';
import { Observable }        from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private af: AngularFire) { }

  public login() {
    this.af.auth.login()
      .then((user) => {
        this.saveUser(new Person(user.auth.uid, user.auth.displayName, user.auth.displayName, user.auth.photoURL, "happy"))
      });
  }

  public logout() {
    this.af.auth.logout();
    // Redirect user
  }

  public getUserInformation(): Observable<Person> {
    return this.af.auth.map(authInfo => {
      return new Person(
        authInfo.auth.uid,
        authInfo.auth.displayName,
        authInfo.auth.displayName,
        authInfo.auth.photoURL
      )
    });
  }

 private saveUser(person: Person): void {
    const userPath = this.af.database.object(`/users/${person.authId}`);
    userPath.set({
      authId: person.authId,
      firstName: person.firstName,
      lastName: person.lastName,
      profilePicturePath: person.profilePicturePath,
      happiness: person.happiness
    })
  }

}
