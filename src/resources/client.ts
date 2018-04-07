import { ResourceError } from './errors';

export interface Client<T> {
  fetchAll(): Promise<T[]>;
  fetchById(id: number): Promise<T>;
};
