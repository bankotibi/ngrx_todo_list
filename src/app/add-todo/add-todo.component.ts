import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Store } from '@ngrx/store';
import {TodoItem} from "../todo.model"
import { todoReducer } from '../state/todo.reducer';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() clickEventEmitter = new EventEmitter<string>();
  todoMsg:string = ""

  constructor(private store: Store<{ todos:  ReadonlyArray<TodoItem> }>) { }

  ngOnInit(): void {
  }

  onClick(): void
  {
    // let item = {
    //   id: "1",
    //   finished: false,
    //   text: this.todoMsg
    // }
    // this.store.dispatch(add({item}));
    this.clickEventEmitter.emit(this.todoMsg)
  }

}
