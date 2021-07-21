import { render, fireEvent } from "@testing-library/react";
import SearchInput from "../SearchInput";
import React from "react";

describe("<SearchInput />", () => {
  it("has input", () => {
    const { getByPlaceholderText } = render(<SearchInput />);
    getByPlaceholderText("검색");
  });
  it("changes input", () => {
    const { getByPlaceholderText } = render(<SearchInput />);
    const input = getByPlaceholderText("검색");
    fireEvent.change(input, {
      target: {
        value: "장보기",
      },
    });
    expect(input).toHaveAttribute("value", "장보기");
  });
});
