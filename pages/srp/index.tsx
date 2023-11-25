import React from "react";
import { TodoListApp } from "./components/TodoListApp";
import { useTodos } from "./hook/useTodos";

const SRP = () => {
  const { presenters, controllers } = useTodos();
  return (
    <TodoListApp
      newTodo={presenters.newTodo}
      todos={presenters.todos}
      addTodo={controllers.handleAddTodo}
      removeTodo={controllers.handleRemoveTodo}
      updateCurrentTodo={controllers.handleUpdateNewTodo}
    />
  );
};

export default SRP;
