import React from "react";
import RootScreen from "../screens/RootScreen";
import NotFound from "../screens/NotFound";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const DEFAULT_INDEX = 0;

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to={`/todo/${DEFAULT_INDEX}`} />
        <Route path="/todo/:cid" component={RootScreen} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
