import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  id: string;
  todoTask: string;
  done: boolean;
}

interface TodosList {
  todosList: TodoState[];
}

const initialState: TodosList = {
  todosList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoTask: (state, action: PayloadAction<TodoState>) => {
      state.todosList.push(action.payload);
    },
    editTodoTask: (state, action: PayloadAction<TodoState>) => {
      state.todosList.find((todo) =>
        todo.id === action.payload.id
          ? (todo.todoTask = action.payload.todoTask)
          : todo
      );
    },
    deleteTodoTask: (state, action: PayloadAction<string>) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    isTaskDone: (state, action: PayloadAction<string>) => {
      state.todosList.find((todo) =>
        todo.id === action.payload ? (todo.done = !todo.done) : todo
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodoTask, deleteTodoTask, editTodoTask, isTaskDone } =
  todoSlice.actions;

export default todoSlice.reducer;
