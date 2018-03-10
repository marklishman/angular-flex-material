import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-responsive',
  template: `
    <mat-toolbar>
      {{activeMediaQuery}}
    </mat-toolbar>
    <main fxLayout="row wrap"
          fxLayoutAlign="space-evenly center"
          fxLayoutGap="10px"
          fxLayout.lt-md="column"
          fxLayoutAlign.sm="space-around none"
          fxLayoutAlign.lt-md="start stretch"
          fxLayoutGap.lt-md="">
      <section fxFlex="20" fxFlexOrder.lt-md="2"></section>
      <section fxFlex="30" fxFlexOrder.lt-md="3"></section>
      <section fxFlex="10" fxFlexOrder.lt-md="1"></section>
    </main>
  `,
  styles: [`
    main {
      border: 1px solid dimgray;
      height: 400px;
    }
    section {
      height: 200px;
    }
    section:nth-of-type(1) {
      background: pink;
    }
    section:nth-of-type(2) {
      background: lightgreen;
    }
    section:nth-of-type(3) {
      background: lightblue;
    }
  `]
})
export class ResponsiveComponent implements OnDestroy {

  watcher: Subscription;
  activeMediaQuery = '';

  constructor(private media: ObservableMedia) {

    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = ${change.mediaQuery}` : '';
    });

  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
