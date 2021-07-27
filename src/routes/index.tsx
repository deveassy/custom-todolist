import React from "react";
import TodoRoute from "./TodoRoute";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to={`/main`} />
        {/* 추후 유저관리를 위한 라우터 분리 */}
        <Route path="/main" component={TodoRoute} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

const NotFound = () => <p>No Page</p>;
