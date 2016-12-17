import { Component, OnInit } from '@angular/core';
import { IEmail, Email } from '../shared/email';
import { Person } from '../../core/person';
import { Router } from '@angular/router';
import { EmailService } from '../shared/email.service';
import { UserSearchService } from '../../shared/user-search/user-search.service'
import {Subject, Observable} from "rxjs";

@Component({
  selector: 'app-compose',
  templateUrl: 'compose.component.html',
  styleUrls: ['compose.component.css'],
  providers: [UserSearchService]
})
export class ComposeComponent implements OnInit {

  private searchTerms = new Subject<string>();
  public people: Observable<Person[]>;
  public receiver: Person;

  constructor(
    private router: Router,
    private emailService: EmailService,
    private userSearchService: UserSearchService
  ) { }

  ngOnInit() {
    this.people = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.userSearchService.search(term)
        : Observable.of<Person[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Person[]>([]);
      })
  }

  sendEmail(emailForm: any): void {
    this.emailService.composeEmail(emailForm.title, emailForm.content, this.receiver);
    let inbox = ['inbox'];
    this.router.navigate(inbox);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  setReceiver(person: Person): void {
    this.receiver = person;
  }

  resetReceiver(): void {
    this.receiver = null;
  }


}
