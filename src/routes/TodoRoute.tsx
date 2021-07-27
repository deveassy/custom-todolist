import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import styled from "styled-components";

import Collection from "../views/right-pane";
import SideNavContainer from "../views/left-pane";
import SearchScreen from "../screens/SearchScreen";

const DEFAULT_INDEX = 0;

/**
 * 할 일 관련 라우터
 * 1. `/main/collection/:cid` : 컬렉션 view
 * 2. `/main/search` :  전체 검색 view
 * 3. `not found` : 루트로 리디렉션
 */
function TodoRoute() {
  const { path } = useRouteMatch();
  return (
    <Root>
      <LeftPane>
        <SideNavContainer />
      </LeftPane>
      <Divider />
      <RightPane>
        <Switch>
          <Redirect
            exact
            from={`${path}/`}
            to={`${path}/collection/${DEFAULT_INDEX}`}
          />
          <Route path={`${path}/collection/:cid`} component={Collection} />
          <Route path={`${path}/search`} component={SearchScreen} />
          <Redirect to="/" />
        </Switch>
      </RightPane>
    </Root>
  );
}

export default TodoRoute;

const Pane = styled.div`
  display: flex;
  flex-direction: column;
`;

const Root = styled.div`
  display: flex;
`;

const Divider = styled.div`
  height: 100vh;
  border: 2px solid #ddd;
`;

const LeftPane = styled(Pane)`
  flex: 1;
`;

const RightPane = styled(Pane)`
  flex: 3;
`;
