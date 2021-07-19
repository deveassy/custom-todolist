import React from "react";
import { MainScreen, SearchScreen, NotFound } from "../screens";
import Sidebar from "./Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function MainRoute() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route path="/search" component={SearchScreen} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default MainRoute;
