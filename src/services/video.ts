import * as _ from 'lodash';

export interface RawVideo {
  name: string;
  id: number;

}

export class Video {
  static validate({ name, id }: RawVideo): boolean {
    if (!_.isString(name)) {
      return false;
    }

    if (!_.isNumber(id)) {
      return false;
    }

    return true;
  }

  private _name: string;
  private readonly _id: number;

  constructor({ name, id }: RawVideo) {
    this._name = name;
    this._id = id;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}
