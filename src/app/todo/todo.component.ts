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
      description: 'Wash car',
      done: true
    },
    {
      id: 200,
      description: 'Visit the gym',
    },
    {
      id: 300,
      description: 'Cut the grass',
    },
    {
      id: 400,
      description: 'Order new phone',
    },
  ];

  newTodo: string;

  get selected() {
    return this.todos.filter( todo => todo.done).length;
  }

  get selectedPercentage() {
    return Math.ceil(this.selected / this.todos.length * 100);
  }

  onChange() {
    const maxId = this.todos
      .map( todo => todo.id)
      .reduce(function(a, b) {
      return Math.max(a, b);
    });
    this.todos = [...this.todos, {id: maxId + 1, description: this.newTodo}];
    this.newTodo = '';
  }

}
