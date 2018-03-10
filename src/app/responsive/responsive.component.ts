import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-responsive',
  template: `
    <mat-toolbar>
      ({{activeMediaQuery}})
    </mat-toolbar>
    <main fxLayout="row wrap"
          fxLayoutAlign="space-evenly start"
          fxLayoutGap="10px"
          fxLayout.lt-md="column"
          fxLayoutAlign.lt-md="start none">
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
export class ResponsiveComponent implements OnDestroy {

  flexWidths = [10, 50, 10, 20, 10, 30, 40];
  watcher: Subscription;
  activeMediaQuery = '';

  constructor(private media: ObservableMedia) {

    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
    });

  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
