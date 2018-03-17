import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path: 'basic', component: BasicComponent},
  {path: 'responsive', component: ResponsiveComponent},
  {path: 'card', component: CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
