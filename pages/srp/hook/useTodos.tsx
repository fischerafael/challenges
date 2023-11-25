import { useState } from "react";
import { removeTodo } from "../domain/removeTodo";
import { addTodo } from "../domain/addTodo";

export const useTodos = () => {
  const [todos, setTodos] = useState<string[]>([]);
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

  const handleRemoveTodo = (index: number) => {
    try {
      setTodos(removeTodo(todos, index));
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
