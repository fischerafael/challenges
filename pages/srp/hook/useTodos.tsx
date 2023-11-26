import { useState } from "react";
import { removeTodo } from "../domain/use-cases/removeTodo";
import { addTodo } from "../domain/use-cases/addTodo";
import { Todo } from "../domain/entity/Todo";
import { Role } from "../components/organisms/ITodoList";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleUpdateNewTodo = (value: string) => {
    setNewTodo(value);
  };

  const handleAddTodo = () => {
    try {
      setTodos(addTodo(todos, newTodo));
      setNewTodo("");
    } catch (e: any) {
      alert(e.message);
    }
  };

  const handleRemoveTodo = (todo: string) => {
    try {
      setTodos(removeTodo(todos, todo));
    } catch (e: any) {
      alert(e.message);
    }
  };

  return {
    presenters: {
      newTodo,
      todos,
      role: "admin" as Role,
    },
    controllers: {
      handleUpdateNewTodo,
      handleAddTodo,
      handleRemoveTodo,
    },
  };
};
