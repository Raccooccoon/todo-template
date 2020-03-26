import { Component } from '@angular/core';
import { ManageTodosService } from '../../services/manage-todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public toDoService: ManageTodosService) {}

}
