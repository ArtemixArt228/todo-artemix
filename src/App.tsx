import { useState } from "react";

import { CreateInput } from "./components/CreateInput";
import { TodoCard } from "./components/TodoCard";

import { useAppSelector } from "./hooks/redux";

import { TodoState } from "./redux/features/todoSlice";

export const App = () => {
  const [editedTodo, setEditedTodo] = useState<TodoState>({} as TodoState);
  const [isEdit, setIsEdit] = useState(false);

  const { todosList } = useAppSelector((store) => store.todo);

  return (
    <div className="max-w-[1200px] m-auto p-5">
      <div className="w-[60%] m-auto">
        <CreateInput
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
        <div>
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
