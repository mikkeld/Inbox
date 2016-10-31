import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Person } from '../person';
import {Observable} from "rxjs";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class UserSearchService {

  constructor(private af: AngularFire) { }

  search(term: string): Observable<Person[]> {
    return this.af.database.list('/users')
      .map(users => {
        return users.filter(user => {
          return user.firstName.search(term) > -1;
        })
      })
  }

}
