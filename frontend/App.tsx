import React, { useState, useContext } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";

interface Props {}

const App = (props: Props) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
          <Link to="/a"> To /a </Link>
        </Route>
        <Route path="/a" exact>
          <div>A Page</div>
          <Link to="/"> To / </Link>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
