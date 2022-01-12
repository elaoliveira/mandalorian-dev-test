import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'new', component: TaskFormComponent},
  {path: 'edit/:id', component: TaskFormComponent},
  {path: 'task-list-item', component: TaskListItemComponent},
  {path: 'task-list', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
