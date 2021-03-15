import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {DetailsComponent} from './components/details/details.component';
import {AddTodoComponent} from './components/add-todo/add-todo.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'add-todo', component: AddTodoComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: '**', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
