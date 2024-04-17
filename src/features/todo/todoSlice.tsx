import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum Status {
  incomplete,
  complete,
}

export interface ITodo {
  id: string;
  text: string;
  status: Status;
}

export interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [
    { id: nanoid(), text: "Create a react app", status: Status.incomplete },
    { id: nanoid(), text: "Create a redux app", status: Status.incomplete },
    {
      id: nanoid(),
      text: "Create a redux toolkit app",
      status: Status.incomplete,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToTodos: (state, action: PayloadAction<ITodo>) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    editTodos: (state, action: PayloadAction<ITodo>) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo: ITodo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
    removeFromTodos: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo: ITodo) => todo.id !== id);
    },
    changeTodoStatus: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingTodo = state.todos.find((todo: ITodo) => todo.id === id);
      if (existingTodo) {
        if (existingTodo.status === Status.incomplete) {
          existingTodo.status = Status.complete;
        } else {
          existingTodo.status = Status.incomplete;
        }
      }
    },
  },
});

export const { addToTodos, editTodos, removeFromTodos, changeTodoStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
