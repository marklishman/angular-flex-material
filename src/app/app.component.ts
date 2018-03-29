import { Component, enableProdMode, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  watcher: Subscription;
  isSmall: boolean;

  showDashboard = environment.dashboard;

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
