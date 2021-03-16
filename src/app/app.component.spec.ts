import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {TodosReducer} from './store/todos/todos.reducer';
import {TodosService} from './services/todos.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({todos: TodosReducer})
      ],
      providers: [TodosService],
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
});
