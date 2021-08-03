import React, { ReactElement, useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { addTodo } from "../../modules/collections";
import { useHistory, useParams } from "react-router-dom";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function RightPane(): ReactElement {
  const dispatch = useDispatch();
  const history = useHistory();
  // 사용자에 의해 추가되는 라우터의 파라미터를 만들어줌
  const { cid } = useParams<{ cid: string }>();

  const pasedCid = useMemo(() => Number.parseInt(cid), [cid]);

  /**
   * 스토어를 통해 얻는 데이터
   * @returns `isValidCid` : 유효한 cid인지 확인, `collection` : 현재 컬렉션의 정보
   */
  const { isValidCid, collection } = useSelector((state: RootState) => {
    return {
      isValidCid: state.collections.length < pasedCid + 1,
      collection: state.collections[pasedCid],
    };
  });

  /**
   * 현재 컬렉션에 새로운 todo를 전송
   */
  const handleTodoFormSubmit = useCallback(
    (todo: ITodo) => {
      dispatch(addTodo(pasedCid, todo));
    },
    [pasedCid, dispatch]
  );

  /**
   * 최초 마운트 이후에 전달되는 포인터 값으로 컬렉션 도출이 가능한지 확인
   * 도출이 되지 않는 경우엔 자동으로 0번째 포인터로 연결되게 함
   */
  useEffect(() => {
    if (isValidCid) history.push("/todo/0");
  }, [isValidCid, history]);

  return (
    <RightContainer>
      {isValidCid ? (
        <Loading />
      ) : (
        <>
          <h1>{collection.title}</h1>
          <TodoList items={collection} />
          <TodoForm collection={collection} onSubmit={handleTodoFormSubmit} />
        </>
      )}
    </RightContainer>
  );
}

export default RightPane;

const Loading = () => {
  return <div>Loading...</div>;
};

const RightContainer = styled.div``;
