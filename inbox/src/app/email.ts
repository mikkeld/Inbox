import { Person } from './person';

export class Email {

  receiver: Person;
  sender: Person;
  date: number;
  content: string;
  title: string;
  read: boolean;
  starred: boolean;
  $key: string;

  constructor(receiver: Person, sender: Person, date: number, content: string, title: string, read = false, starred = false, $key?: string) {
    this.receiver = receiver;
    this.sender = sender;
    this.date = date;
    this.content = content;
    this.title = title;
    this.read = read;
    this.starred = starred;
    this.$key = $key;
  }

  timeSinceReceived(): number {
    return Date.now() - this.date;
  }
}
