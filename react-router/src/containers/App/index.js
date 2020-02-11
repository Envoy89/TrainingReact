import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Switch } from "react-router-dom";
import getRoutes from "../../routes";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>App</h1>
          <ul className="nav nav-pills">
            <li>
              <NavLink exact to="/">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin">Админка</NavLink>
            </li>
            <li>
              <NavLink to="/list" activeClassName="active">
                Список жанров
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">Войти</NavLink>
            </li>
          </ul>
          <Switch>{getRoutes()}</Switch>
        </div>
      </Router>
    );
  }
}
