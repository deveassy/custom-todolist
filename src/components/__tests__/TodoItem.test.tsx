import { render, fireEvent } from "@testing-library/react";
import TodoItem from "../TodoItem";
import React from "react";
import { Todo } from "../../modules/todos";

describe("<TodoItem />", () => {
  const sampleTodo: Todo = {
    id: "1",
    title: "test 파일 작성하기",
    done: false,
  };
  const setup = (props = {}) => {
    const initialProps = { todo: sampleTodo };
    const utils = render(<TodoItem {...initialProps} {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("할 일 입력");
    const checkButton = getByText("체크");
    const starButton = getByText("중요");
    return {
      ...utils,
      input,
      checkButton,
      starButton,
    };
  };
  it("has input and two buttons", () => {
    const { input, checkButton, starButton } = setup();
    expect(input).toBeTruthy();
    expect(checkButton).toBeTruthy();
    expect(starButton).toBeTruthy();
  });
  it("changes input", () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: "test 작성",
      },
    });
    expect(input).toHaveAttribute("value", "test 작성");
  });
  it("shows full circle when done is true", () => {
    const { checkButton } = setup({ todo: { ...sampleTodo, done: true } });
    expect(checkButton).toHaveStyle("background-color: yellow;");
  });
  it("does not shows full circle when done is false", () => {
    const { checkButton } = setup({ todo: { ...sampleTodo, done: false } });
    expect(checkButton).not.toHaveStyle("background-color: yellow;");
  });
  it("calls onToggle", () => {
    const onToggle = jest.fn();
    const { checkButton } = setup({ onToggle });
    fireEvent.click(checkButton);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });
});
