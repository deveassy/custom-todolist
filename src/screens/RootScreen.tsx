import React from "react";
import styled from "styled-components";
import { LeftPane, RightPane } from "../views";

function RootScreen() {
  return (
    <RootContainer>
      <LeftPane />
      <div style={{ height: "100vh", width: 2, backgroundColor: "#ddd" }} />
      <RightPane />
    </RootContainer>
  );
}

export default RootScreen;

const RootContainer = styled.div`
  display: flex;
`;
