import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { MatSelectionListChange } from '@angular/material';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
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
  selectedOptions: number[] = [];

  ngOnInit(): void {
    this.selectedOptions = this.todos
      .filter( todo => todo.done )
      .map( todo => todo.id );
  }

  public onModelChange(change: MatSelectionListChange): void {
    this.todos = this.todos.map(
      todo => {
        todo.done = this.selectedOptions.indexOf(todo.id) > -1;
        return todo;
      });
  }

}
