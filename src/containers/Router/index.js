import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import Profile from "../ProfilePage";

export const routes = {
  root:'/',
  login:"/login",
  register:"/register",
  addressregister: "/addressregister"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />
        {/* <Route path={routes.addressregister} component={} /> */}
        <Route exact path={routes.root} component={Profile} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
