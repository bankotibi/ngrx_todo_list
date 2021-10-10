import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {TodoItem, Todos} from "./todo.model"
import { Observable, of } from 'rxjs';
import { selectTodos, selectNextId} from './state/todo.selectors';
import {add, del, change} from "./state/todo.actions"
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo-app';
  // todoItems:Observable<Array<TodoItem>>;
  todoItems:Observable<Array<TodoItem>>
  nextId:Observable<number>

  constructor(private store: Store<{todosRoot: Todos}>) {
    // this.todoItems = store.select(store => store.todosRoot.todos)
    this.todoItems = store.select(selectTodos)
    this.nextId = store.select(selectNextId)
    // this.todoItems = store.select(selectTodos)
    // this.todoItems = of([
    //   // {id:"1", text:"alma", finished:false}
    // ])
  }

  ngOnInit()
  {

  }

  getId(): number
  {
    let nid!:number
    this.nextId.pipe(take(1)).subscribe(i => nid = i)
    return nid
  }

  addTodo(todoMsg:string)
  {
    console.log(todoMsg)
    // let nid:number
    // let nid = await this.nextId.pipe(take(1)).toPromise()
    let nid = this.getId()

    let item = {
      id: nid,
      finished: false,
      text: todoMsg
    }
    this.store.dispatch(add({item}));
  }

  deleteTodo(idToDel:number)
  {
    console.log(`Deleting todo ${idToDel}`)
    this.store.dispatch(del({idToDel}))
  }

  changeTodoState(p:{id:number, state:boolean})
  {
    console.log(`Change state of event ${p.id} to ${p.state}`)
    this.store.dispatch(change({id: p.id, todoState: p.state}))
  }
}
