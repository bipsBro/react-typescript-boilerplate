import React from "react";
import { Route, Switch } from "react-router-dom";
import IndexView from "screens/index";
import ErrorView from "screens/error";

export default () => (
  <Switch>
    <Route path="/" component={IndexView} />
    <Route path="*" component={ErrorView} />
  </Switch>
);
