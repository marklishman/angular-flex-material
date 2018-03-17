import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div fxLayout="row wrap"
         fxLayoutGap="10px"
         class="card-list">
      <mat-card *ngFor="let text of loremIpsum; let i=index">
        <mat-card-header>
          <mat-card-title>Card {{i+1}} Title</mat-card-title>
        </mat-card-header>

        <div class="mat-card-content">
          <mat-card-content>
            <p>
              {{text}}
            </p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
          </mat-card-actions>
        </div>

      </mat-card>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  loremIpsum: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus nisi. Curabitur non ex iaculis, tincidunt ipsum sed, ' +
    'congue urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non ornare sem.',
    'Lorem ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus nisi. Curabitur non ex iaculis, tincidunt ipsum sed, ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus nisi. Curabitur non ex iaculis, tincidunt ipsum sed, ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus nisi. Curabitur non ex iaculis, tincidunt ipsum sed, ' +
    'congue urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non ornare sem.',
    'Lorem ipsum'
  ];

  constructor() { }

  ngOnInit() {
  }

}
