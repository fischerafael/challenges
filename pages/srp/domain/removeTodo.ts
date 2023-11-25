export const removeTodo = (todos: string[], todoId: number): string[] => {
  return todos.filter((_, todoIndex) => todoIndex !== todoId);
};
