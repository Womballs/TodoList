import {Component} from '@angular/core';
import {TodoList} from './data/data';
import {Todo} from './interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todoList: Array<Todo> = TodoList;
}
