import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import getRoutes from "./routes";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>App</h1>
          <ul className="nav nav-pills">
            <li>
              <Link to="/admin">Админка</Link>
            </li>
            <li>
              <Link to="/list">Список жанров</Link>
            </li>
          </ul>
          <Switch>{getRoutes()}</Switch>
        </div>
      </Router>
    );
  }
}
