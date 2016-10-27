import { Person } from './person';

export class Email {

  receiver: Person;
  sender: Person;
  date: number;
  content: string;
  title: string;

  constructor(receiver: Person, sender: Person, date: number, content: string, title: string) {
    this.receiver = receiver;
    this.sender = sender;
    this.date = date;
    this.content = content;
    this.title = title;
  }

  timeSinceReceived(): number {
    return Date.now() - this.date;
  }
}
