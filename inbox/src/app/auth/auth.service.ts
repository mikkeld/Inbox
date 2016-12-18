import { Injectable } from '@angular/core';
import {AngularFire, FirebaseAuthState, FirebaseAuth} from 'angularfire2';
import {Person, IPerson} from '../core/person';
import { Observable }        from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

  private authState: FirebaseAuthState = null;
  public currentUser: Person;

  constructor(private af: AngularFire, public auth$: FirebaseAuth) {
    auth$.subscribe((state: any) => {
      this.authState = state;
      this.currentUser = this.authState ? new Person(state.auth.uid, state.auth.displayName, state.auth.displayName, state.auth.photoURL) : null
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
      if(!authInfo) return;
      return new Person(
        authInfo.auth.uid,
        authInfo.auth.displayName,
        authInfo.auth.displayName,
        authInfo.auth.photoURL
      )
    });
  }

  public login(): firebase.Promise<any> {
    return this.auth$.login()
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


