import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-basic',
  template: `
    <mat-toolbar color="primary">
      Basic ({{activeMediaQuery}})
    </mat-toolbar>
    <main fxLayout="row wrap"
          fxLayoutAlign="space-evenly start"
          fxLayoutGap="10px"
          fxLayout.lt-md="column"
          fxLayoutAlign.lt-md="start none">
      <section *ngFor="let width of flexWidths; let i=index"
               fxFlex="{{width}}">
        {{i}}
      </section>
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
      padding-top:20px;
      text-align: center;
    }
  `]
})
export class BasicComponent implements OnDestroy {

  flexWidths = [10, 50, 10, 20, 10, 30, 40];
  watcher: Subscription;
  activeMediaQuery = '';

  constructor(private media: ObservableMedia) {

    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      console.log(this.activeMediaQuery);
    });

  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
