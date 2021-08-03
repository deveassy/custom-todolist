import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useInputState } from "../../hooks/useInputState";
import { Todo } from "../../models";

type FormProps = {
  collection: ICollection;
  onSubmit: (todo: ITodo) => void;
};

function TodoForm({ collection, onSubmit }: FormProps) {
  const [inputValue, setInputValue, clear] = useInputState({ todoTitle: "" });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!inputValue.todoTitle) return;

    // 새로운 투두 생성
    const newTodo = new Todo(inputValue.todoTitle).data;

    if (!newTodo) return;
    // 투두 추가
    onSubmit(newTodo);
    // 초기화
    clear("todoTitle");
  };

  // 포커스가 input창 밖으로 벗어나도 submit 발동
  const handleBlur = () => {
    if (inputValue) handleSubmit();
  };

  /**
   * 마운트 시 Input창 포커싱
   */
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
      <TodoInput
        type="text"
        name="todoTitle"
        value={inputValue.todoTitle}
        onChange={setInputValue}
        onBlur={handleBlur}
        ref={inputRef}
        placeholder="I have to..."
      />
    </form>
  );
}

export default TodoForm;

const TodoInput = styled.input``;
