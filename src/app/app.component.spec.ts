import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {TodosService} from './services/todos.service';
import {setTodos} from './store/todos/todos.actions';
import {TodosReducer} from './store/todos/todos.reducer';
import {State, Todo} from './interfaces/todo';

describe('AppComponent', () => {
  const todos: Array<Todo> = [{
    id: 1,
    date: new Date(),
    state: State.Done,
    title: 'test',
    description: ''
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({todos: TodosReducer})
      ],
      providers: [
        TodosService
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call storeAllTodos method on construct', () => {
    const todoServiceSpy = spyOn(TestBed.inject(TodosService), 'storeAllTodos').and.callThrough();
    expect(todoServiceSpy).not.toHaveBeenCalled();
    TestBed.createComponent(AppComponent);
    expect(todoServiceSpy).toHaveBeenCalledTimes(1);
  });

  it(`"setTodos" actions should set todos`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.whenStable().then(() => {
      const state = TodosReducer([], setTodos({todos}));
      expect(state).toEqual(todos);
    });
  }));
});
