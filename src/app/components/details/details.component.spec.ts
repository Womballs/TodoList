import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {StoreModule} from '@ngrx/store';
import {DetailsComponent} from './details.component';
import {TodosReducer} from '../../store/todos/todos.reducer';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({todos: TodosReducer})
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 1})
          }
        }
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
});
