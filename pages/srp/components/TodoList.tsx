import React from "react";

export const TodoList = ({
  todos,
  removeTodo,
}: {
  todos: string[];
  removeTodo: (index: number) => void;
}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
