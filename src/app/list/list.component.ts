import { Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material';
import { ListItem } from './ListItem';

@Component({
  selector: 'app-todo',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  todos: ListItem[] = [
    {
      id: 100,
      description: 'Description 100',
    },
    {
      id: 200,
      description: 'Description 200',
    },
    {
      id: 300,
      description: 'Description 300',
    },
  ];
  selectedOptions: number[] = [];


  public onModelChange(changed: MatSelectionListChange): void {
    console.log(changed);
  }

}
