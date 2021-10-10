import { createSelector, createFeatureSelector } from '@ngrx/store';
import {TodoItem, Todos} from "../todo.model"

export const selectTodos = (state: {todosRoot: Todos}) => state.todosRoot.todos;
export const selectNextId = (state: {todosRoot: Todos}) => state.todosRoot.nextId;
