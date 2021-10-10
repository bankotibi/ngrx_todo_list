import { createReducer, on, Action } from '@ngrx/store';
import {add, del, change} from "./todo.actions"
import {TodoItem, Todos} from "../todo.model"
import { of } from 'rxjs';


export const initialState:  Todos = {todos: [{id:1, text:"alma", finished:false}], nextId: 2}
// =[{id:"1", text:"alma", finished:false}]

export const _todoReducer = createReducer(
    initialState,
    on(add, (state : Todos, {item} /*: TodoItem ? */) => {
        // console.log(item);
        // item.id = state.nextId
        let new_state = {todos: [...state.todos, item], nextId: state.nextId + 1}
        console.log(new_state)
        return new_state
    }),
    on(del, (state:Todos, {idToDel} ) => {
        let new_todos = state.todos.filter(t => t.id !== idToDel)
        let new_state = {todos: new_todos, nextId: state.nextId}
        console.log(`new_state after delete:`)
        console.log(new_state)
        return new_state
    }),
    on(change, (state:Todos, {id, todoState} ) => {
        let itemIdxToChange = state.todos.findIndex(t => t.id === id)
        let itemToChange = {...state.todos[itemIdxToChange]}
        itemToChange.finished = todoState
        // TODO nicer solution
        let new_todos = state.todos.slice(0, itemIdxToChange)
        new_todos.push(itemToChange)
        new_todos.concat(state.todos.slice(itemIdxToChange))
        let new_state = {todos: new_todos, nextId: state.nextId}
        console.log(new_state)
        return new_state
    }),
);

export function todoReducer(state : Todos | undefined, action : Action) {
    return _todoReducer(state, action);
}