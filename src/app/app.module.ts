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
import { SelectionListComponent } from './list/selection/selection-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { ListComponent } from './list/list.component';
import { LargeTextListComponent } from './list/large-text-list/large-text-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    CardComponent,
    DashboardComponent,
    ListComponent,
    ResponsiveComponent,
    SelectionListComponent,
    TodoComponent,
    LargeTextListComponent,
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
    }),
    AgmSnazzyInfoWindowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
