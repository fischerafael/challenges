import { Todo } from "../../domain/entity/Todo";

export interface ITodoList {
  todos: Todo[];
}

export type Role = "admin" | "visitor";
