import React, { useMemo, useCallback } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { addTodo } from "../../modules/collections";

function RightPane() {
  const dispatch = useDispatch();
  const collections = useSelector((state: RootState) => state.collections);
  const { currentIndex } = useSelector((state: RootState) => state.menus);

  const collection = useMemo(() => collections[currentIndex], [
    collections,
    currentIndex,
  ]);

  const handleTodoFormSubmit = useCallback(
    (todo: Todo) => {
      dispatch(addTodo(currentIndex, todo));
    },
    [currentIndex, dispatch]
  );
  return (
    <RightContainer>
      <h1>{collection.name}</h1>
      <TodoList collection={collection} />
      <TodoForm collection={collection} onSubmit={handleTodoFormSubmit} />
    </RightContainer>
  );
}

export default RightPane;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
