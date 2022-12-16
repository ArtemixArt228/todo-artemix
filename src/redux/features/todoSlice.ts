import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const TODO_LIST = "TODO_LIST";

export interface TodoState {
  id: string;
  todoTask: string;
  done: boolean;
}

interface TodosList {
  todosList: TodoState[];
}

const initialState: TodosList = {
  todosList: JSON.parse(localStorage.getItem(TODO_LIST) ?? "[]"),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoTask: (state, action: PayloadAction<TodoState>) => {
      state.todosList.push(action.payload);

      localStorage.setItem(TODO_LIST, JSON.stringify(state.todosList));
    },
    editTodoTask: (state, action: PayloadAction<TodoState>) => {
      state.todosList.find((todo) =>
        todo.id === action.payload.id
          ? (todo.todoTask = action.payload.todoTask)
          : todo
      );

      localStorage.setItem(TODO_LIST, JSON.stringify(state.todosList));
    },
    deleteTodoTask: (state, action: PayloadAction<string>) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload
      );

      localStorage.setItem(TODO_LIST, JSON.stringify(state.todosList));
    },
    isTaskDone: (state, action: PayloadAction<string>) => {
      state.todosList.find((todo) =>
        todo.id === action.payload ? (todo.done = !todo.done) : todo
      );

      localStorage.setItem(TODO_LIST, JSON.stringify(state.todosList));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodoTask, deleteTodoTask, editTodoTask, isTaskDone } =
  todoSlice.actions;

export default todoSlice.reducer;
