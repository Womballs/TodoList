import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodosService} from './services/todos.service';
import {Todo} from './interfaces/todo';
import {setTodos} from './store/todos/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private todosService: TodosService,
              private store: Store<{ todos: Array<Todo> }>) {
    this.todosService.storeAllTodos().subscribe((data) => {
      this.store.dispatch(setTodos({todos: data}));
    });
  }
}
