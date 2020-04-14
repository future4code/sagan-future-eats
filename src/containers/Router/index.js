import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import Profile from "../ProfilePage";
import RestaurantPage from '../../components/Restaurant Page'
import FeedRestaurants from "../../containers/FeedRestaurants";
import CartPage from "../CartPage";


export const routes = {
  // root:'/',
  login:"/",
  register:"/register",
  addressregister: "/addressregister",
  feedRestaurants: "/restaurants",
  cart:'/cart',

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />
        {/* <Route path={routes.addressregister} component={} /> */}
        <Route exact path={routes.root} component={Profile} />
        <Route exact path={routes.feedRestaurants} component={FeedRestaurants} />
        <Route exact path={routes.cart} component={CartPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
