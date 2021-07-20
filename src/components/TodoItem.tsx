import React, { useState } from "react";
import { Todo } from "../modules/todos";

type ItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
};

function TodoItem(props: ItemProps) {
  const { todo, onToggle } = props;
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div>
        <button
          onClick={() => onToggle(todo.id)}
          style={{ backgroundColor: todo.done ? "yellow" : "none" }}
        >
          체크
        </button>
      </div>
      <input
        placeholder="할 일 입력"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button>중요</button>
    </div>
  );
}

export default TodoItem;
