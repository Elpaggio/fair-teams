import { Participant } from './Participant';

export class Team {
  private _id: string;

  private _rating: number;

  private _participants: Participant[];

  public get id(): string {
    return this._id;
  }

  public get rating(): number {
    return this._rating;
  }

  public get participants(): Participant[] {
    return this._participants.slice();
  }

  constructor(id: string) {
    this._id = id;
    this._rating = 0;
    this._participants = new Array<Participant>();
  }

  public add(participant: Participant) {
    this._participants.push(participant);
    this._rating += participant.rating;
  }
}
