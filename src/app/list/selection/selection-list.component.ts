import { Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';
import { ListItem } from './ListItem';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent {
  items: ListItem[] = [
    {
      id: 100,
      description: 'Description for id 100',
    },
    {
      id: 200,
      description: 'Description for id 200',
    },
    {
      id: 300,
      description: 'Description for id 300',
    },
    {
      id: 400,
      description: 'Description for id 400',
    },
    {
      id: 500,
      description: 'Description for id 500',
    },
  ];
  selectedOptions: number[] = [];


  public onModelChange(changed: MatSelectionListChange): void {
    console.log(changed);
  }

}
