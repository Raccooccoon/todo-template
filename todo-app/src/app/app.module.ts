import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { PluralOrNotPipe } from './pipes/plural-or-not.pipe';
import { FilteredActiveComponent } from './components/filtered-active/filtered-active.component';
import { FilteredCompletedComponent } from './components/filtered-completed/filtered-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TodoItemComponent,
    PluralOrNotPipe,
    FilteredActiveComponent,
    FilteredCompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
