import {createReducer, on} from '@ngrx/store';
import * as TodosActions from './todos.actions';
import {Todo, State} from '../../interfaces/todo';

export const initialState: Array<Todo> = [];

const STATE_REDUCER = createReducer(
  initialState,
  on(TodosActions.setTodos, (state, {todos}) => (todos)),
  on(TodosActions.toggleState, (state, {todo}) => {
    const copy = [...state];
    todo = Object.assign({}, todo);
    todo.state = todo.state === State.Done ? State.UnDone : State.Done;

    const index = copy.findIndex(t => t.id === todo.id);
    copy[index] = todo;
    return copy.sort((a, b) => {
      if (a.state === b.state) {
        return a.title >= b.title ? 1 : -1;
      }
      return a.state > b.state ? -1 : 1;
    });
  })
);

export function TodosReducer(state: any, action: any): any {
  return STATE_REDUCER(state, action);
}
