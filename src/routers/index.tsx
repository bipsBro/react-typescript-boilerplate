import React from "react";
import { Route, Switch } from "react-router-dom";
import IndexView from "../screens/index";
import ErrorView from "../screens/error";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={IndexView} />
    <Route path="*" component={ErrorView} />
  </Switch>
);

export default AppRouter;
