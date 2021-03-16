import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {provideMockStore} from '@ngrx/store/testing';
import {DetailsComponent} from './details.component';
import {State, Todo} from '../../interfaces/todo';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
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
        RouterTestingModule,
        MatCardModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 1})
          }
        },
        provideMockStore({initialState: {todos: initialState}})
      ],
      declarations: [DetailsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a variable 'todo'`, () => {
    expect(component.todo).toBeDefined();
  });

  it(`should have a variable for store link`, () => {
    expect(component.state$).toBeDefined();
  });

  it(`should have a 'todo' with id 1`, () => {
    expect(component.todo.id).toEqual(1);
  });
});
