import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { addTodo } from "../../modules/collections";
import { useHistory } from "react-router-dom";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

interface RPaneProps {
  /**
   * 컬렉션 포인터
   */
  cid: number;
}

function RightPane({ cid }: RPaneProps) {
  const dispatch = useDispatch();
  const history = useHistory();

  /**
   * 스토어를 통해 얻는 데이터
   * @returns `isValidCid` : 유효한 cid인지 확인, `collection` : 현재 컬렉션의 정보
   */
  const { isValidCid, collection } = useSelector((state: RootState) => ({
    isValidCid: state.collections.length < cid + 1,
    collection: state.collections[cid],
  }));

  /**
   * 현재 컬렉션에 새로운 todo를 전송
   */
  const handleTodoFormSubmit = useCallback(
    (todo: Todo) => {
      dispatch(addTodo(cid, todo));
    },
    [cid, dispatch]
  );

  /**
   * 최초 마운트 이후에 전달되는 포인터 값으로 컬렉션 도출이 가능한지 확인
   * 도출이 되지 않는 경우엔 자동으로 0번째 포인터로 연결되게 함
   */
  useEffect(() => {
    if (isValidCid) return history.push("/todo/0");
  }, [isValidCid, history]);

  return (
    <RightContainer>
      {isValidCid ? (
        <Loading />
      ) : (
        <>
          <h1>{collection.name}</h1>
          <TodoList items={collection} />
          <TodoForm onSubmit={handleTodoFormSubmit} collection={collection} />
        </>
      )}
    </RightContainer>
  );
}

export default RightPane;

const Loading = () => {
  return <div>Loading...</div>;
};

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
