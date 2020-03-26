import { Injectable } from '@angular/core';
import { IToDo } from '../models/todo.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ManageTodosService {
  public generalMarker: boolean = false;
  public showClearButton: boolean = false;
  public newToDo: string = '';
  public toDosList: IToDo[] = [];
  public activeToDos: IToDo[] = [];
  public completedToDos: IToDo[] = [];

  constructor() { }

  public addToDo(): void {
    if (this.newToDo.trim().length > 0) {
      this.toDosList.push(
        {
          id: uuid(),
          title: this.newToDo.trim(),
          completed: false,
          isEditActive: false
        }
      );
    }
    this.newToDo = '';
    this.generalMarker = false;
    this.activeToDos = this.toDosList.filter(item => item.completed === false);
    this.completedToDos = this.toDosList.filter(item => item.completed === true);
  }

  public deleteToDo(toDo: IToDo): void {
    this.toDosList = this.toDosList.filter(item => item.id !== toDo.id);
    this.activeToDos = this.toDosList.filter(item => item.completed === false);
    this.completedToDos = this.toDosList.filter(item => item.completed === true);
  }

  public toggleToDo(toDo: IToDo): void {
    toDo.completed = !toDo.completed;
    this.showClearButton = toDo.completed;
    if (this.toDosList.every(item => item.completed === true)) {
      this.generalMarker = true;
    } else {
      this.generalMarker = false;
    }
    if (this.toDosList.some(item => item.completed === true)) {
      this.showClearButton = true;
    }
    this.activeToDos = this.toDosList.filter(item => item.completed === false);
    this.completedToDos = this.toDosList.filter(item => item.completed === true);
  }

  public goToEditingMode(toDo: IToDo): void {
    toDo.isEditActive = true;
  }

  public editToDo(toDo: IToDo, newTitle: string): void {
    if (toDo.title.trim().length > 0) {
      toDo.title = newTitle;
      toDo.isEditActive = false;
    } else {
      this.deleteToDo(toDo);
    }
  }

  public removeEdits(toDo: IToDo): string {
    toDo.isEditActive = false;
    return toDo.title;
  }

  public clearCompletedToDos(): void {
    this.toDosList = this.toDosList.filter(item => item.completed === false);
    this.activeToDos = this.toDosList.filter(item => item.completed === false);
    this.completedToDos = this.toDosList.filter(item => item.completed === true);
    this.showClearButton = false;
    this.generalMarker = false;
  }

  public markAllToDos(): void {
    this.generalMarker = !this.generalMarker;
    this.toDosList = this.toDosList.map(item => {
      item.completed = this.generalMarker;
      return item;
    });
    this.activeToDos = this.toDosList.filter(item => item.completed === false);
    this.completedToDos = this.toDosList.filter(item => item.completed === true);
  }
}
