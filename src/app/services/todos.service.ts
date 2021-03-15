import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Todo} from '../interfaces/todo';
import {setTodos} from '../store/todos/todos.actions';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient,
              private store: Store<{ todos: Array<Todo> }>) {
  }

  storeAllTodos(): void {
    this.httpClient.get<Array<Todo>>('api/todos').subscribe((data) => {
      this.store.dispatch(setTodos({todos: data}));
    });
  }
}
