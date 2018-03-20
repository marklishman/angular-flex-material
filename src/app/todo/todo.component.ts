import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { MatSelectionListChange } from '@angular/material';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [
    {
      description: 'Wash my car',
      done: true
    },
    {
      description: 'Submit invoice for March',
      notes: 'Don\'t forget to add VAT and check the totals.\nSubmit by 10th April.'
    },
    {
      description: 'Research TVs',
      notes: 'Samsung or Panasonic'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onChange(change: MatSelectionListChange): void {
    console.log(change);
  }

}
