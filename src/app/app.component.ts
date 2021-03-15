import {Component} from '@angular/core';
import {TodosService} from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private todosService: TodosService) {
    this.todosService.storeAllTodos();
  }
}
