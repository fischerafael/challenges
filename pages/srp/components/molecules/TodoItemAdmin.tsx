import React from "react";

export const TodoItemAdmin = ({
  todo,
  removeTodo,
}: {
  todo: string;
  removeTodo: () => void;
}) => {
  return (
    <li>
      {todo}
      <button onClick={removeTodo}>Remove</button>
    </li>
  );
};
