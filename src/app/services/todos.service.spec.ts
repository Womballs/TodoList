import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable} from 'rxjs';
import {provideMockStore, MockStore} from '@ngrx/store/testing';
import {TodosService} from './todos.service';

describe('TodosService', () => {
  let service: TodosService;
  let store: MockStore;
  const initialState = {todos: []};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        provideMockStore({initialState}),
        // other providers
      ],
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('storeAllTodos should return subscription', () => {
    expect(service.storeAllTodos()).toBeInstanceOf(Observable);
  });
});
