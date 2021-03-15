import {createReducer, on} from '@ngrx/store';
import * as TodosActions from './todos.actions';
import {Todo, State} from '../../interfaces/todo';

export const initialState: Array<Todo> = [];
const sortTodos = (todos: Array<Todo>) => {
  return todos.sort((a, b) => {
    if (a.state === b.state) {
      return new Date(a.date).getTime() >= new Date(b.date).getTime() ? -1 : 1;
    }
    return a.state > b.state ? -1 : 1;
  });
};

const STATE_REDUCER = createReducer(
  initialState,
  on(TodosActions.setTodos, (state, {todos}) => (sortTodos([...todos]))),
  on(TodosActions.toggleState, (state, {todo}) => {
    const copy = [...state];
    todo = Object.assign({}, todo);
    todo.state = todo.state === State.Done ? State.UnDone : State.Done;

    const index = copy.findIndex(t => t.id === todo.id);
    copy[index] = todo;
    return sortTodos(copy);
  }),
  on(TodosActions.addTodo, (state, {todo}) => {
    const copy = [...state];
    const lastIdTodo = copy.reduce((a: Todo, b: Todo) => a.id > b.id ? a : b);
    copy.push(Object.assign({}, todo, {
      id: lastIdTodo.id + 1
    }));
    return sortTodos(copy);
  })
);

export function TodosReducer(state: any, action: any): any {
  return STATE_REDUCER(state, action);
}
