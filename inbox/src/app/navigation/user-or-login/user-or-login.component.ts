import {Component, OnInit, Input} from '@angular/core';
import {IPerson} from "../../core/person";

@Component({
  selector: 'user-or-login',
  templateUrl: './user-or-login.component.html',
  styleUrls: ['./user-or-login.component.css']
})
export class UserOrLoginComponent implements OnInit {
  @Input()
  public currentUser: IPerson;

  constructor() { }

  ngOnInit() {
  }

}
