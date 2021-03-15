import {createAction, props} from '@ngrx/store';
import {Todo} from '../../interfaces/todo';

export const setTodos = createAction('[Todos Component] SetTodos', props<{ todos: Array<Todo> }>());
export const toggleState = createAction('[Todos Component] toggleState', props<{ todo: Todo }>());
