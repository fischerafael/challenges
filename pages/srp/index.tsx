import { TodoListAdmin } from "./components/organisms/TodoListAdmin";
import { TodoListVisitor } from "./components/organisms/TodoListVisitor";
import { TodoListContainer } from "./components/templates/TodoListContainer";
import { useTodos } from "./hook/useTodos";

const SRP = () => {
  const { presenters, controllers } = useTodos();

  return (
    <TodoListContainer
      newTodo={presenters.newTodo}
      addTodo={controllers.handleAddTodo}
      updateCurrentTodo={controllers.handleUpdateNewTodo}
      todoList={
        presenters.role === "admin" ? (
          <TodoListAdmin
            removeTodo={controllers.handleRemoveTodo}
            todos={presenters.todos}
          />
        ) : (
          <TodoListVisitor todos={presenters.todos} />
        )
      }
    />
  );
};

export default SRP;
