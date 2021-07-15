import React from "react";
import MainScreen from "../screens/MainScreen";
import SearchScreen from "../screens/SearchScreen";
import Sidebar from "./Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route path="/search" component={SearchScreen} />
      </Switch>
    </BrowserRouter>
  );
}
