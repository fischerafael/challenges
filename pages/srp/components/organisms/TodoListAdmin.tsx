import { TodoItemAdmin } from "../molecules/TodoItemAdmin";
import { ITodoList } from "./ITodoList";

interface Props extends ITodoList {
  removeTodo: (todo: string) => void;
}

export const TodoListAdmin = ({ todos, removeTodo }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItemAdmin
          key={todo.id}
          removeTodo={() => removeTodo(todo.id)}
          todo={todo.value}
        />
      ))}
    </ul>
  );
};
