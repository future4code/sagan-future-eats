import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import FrontPage from "../../components/FrontPage";
import Profile from "../ProfilePage";

const routes = {
  root: '/',

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={Profile} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
