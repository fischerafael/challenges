import { TodoItemAdmin } from "../molecules/TodoItemAdmin";

interface Props extends ITodoList {
  removeTodo: (index: number) => void;
}

export const TodoListAdmin = ({ todos, removeTodo }: Props) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItemAdmin
          key={index}
          removeTodo={() => removeTodo(index)}
          todo={todo}
        />
      ))}
    </ul>
  );
};
