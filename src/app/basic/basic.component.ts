import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-basic',
  template: `
    <main fxLayout="row wrap"
          fxLayoutAlign="space-evenly start"
          fxLayoutGap="10px">
      <section *ngFor="let width of flexWidths; let i=index"
               fxFlex="{{width}}">
        <span>{{i+1}}</span>
      </section>
    </main>
  `,
  styles: [`
    main {
      border: 1px solid dimgray;
      height: 500px;
    }
    section {
      background: darkseagreen;
      color: white;
      font-size: 40px;
      height: 200px;
      justify-content: center;
      margin-top: 10px;
      padding-top: 10px;
      text-align: center;
    }
  `]
})
export class BasicComponent {

  flexWidths = [10, 50, 10, 20, 10, 30, 40];

}
