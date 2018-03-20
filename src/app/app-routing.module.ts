import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { CardComponent } from './card/card.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: 'basic', component: BasicComponent},
  {path: 'responsive', component: ResponsiveComponent},
  {path: 'card', component: CardComponent},
  {path: 'todo', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
