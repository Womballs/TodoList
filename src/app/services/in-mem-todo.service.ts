import {InMemoryDbService} from 'angular-in-memory-web-api';
import {State} from '../interfaces/todo';

export class InMemTodoService implements InMemoryDbService {
  createDb(): any {
    const todos = [
      {
        id: 0,
        state: State.UnDone,
        title: 'test'
      },
      {
        id: 1,
        state: State.UnDone,
        title: 'test1'
      },
      {
        id: 2,
        state: State.UnDone,
        title: 'test2'
      },
      {
        id: 3,
        state: State.Done,
        title: 'test3'
      },
      {
        id: 4,
        state: State.Done,
        title: 'test4'
      }
    ];
    return {todos};
  }
}
