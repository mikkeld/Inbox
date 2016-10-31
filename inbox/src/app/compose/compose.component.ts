import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { Person } from '../person';
import { Router } from '@angular/router';
import { EmailService } from '../email/email.service';
import { UserSearchService } from '../user-search/user-search.service';
import {Subject, Observable} from "rxjs";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css'],
  providers: [UserSearchService]
})
export class ComposeComponent implements OnInit {

  emails: Email[];
  private searchTerms = new Subject<string>();
  public people: Observable<Person[]>;
  public receiver: Person;

  constructor(
    private router: Router,
    private emailService: EmailService,
    private userSearchService: UserSearchService,
    private authService: AuthService
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
    let email = new Email(this.receiver, this.receiver, Date.now(), emailForm.content, emailForm.title);
    console.log(email);
    // this.emailService.composeEmail(email);
    // let inbox = ['inbox'];
    // this.router.navigate(inbox);
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
