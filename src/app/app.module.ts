import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResponsiveComponent } from './responsive/responsive.component';
import { CardComponent } from './card/card.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    CardComponent,
    ListComponent,
    ResponsiveComponent,
    TodoComponent,
    DashboardComponent,
    MapComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCs7eABBxK3W5COCKsyobl0wFyG_4w3wd0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
