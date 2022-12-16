import React, { useState } from "react";

import { useActions } from "../hooks/actions";

import { v4 as uuidv4 } from "uuid";

import { TodoState } from "../redux/features/todoSlice";

export const CreateInput = ({
  editedTodo,
  setEditedTodo,
  isEdit,
  setIsEdit,
}: {
  editedTodo: TodoState;
  setEditedTodo: Function;
  isEdit: boolean;
  setIsEdit: Function;
}) => {
  const [todoTask, setTodoTask] = useState("");

  const { addTodoTask, editTodoTask } = useActions();

  const handleTodoTask = () => {
    if (todoTask.length > 5 || editedTodo.todoTask.length > 5) {
      if (isEdit) {
        editTodoTask(editedTodo);

        setIsEdit(false);
        setEditedTodo({});
      } else {
        addTodoTask({
          id: uuidv4(),
          todoTask,
          done: false,
        });
      }

      setTodoTask("");
    }
  };
  return (
    <div className="flex justify-center">
      <input
        value={isEdit ? editedTodo.todoTask : todoTask}
        onChange={(e) =>
          isEdit
            ? setEditedTodo({ ...editedTodo, todoTask: e.target.value })
            : setTodoTask(e.target.value)
        }
        id="todoInput"
        type="text"
        className="flex-1 p-2 border-red-100 border-[3px] rounded-l-xl focus:border-red-200"
      />
      <button
        className="bg-red-100 px-4 py-2 rounded-r-xl"
        onClick={handleTodoTask}
      >
        {isEdit ? "Update" : "Create"}
      </button>
    </div>
  );
};
