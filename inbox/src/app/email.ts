import { Person } from './person';

export class Email {

  receiver: Person;
  sender: Person;
  date: number;
  content: string;
  title: string;
  read: boolean;
  starred: boolean;

  constructor(receiver: Person, sender: Person, date: number, content: string, title: string, read = false, starred = false) {
    this.receiver = receiver;
    this.sender = sender;
    this.date = date;
    this.content = content;
    this.title = title;
    this.read = read;
    this.starred = starred;
  }

  timeSinceReceived(): number {
    return Date.now() - this.date;
  }
}
