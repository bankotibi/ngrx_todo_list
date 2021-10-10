export interface TodoItem
{
    id: number
    text: string
    finished: boolean
}

export interface Todos {
    todos:Array<TodoItem>,
    nextId:number
}