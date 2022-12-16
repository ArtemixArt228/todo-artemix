import React from "react";

import { TodoState } from "../redux/features/todoSlice";
import { useActions } from "../hooks/actions";

export const TodoCard = ({
  todoTask,
  id,
  done,
  setEditedTodo,
  setIsEdit,
}: {
  todoTask: string;
  id: string;
  done: boolean;
  setEditedTodo: Function;
  setIsEdit: Function;
}) => {
  const { deleteTodoTask, isTaskDone } = useActions();

  return (
    <div>
      <div>
        <input
          type="checkbox"
          defaultChecked={done}
          onClick={() => isTaskDone(id)}
        />
        <p>{todoTask}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setEditedTodo({ id, todoTask, done }), setIsEdit(true);
          }}
        >
          Edit
        </button>
        <button onClick={() => deleteTodoTask(id)}>Delete</button>
      </div>
    </div>
  );
};
