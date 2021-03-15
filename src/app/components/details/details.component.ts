import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Todo} from '../../interfaces/todo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public todo: any;
  public state$: Observable<Array<Todo>>;

  constructor(private route: ActivatedRoute,
              private store: Store<{ todos: Array<Todo> }>) {
    this.state$ = store.select('todos');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.state$.subscribe((todos: Array<Todo>) => {
        this.todo = todos.find(t => t.id === +params.id);
      });
    });
  }
}
