import React from "react";

export const TodoItemVisitor = ({ todo }: { todo: string }) => {
  return <li>{todo}</li>;
};
