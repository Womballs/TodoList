import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {toggleState} from '../../store/todos/todos.actions';
import {Todo} from '../../interfaces/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public todoList: Array<Todo> = [];
  public state$: Observable<Array<Todo>>;

  constructor(private router: Router,
              private store: Store<{ todos: Array<Todo> }>) {
    this.state$ = store.select('todos');
  }

  ngOnInit(): void {
    this.state$.subscribe((data: Array<Todo>) => {
      this.todoList = data;
    });
  }

  toggleState(todo: Todo): void {
    this.store.dispatch(toggleState({todo}));
  }

  goToDetails(todo: Todo): void {
    this.router.navigate(['/details', todo.id]);
  }
}
