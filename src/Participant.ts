/* eslint-disable max-classes-per-file */
export class Participant {
  private _name: string;

  private _rating: number;

  public get name(): string {
    return this._name;
  }

  public get rating(): number {
    return this._rating;
  }

  constructor(name: string, rating: number) {
    this._name = name;
    this._rating = rating;
  }
}
