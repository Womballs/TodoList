import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {Todo} from './interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todoList: Array<Todo> = [];

  constructor(httpClient: HttpClient) {
    httpClient.get<Array<Todo>>('api/todos').subscribe((data) => {
      this.todoList = data;
    });
  }
}
