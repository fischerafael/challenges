import { TodoItemVisitor } from "../molecules/TodoItemVisitor";

export const TodoListVisitor = ({ todos }: ITodoList) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItemVisitor todo={todo} key={index} />
      ))}
    </ul>
  );
};
