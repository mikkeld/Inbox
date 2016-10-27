import { Person } from './person.ts'

export class Email {
  constructor(receiver: Person, sender: Person, date: Date, content: string, title: string) {
    this.receiver = receiver;
    this.sender = sender;
    this.date = date;
    this.content = content;
    this.title = title;
  }

  timeSinceReceived(): DateTimeFormat {
    return Date.now() - this.date;
  }
}
