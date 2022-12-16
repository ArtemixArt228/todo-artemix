import React from "react";

import { useActions } from "../hooks/actions";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useAppSelector } from "../hooks/redux";

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
    <div
      className={`flex justify-between items-center mb-3 bg-fuchsia-200 p-3 rounded-xl ${
        done && "bg-lime-200"
      }`}
    >
      <div className="flex items-center gap-4 max-[750px]:gap-2">
        <input
          className="accent-violet-700 w-6 h-6"
          type="checkbox"
          defaultChecked={done}
          onClick={() => isTaskDone(id)}
        />
        <p className="w-[200px]">{todoTask}</p>
      </div>
      <div className="flex gap-2 max-[750px]:flex-col">
        <button
          className="bg-white p-2 rounded-full"
          onClick={() => {
            setEditedTodo({ id, todoTask, done }), setIsEdit(true);
          }}
        >
          <AiFillEdit />
        </button>
        <button
          className="bg-white p-2 rounded-full"
          onClick={() => deleteTodoTask(id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};
