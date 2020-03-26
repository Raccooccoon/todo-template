import { Component } from '@angular/core';
import { ManageTodosService } from './services/manage-todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'todo-app';

  constructor(public toDoService: ManageTodosService) { }
}
