import { Component } from '@angular/core';
import { ManageTodosService } from '../../services/manage-todos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public toDoService: ManageTodosService) { }

}
