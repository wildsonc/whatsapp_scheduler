import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import Databases from "./pages/Databases";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/databases">
        <Databases />
      </Route>
      <Route exact path="/queries">
        <h1>Query Page</h1>
      </Route>
      <Route exact path="/tasks">
        <h1>Task Page</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
