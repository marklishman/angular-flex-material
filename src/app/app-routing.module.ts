import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ResponsiveComponent } from './responsive/responsive.component';

const routes: Routes = [
  {path: 'basic', component: BasicComponent},
  {path: 'responsive', component: ResponsiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
