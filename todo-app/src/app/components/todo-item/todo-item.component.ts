import { Component, AfterViewChecked, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ManageTodosService } from '../../services/manage-todos.service';
import { IToDo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements AfterViewChecked {

  @ViewChild('destroy') private destroyButtonView: ElementRef<HTMLButtonElement>;
  @ViewChild('edit') private editingMode: ElementRef<HTMLInputElement>;
  @Input() public toDo: IToDo;

  constructor(public toDoService: ManageTodosService) { }

  public ngAfterViewChecked(): void {
    if (this.toDo.isEditActive) {
      this.editingMode.nativeElement.focus();
    }
  }

  @HostListener('mouseleave') public hideDestroyButton(): void {
    if (!this.toDo.isEditActive) {
      this.destroyButtonView.nativeElement.style.visibility = 'hidden';
    }
  }

  @HostListener('mouseenter') public showDestroyButton(): void {
    if (!this.toDo.isEditActive) {
      this.destroyButtonView.nativeElement.style.visibility = 'visible';
    }
  }
}
