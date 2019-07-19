import React from "react";
import { Route, Switch } from "react-router-dom";
import IndexView from "screens/index";
import SignInView from "screens/signin";
import ErrorView from "screens/error";

export default () => (
  <Switch>
    <Route path="/" exact component={IndexView} />
    <Route path="/sign-in" exact component={SignInView} />
    <Route path="*" component={ErrorView} />
  </Switch>
);
