import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { LeftPane, RightPane } from "../views";

function RootScreen() {
  // 사용자에 의해 추가되는 라우터의 파라미터를 만들어줌
  const { cid } = useParams<{ cid: string }>();
  return (
    <RootContainer>
      <LeftPane />
      <Divider />
      {/* 문자열을 정수로 변환시켜줌 */}
      <RightPane cid={Number.parseInt(cid)} />
    </RootContainer>
  );
}

export default RootScreen;

const RootContainer = styled.div`
  display: flex;
`;

const Divider = styled.div`
  height: 100vh;
  border: 2px solid #ddd;
`;
