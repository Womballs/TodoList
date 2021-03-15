export enum State {
  Done = 'done',
  UnDone = 'undone'
}

export interface Todo {
  state: State;
  title: string;
}
