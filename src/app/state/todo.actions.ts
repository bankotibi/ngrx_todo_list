import { createAction, props } from '@ngrx/store';
import {TodoItem} from "../todo.model"

// Use interface here?
export const add = createAction('[TODO] Add', props<{ item: TodoItem }>());
export const del = createAction('[TODO] Del', props<{idToDel:number}>());
export const change = createAction('[TODO] change', props<{ id: number, todoState: boolean}>());
