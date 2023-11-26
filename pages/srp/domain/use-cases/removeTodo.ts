import { Todo } from "../entity/Todo";

export const removeTodo = (todos: Todo[], todoId: string): Todo[] => {
  return todos.filter((currentTodo) => currentTodo.id !== todoId);
};
