import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  watcher: Subscription;
  isSmall: boolean;

  constructor(private media: ObservableMedia) {

    this.watcher = media.subscribe(
      (change: MediaChange) => {
        this.isSmall = ['xs', 'sm'].indexOf(change.mqAlias) > -1;
    });

  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
