import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';

import {AddTodoComponent} from './add-todo.component';
import {TodosReducer} from '../../store/todos/todos.reducer';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        StoreModule.forRoot({todos: TodosReducer})
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

  /*it(`do nothing if form invalid`, () => {
    component.todoForm = new FormGroup({
      title: new FormControl('', Validators.required)
    });
    component.saveTodo();
    tick();
    expect(location.path()).toBe('/add-todo');
  });*/
});
