import React, { Component } from "react";
import { Router, NavLink, Switch } from "react-router-dom";
import getRoutes from "../../routes";
import history from "../../history";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
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
