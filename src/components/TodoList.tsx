import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const datas = ["1", "2", "3"];
  return (
    <div>
      <ul>
        {datas.map((data) => (
          <TodoItem />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
