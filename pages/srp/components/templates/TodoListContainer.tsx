import React, { ReactNode } from "react";

export const TodoListContainer = ({
  todoList,
  newTodo,
  updateCurrentTodo,
  addTodo,
}: {
  todoList: ReactNode;
  newTodo: string;
  updateCurrentTodo: (todo: string) => void;
  addTodo: () => void;
}) => {
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => updateCurrentTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      {todoList}
    </div>
  );
};
