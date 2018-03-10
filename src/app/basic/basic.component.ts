import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
    <main fxLayout="row wrap"
          fxLayoutAlign="space-evenly start"
          fxLayoutGap="10px">
      <section *ngFor="let f of flexValues"
               fxFlex="{{f}}">
        <span>{{f}}</span>
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
      height: 150px;
      justify-content: center;
      margin-top: 10px;
      padding-top: 10px;
      text-align: center;
    }
  `]
})
export class BasicComponent {

  flexValues = [50, 10, 20, 30, 40];

}
