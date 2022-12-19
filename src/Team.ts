import { Participant } from './Participant';

export class Team {
  private _id: number;

  private _rating: number;

  private _participants: Participant[];

  public get id(): number {
    return this._id;
  }

  public get rating(): number {
    return this._rating;
  }

  public get participants(): Participant[] {
    return this._participants.slice();
  }

  constructor(id: number) {
    this._id = id;
    this._rating = 0;
    this._participants = new Array<Participant>();
  }

  public add(participant: Participant) {
    this._participants.push(participant);
    this._rating += participant.rating;
  }
}
