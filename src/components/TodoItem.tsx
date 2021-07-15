import React from "react";
import { Todo } from "../modules/todos";

interface ITodoItem {
  todo: Todo;
}

function TodoItem(props: ITodoItem) {
  const { todo } = props;
  return (
    <div key={todo.id}>
      <li>할일 {todo.id}</li>
    </div>
  );
}

export default TodoItem;
