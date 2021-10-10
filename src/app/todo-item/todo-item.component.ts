import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TodoItem} from "../todo.model"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() id: number = 0
  @Input() text: string = ""
  @Input() finished: boolean = false

  @Output() deleteEventEmitter = new EventEmitter<number>()
  @Output() finishEventEmitter = new EventEmitter<{id:number, state:boolean}>()

  constructor() { }

  ngOnInit(): void {
  }

  // delete(id:number)
  // {
  //   console.log(`delete ${id}`)
  //   this.deleteEventEmitter.emit(id)
  // }

}
