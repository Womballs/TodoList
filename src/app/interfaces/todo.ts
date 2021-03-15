export enum State {
  Done = 0,
  UnDone
}

export interface Todo {
  id: number;
  state: State;
  title: string;
}
