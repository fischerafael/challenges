export const removeTodo = (todos: string[], index: number): string[] => {
  return todos.filter((_, currentTodoIndex) => currentTodoIndex !== index);
};
