export interface IReply {
  $key?: string;
  reply: string;
}

export class Reply implements  IReply {
  constructor(public reply: string) {}
}
