import {TestBed} from '@angular/core/testing';
import {InMemTodoService} from './in-mem-todo.service';


describe('InMemTodoService', () => {
  let service: InMemTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemTodoService]
    });
    service = TestBed.inject(InMemTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be 5 todos in list', () => {
    expect(service.createDb().todos.length).toBeGreaterThan(0);
  });
});
