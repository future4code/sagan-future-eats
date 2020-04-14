import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import FrontPage from "../../components/FrontPage";
import FeedRestaurants from "../../components/FeedRestaurants";

const routes = {
  root: "/",
  feed: "/restaurants"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={FrontPage} />
        <Route exact path={routes.feed} component={FeedRestaurants} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
