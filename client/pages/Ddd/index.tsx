import React, { useState } from "react";

class Todo {
  private _id: string | undefined = undefined;
  private _description: string = "";

  private constructor(description: string) {
    this._id = this.generateId();
    this._description = description;
  }

  static save(description: string) {
    if (description.length < 3) {
      throw new Error("Todo too short");
    }
    return new Todo(description);
  }

  private generateId() {
    return String(new Date().getTime());
  }

  get id() {
    return this._id;
  }

  get description() {
    return this._description;
  }
}

class TodoCreateUseCase {
  constructor(private todos: Todo[]) {}

  execute(description: string) {
    if (this.todos.find((todo) => todo.description === description)) {
      throw new Error("Todo already exist");
    }
    this.todos.push(Todo.save(description));
    return this.todos;
  }
}

class TodoRemoveUseCase {
  constructor(private todos: Todo[]) {}

  execute(id: string | undefined) {
    if (!id) throw new Error("Id does not exist");
    return this.todos.filter((current) => current.id !== id);
  }
}

class ListTodosUseCase {
  constructor(private todos: Todo[]) {}

  execute(limit: number = this.todos.length) {
    return this.todos.slice(0, limit);
  }
}

const useDDD = () => {
  const [current, setCurrent] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoController = () => {
    try {
      setTodos(new TodoCreateUseCase(todos).execute(current));
      _resetCurrent();
    } catch (e: any) {
      alert(e.message);
    }
  };

  const removeTodoController = (id: string | undefined) => {
    try {
      setTodos(new TodoRemoveUseCase(todos).execute(id));
    } catch (e: any) {
      alert(e.message);
    }
  };

  const changeCurrentController = (string: string) => {
    setCurrent(string);
  };

  const currentTodoPresenter = current;

  const todosPresenter = new ListTodosUseCase(todos).execute(3);

  const _resetCurrent = () => {
    setCurrent("");
  };

  return {
    presenters: {
      todos: todosPresenter,
      current: currentTodoPresenter,
    },
    controllers: {
      removeTodo: removeTodoController,
      addTodo: addTodoController,
      changeCurrent: changeCurrentController,
    },
  };
};

export const DDD = () => {
  const { presenters, controllers } = useDDD();

  return (
    <div>
      <input
        value={presenters.current}
        onChange={(e) => controllers.changeCurrent(e.target.value)}
      />
      <button onClick={controllers.addTodo}>Add Todo</button>
      <div>
        {presenters.todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.description}</p>
            <button onClick={() => controllers.removeTodo(todo.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
