import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: Todo[] = [
    {
      id: 100,
      description: 'Wash my car',
      done: true
    },
    {
      id: 200,
      description: 'Submit invoice for March',
      notes: 'Don\'t forget to add VAT and check the totals.\nSubmit by 10th April.'
    },
    {
      id: 300,
      description: 'Research TVs',
      notes: 'Samsung or Panasonic'
    },
  ];

}
