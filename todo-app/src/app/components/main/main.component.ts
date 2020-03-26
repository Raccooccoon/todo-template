import { Component } from '@angular/core';
import { ManageTodosService } from '../../services/manage-todos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(public toDoService: ManageTodosService) { }

}
