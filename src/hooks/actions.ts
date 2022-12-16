import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import {
  addTodoTask,
  deleteTodoTask,
  editTodoTask,
  isTaskDone,
} from "../redux/features/todoSlice";

const actions = { addTodoTask, deleteTodoTask, editTodoTask, isTaskDone };

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
