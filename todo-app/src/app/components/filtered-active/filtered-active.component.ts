import { Component } from '@angular/core';
import { ManageTodosService } from '../../services/manage-todos.service';

@Component({
  selector: 'app-filtered-active',
  templateUrl: './filtered-active.component.html',
  styleUrls: ['./filtered-active.component.css']
})
export class FilteredActiveComponent {

  constructor(public toDoService: ManageTodosService) { }

}
