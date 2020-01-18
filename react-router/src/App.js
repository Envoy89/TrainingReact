import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Admin from "./components/Admin";
import Genre from "./components/Genre";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>App</h1>
          <ul>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/genre">Genre</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/genre">
              <Genre />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
