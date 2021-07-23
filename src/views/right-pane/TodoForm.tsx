import React, { useState, useRef, useEffect } from "react";
import { createId } from "../../utils/reducers";

type FormProps = {
  collection: Collection;
  onSubmit: (todo: Todo) => void;
};

function TodoForm({ collection, onSubmit }: FormProps) {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue) return;
    const newTodo: Todo = {
      id: createId(collection.id),
      title: inputValue,
      done: false,
      flagged: false,
      createdAt: new Date().toString(),
    };
    onSubmit(newTodo);
    setInputValue("");
  };

  // 포커스가 input창 밖으로 벗어나도 submit 발동
  const handleBlur = () => {
    if (inputValue) handleSubmit();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        name="todo-input"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        ref={inputRef}
        placeholder="I have to..."
      />
    </form>
  );
}

export default TodoForm;
