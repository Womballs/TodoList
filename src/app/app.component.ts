import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Todo} from './interfaces/todo';
import {TodosService} from './services/todos.service';
import {toggleState} from './store/todos/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public todoList: Array<Todo> = [];
  public state$: Observable<Array<Todo>>;

  constructor(private store: Store<{ todos: Array<Todo> }>,
              private todosService: TodosService) {
    this.state$ = store.select('todos');
  }

  ngOnInit(): void {
    this.todosService.storeAllTodos();
    this.state$.subscribe((data: Array<Todo>) => {
      this.todoList = data;
    });
  }

  toggleState(todo: Todo): void {
    this.store.dispatch(toggleState({todo}));
  }
}
