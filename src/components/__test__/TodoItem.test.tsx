import React from "react";
import TodoItem from "../TodoItem";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import mockTodo from "../../mocks/todo.json";

// 1. 컴포넌트가 제대로 랜더링이 일어나고 있는가
// 2. todo.title이 제대로 보여지는가
// 3. 한번의 함수가 실행되는가
// 4. 텍스트를 클릭하면 스타일(line-through)이 적용되는가
// 5. done === false가 되면 스타일이 해제되는가

describe("<TodoItem />", () => {
  const todo: ITodo = mockTodo;
  const onClick: () => void = jest.fn();
  const getRenderResult = (): RenderResult => {
    return render(<TodoItem todo={todo} onClick={onClick} />);
  };
  it("should be render component correctly", () => {
    expect(getRenderResult()).toBeTruthy();
  });
  it("should be render title", () => {
    const { getByText } = getRenderResult();
    expect(getByText(todo.title)).toBeTruthy();
  });
  it("should be call a function 1 times when component clicked", () => {
    const { getByText } = getRenderResult();
    fireEvent.click(getByText(todo.title));
    expect(onClick).toBeCalledTimes(1);
  });
  it("should be shows the text line-through when done is true", () => {
    const doneResult = render(
      <TodoItem todo={{ ...todo, done: true }} onClick={onClick} />
    );
    expect(doneResult.getByText(todo.title)).toHaveStyle(
      "text-decoration: line-through;"
    );
  });
  it("should not be shows the text line-through when done is false", () => {
    const doneResult = render(
      <TodoItem todo={{ ...todo, done: false }} onClick={onClick} />
    );
    expect(doneResult.getByText(todo.title)).not.toHaveStyle(
      "text-decoration: line-through;"
    );
  });
});
