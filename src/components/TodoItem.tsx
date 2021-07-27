import React from "react";

type ItemProps = {
  todo: ITodo;
  onClick: (id: string) => void;
};

export default function TodoItem({ todo, onClick }: ItemProps) {
  const handleTodoClick = () => {
    onClick(todo.id);
  };
  return (
    <div
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={handleTodoClick}
    >
      {todo.title}
    </div>
  );
}
