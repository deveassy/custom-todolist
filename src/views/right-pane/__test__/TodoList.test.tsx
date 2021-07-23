import React from "react";
import TodoList from "../TodoList";
import { render, RenderResult } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../../modules";

// 1. props로 넘어온 collection이 적절히 랜더링 되는가
// 2. onClick 함수가 제대로 호출이 되는가
// 3. 빈 리스트에 추가가 되는가
// 4. 리스트가 있을 때 추가가 되는가

function renderWithProviders(ui: any, { reduxState }: any = {}) {
  const store = createStore(rootReducer, reduxState);
  return render(<Provider store={store}>{ui}</Provider>);
}

describe("<TodoList />", () => {
  const sampleTodo: Collection = {
    id: "1",
    order: 1,
    name: "default",
    data: [
      {
        id: "01",
        title: "test1",
        createdAt: "20210722",
        done: false,
        flagged: false,
      },
      {
        id: "01",
        title: "test2",
        createdAt: "20210722",
        done: false,
        flagged: false,
      },
    ],
  };
  const getRenderResult = (): RenderResult => {
    return render(<TodoList items={sampleTodo} />);
  };
  it("should be shows the default state", () => {
    const { getByText } = renderWithProviders(
      <TodoList items={sampleTodo} />,
      sampleTodo
    );
    expect(getByText(sampleTodo.data[0].title));
  });
});
