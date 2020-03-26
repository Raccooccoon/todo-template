import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FilteredActiveComponent } from './components/filtered-active/filtered-active.component';
import { FilteredCompletedComponent } from './components/filtered-completed/filtered-completed.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'active',
    component: FilteredActiveComponent
  },
  {
    path: 'completed',
    component: FilteredCompletedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
