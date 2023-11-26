import { TodoItemVisitor } from "../molecules/TodoItemVisitor";
import { ITodoList } from "./ITodoList";

export const TodoListVisitor = ({ todos }: ITodoList) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItemVisitor todo={todo.value} key={todo.id} />
      ))}
    </ul>
  );
};
