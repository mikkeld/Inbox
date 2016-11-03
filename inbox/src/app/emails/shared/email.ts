import { Person } from '../../core/person';

export interface IEmail {
  $key?: string;
  receiver: Person;
  date: number;
  content: string;
  title: string;
  read: boolean
  starred: boolean;
}

export class Email implements IEmail {
  starred: boolean = false;
  read: boolean = false;

  constructor(
    public receiver: Person,
    public sender: Person,
    public date: number,
    public content: string,
    public title: string
  ) {}

  timeSinceReceived(): number {
    return Date.now() - this.date;
  }
}
