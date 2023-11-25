import React from "react";
import { TodoList } from "./TodoList";

export const TodoListApp = ({
  newTodo,
  todos,
  updateCurrentTodo,
  addTodo,
  removeTodo,
}: {
  newTodo: string;
  todos: string[];
  updateCurrentTodo: (todo: string) => void;
  addTodo: () => void;
  removeTodo: (index: number) => void;
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
      <TodoList removeTodo={removeTodo} todos={todos} />
    </div>
  );
};
