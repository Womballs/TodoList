import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../interfaces/todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) {
  }

  storeAllTodos(): Observable<Array<Todo>> {
    return this.httpClient.get<Array<Todo>>('api/todos');
  }
}
