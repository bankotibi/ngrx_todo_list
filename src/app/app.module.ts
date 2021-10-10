import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './state/todo.reducer';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot({todosRoot: todoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
