import { Todo } from "../entity/Todo";
import { NewDateGenerateId } from "./newDateGenerateId";

export const addTodo = (todos: Todo[], todoValue: string): Todo[] => {
  if (!todoValue) throw new Error("Please provide a todo");
  const newTodo = new Todo(todoValue, new NewDateGenerateId());
  return [...todos, newTodo];
};
