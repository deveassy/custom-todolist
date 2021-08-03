import TodoForm from "../TodoForm";
import { render, fireEvent } from "@testing-library/react";

// 1. 1개의 input이 있는가
// 2. input의 change를 감지하는가
// 3. onSubmit 제대로 함수가 실행 되며 submit 이후에 input이 비워지는가

describe("<TodoForm />", () => {
  const onSubmit: (todo: ITodo) => void = jest.fn();
  it("should has a input", () => {
    const { getByPlaceholderText } = render(
      <TodoForm onSubmit={onSubmit} />
    );
    expect(getByPlaceholderText("I have to..."));
  });
  it("should be change input value", () => {
    const { getByPlaceholderText } = render(
      <TodoForm onSubmit={onSubmit} />
    );
    const input = getByPlaceholderText("I have to...");
    fireEvent.change(input, {
      target: {
        value: "test",
      },
    });
    expect(input).toHaveAttribute("value", "test");
  });
  it("should be calls onSubmit and clear input", () => {
    const { getByPlaceholderText } = render(
      <TodoForm onSubmit={onSubmit} />
    );
    const input = getByPlaceholderText("I have to...");
    fireEvent.change(input, {
      target: {
        value: "test",
      },
    });
    fireEvent.keyPress(input, { key: "Enter", keycode: 13});
    expect(onSubmit(todo).length).toHaveBeenCalledTimes(1);
    expect(input).toHaveAttribute("value", "");
  });
});
