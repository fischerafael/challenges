export const addTodo = (todos: string[], todo: string): string[] => {
  if (!todo) throw new Error("Please provide a todo");
  if (todo.length < 3) throw new Error("Todo must have at least 3 characters");
  return [...todos, todo];
};
