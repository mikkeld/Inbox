import { Injectable } from '@angular/core';
import {AngularFire, FirebaseAuthState, FirebaseAuth} from 'angularfire2';
import { Person } from '../core/person';
import { Observable }        from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

  private authState: FirebaseAuthState = null;
  public user: any;

  constructor(private af: AngularFire, public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated() {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  public getUserInformation(): Observable<Person> {
    return this.auth$.map(authInfo => {
      return new Person(
        authInfo.auth.uid,
        authInfo.auth.displayName,
        authInfo.auth.displayName,
        authInfo.auth.photoURL
      )
    });
  }

  public login() {
    this.auth$.login()
      .then((user) => {
        this.saveUser(new Person(user.auth.uid, user.auth.displayName, user.auth.displayName, user.auth.photoURL))
      });
  }

  public logout() {
    this.auth$.logout();
  }

  private saveUser(person: Person): void {
    const userPath = this.af.database.object(`/users/${person.authId}`);
    userPath.set({
      authId: person.authId,
      firstName: person.firstName,
      lastName: person.lastName,
      profilePicturePath: person.profilePicturePath
    })
  }

}


