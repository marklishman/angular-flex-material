import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
    <mat-toolbar color="primary">
      Basic
    </mat-toolbar>
    <main fxLayout="row wrap"
          fxLayoutAlign="space-around start"
          fxLayoutGap="10px">
      <section fxFlex="10">1</section>
      <section fxFlex="50">2</section>
      <section fxFlex="10">3</section>
      <section fxFlex="20">4</section>
      <section fxFlex="10">5</section>
      <section fxFlex="30">6</section>
      <section fxFlex="40">7</section>
    </main>
  `,
  styles: [`
    main {
      border: 1px solid dimgray;
      height: 1000px;
    }
    section {
      background: darkseagreen;
      color: white;
      font-size: 40px;
      height: 200px;
      justify-content: center;
      margin-top: 10px;
      text-align: center;
      width: 200px;
    }
  `]
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
