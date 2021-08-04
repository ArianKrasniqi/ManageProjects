import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./config";

const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, i) => {
          console.log('route', route)
        return (
          <Route key={i} {...route} render={route.component} />
        );
      })}
    </Switch>
  </Router>
);

export default Routes;
