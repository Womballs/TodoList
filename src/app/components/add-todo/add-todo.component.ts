import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {State, Todo} from '../../interfaces/todo';
import {addTodo} from '../../store/todos/todos.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  public state$: Observable<Array<Todo>>;
  public todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  constructor(private router: Router,
              private store: Store<{ todos: Array<Todo> }>) {
    this.state$ = store.select('todos');
  }

  saveTodo(): void {
    if (this.todoForm.status === 'VALID') {
      const todo: Todo = {
        id: 0,
        date: new Date(),
        state: State.UnDone,
        title: this.todoForm.value.title,
        description: this.todoForm.value.description
      };
      this.store.dispatch(addTodo({todo}));
      this.router.navigate(['']);
    }
  }
}
