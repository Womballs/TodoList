import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ListComponent} from './list.component';
import {State, Todo} from 'src/app/interfaces/todo';
import {TodosReducer} from 'src/app/store/todos/todos.reducer';
import {toggleState} from 'src/app/store/todos/todos.actions';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let store: MockStore;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatCheckboxModule
      ],
      providers: [
        {provide: Router, useValue: router},
        provideMockStore({initialState: {todos: initialState}})
      ],
      declarations: [
        ListComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a variable 'TodoList'`, () => {
    expect(component.todoList).toBeDefined();
  });

  it(`should have a variable for store link`, () => {
    expect(component.state$).toBeDefined();
  });

  it(`should have a variable 'TodoList' initialized with store`, async(() => {
    fixture.whenStable().then(() => {
      expect(component.todoList.length).toEqual(1);
    });
  }));

  it(`should dispatch "toggleState" actions when checkbox is clicked`, async(() => {
    fixture.whenStable().then(() => {
      const spyToggleState = spyOn(component, 'toggleState');

      expect(component.todoList.length).toEqual(1);
      expect(component.todoList[0].state).toEqual(State.Done);

      const checkbox = fixture.debugElement.nativeElement.querySelector('mat-checkbox');
      checkbox.click();

      expect(spyToggleState).toHaveBeenCalledWith(component.todoList[0]);
    });
  }));

  it(`"toggleState" actions should toggle todo state`, async(() => {
    fixture.whenStable().then(() => {
      const state = TodosReducer(initialState, toggleState({todo: component.todoList[0]}));
      expect(state[0].state).toEqual(State.UnDone);
    });
  }));

  it(`when card-content is clicked should fired goToDetails`, async(() => {
    fixture.whenStable().then(() => {
      const spyGoToDetails = spyOn(component, 'goToDetails');

      expect(component.todoList.length).toEqual(1);
      const content = fixture.debugElement.nativeElement.querySelector('mat-card-content');
      content.click();

      expect(spyGoToDetails).toHaveBeenCalledWith(component.todoList[0]);
    });
  }));

  it(`should go to details when goToDetails is fired`, () => {
    component.goToDetails(component.todoList[0]);
    expect(router.navigate).toHaveBeenCalledWith(['/details', component.todoList[0].id]);
  });
});
