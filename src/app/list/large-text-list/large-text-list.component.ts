import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-text-list',
  templateUrl: './large-text-list.component.html',
  styleUrls: ['./large-text-list.component.scss']
})
export class LargeTextListComponent {

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
}
