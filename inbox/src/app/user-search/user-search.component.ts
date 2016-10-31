import { Component, OnInit } from '@angular/core';
import { UserSearchService } from './user-search.service';
import {Subject, Observable} from "rxjs";
import {Person} from "../person";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {

  private searchTerms = new Subject<string>();
  public people: Observable<Person[]>;

  constructor(private searchService: UserSearchService) { }

  ngOnInit() {
    this.people = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
      ? this.searchService.search(term)
      : Observable.of<Person[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Person[]>([]);
      })
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  static addToInput(person: Person): void {
    console.log(person.firstName);
  }

}
