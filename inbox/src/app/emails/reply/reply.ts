import {Person} from "../../core/person";

export interface IReply {
  $key?: string;
  reply: string;
  sender: Person;
}

export class Reply implements  IReply {
  constructor(public reply: string, public sender: Person) {}
}
