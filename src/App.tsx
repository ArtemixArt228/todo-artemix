import { useState } from "react";

import { CreateInput } from "./components/CreateInput";
import { TodoCard } from "./components/TodoCard";

import { useAppSelector } from "./hooks/redux";

import { TodoState } from "./redux/features/todoSlice";

import "./App.css";

export const App = () => {
  const [editedTodo, setEditedTodo] = useState<TodoState>({} as TodoState);
  const [isEdit, setIsEdit] = useState(false);

  const { todosList } = useAppSelector((store) => store.todo);

  return (
    <div className="max-w-[1200px] m-auto p-5">
      <h1 className="text-4xl text-red-300 mb-4">TO DO({todosList.length})</h1>
      <div className="w-[60%] m-auto max-[750px]:w-full">
        <CreateInput
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
        <div className="mt-4 h-[75vh] overflow-hidden overflow-y-scroll">
          {todosList.map((todo) => (
            <TodoCard
              key={todo.id}
              setEditedTodo={setEditedTodo}
              setIsEdit={setIsEdit}
              todoTask={todo.todoTask}
              id={todo.id}
              done={todo.done}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
