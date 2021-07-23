import React from "react";
import TodoForm from "../TodoForm";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import mock from "../../../mocks/collection.json";

// 1. 1개의 input이 있는가
// 2. input의 change를 감지하는가
// 3. onSubmit 제대로 함수가 실행 되며 submit 이후에 input이 비워지는가

describe("<TodoForm />", () => {
  const collection: Collection = mock;
  const onSubmit: (todo: Todo) => void = jest.fn();
  it("should has a input", () => {
    const { getByPlaceholderText } = render(
      <TodoForm collection={collection} onSubmit={onSubmit} />
    );
    expect(getByPlaceholderText("I have to..."));
  });
  it("should be change input value", () => {
    const { getByPlaceholderText } = render(
      <TodoForm collection={collection} onSubmit={onSubmit} />
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
      <TodoForm collection={collection} onSubmit={onSubmit} />
    );
    const input = getByPlaceholderText("I have to...");
    fireEvent.change(input, {
      target: {
        value: "test",
      },
    });
    fireEvent.keyPress(input, { key: "Enter", code: 13 });
    expect(onSubmit).toBeCalledWith(todo);
    expect(input).toHaveAttribute("value", "");
  });
});
