import React, { useState, useRef } from "react";
import { createId } from "../utils/reducers";

type FormProps = {
  collection: Collection;
  onSubmit: (todo: Todo) => void;
};

function TodoForm({ collection, onSubmit }: FormProps) {
  const [inputValue, setInputValue] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue) return;
    const newTodo: Todo = {
      id: createId(collection.id),
      title: inputValue,
      done: false,
      flagged: false,
      createdAt: new Date(),
    };
    onSubmit(newTodo);
    setInputValue("");
  };

  const handleBlur = () => {
    if (inputValue) handleSubmit();
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      ref={formRef}
    >
      <input
        type="text"
        name="todo-input"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        ref={inputRef}
      />
    </form>
  );
}

export default TodoForm;
