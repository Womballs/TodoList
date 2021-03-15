export enum State {
  Done = 0,
  UnDone
}

export interface Todo {
  id: number;
  date: Date;
  state: State;
  title: string;
  description: string;
}
