import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
