import { Component } from '@angular/core';
import { ManageTodosService } from '../../services/manage-todos.service';

@Component({
  selector: 'app-filtered-completed',
  templateUrl: './filtered-completed.component.html',
  styleUrls: ['./filtered-completed.component.css']
})
export class FilteredCompletedComponent {

  constructor(public toDoService: ManageTodosService) { }

}
