import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {Router} from '@angular/router';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AddTodoComponent} from './add-todo.component';
import {State, Todo} from '../../interfaces/todo';
import {TodosReducer} from '../../store/todos/todos.reducer';
import {addTodo} from '../../store/todos/todos.actions';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  const initialState: Array<Todo> = [{
    id: 1,
    date: new Date(),
    state: State.Done,
    title: 'test',
    description: ''
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [
        {provide: Router, useValue: router},
        provideMockStore({initialState: {todos: initialState}})
      ],
      declarations: [AddTodoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a variable 'todoForm'`, () => {
    expect(component.todoForm).toBeDefined();
  });

  it(`should have a variable for store link`, () => {
    expect(component.state$).toBeDefined();
  });

  it(`fired 'saveTodo' if button clicked`, () => {
    const spySaveTodo = spyOn(component, 'saveTodo');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(spySaveTodo).toHaveBeenCalledTimes(1);
  });

  describe('Test form', () => {
    it(`do nothing on 'saveTodo' if form invalid`, () => {
      // Make form INVALID
      component.todoForm.controls.title.setValue(null);
      component.todoForm.updateValueAndValidity();

      component.saveTodo();
      expect(router.navigate).not.toHaveBeenCalled();
    });

    it(`update todo and redirect on 'saveTodo'`, () => {
      // Make form VALID
      component.todoForm.controls.title.setValue('test');
      component.todoForm.updateValueAndValidity();

      component.saveTodo();
      expect(router.navigate).toHaveBeenCalledWith(['']);
    });
  });

  it(`"addTodo" actions should add one todo to store`, () => {
    const state = TodosReducer(initialState, addTodo({todo: initialState[0]}));
    expect(state.length).toEqual(2);
    expect(state[1]).toEqual(initialState[0]);
  });
});
