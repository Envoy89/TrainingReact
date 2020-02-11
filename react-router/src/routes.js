import { Route } from "react-router-dom";
import React from "react";
import Admin from "./components/Admin";
import Genre from "./components/Genre";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import List from "./components/List";
import Release from "./components/Release";
import Login from "./components/Login";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/admin",
    component: Admin,
    checkLogin: true
  },
  {
    path: "/genre/:genreId/:releaseId",
    component: Release
  },
  {
    path: "/genre/:genreId",
    component: Genre
  },
  {
    path: "/list",
    component: List
  },
  {
    path: "*",
    component: NotFound
  }
];

export default function getRoutes() {
  return routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
}

function RouteWithSubRoutes(route) {
  const check = route.checkLogin ? checkLogin() : true;
  const renderFunc = props =>
    check ? <route.component {...props} routes={route.routes} /> : <div></div>;
  return <Route path={route.path} exact={route.exact} render={renderFunc} />;
}

function checkLogin() {
  const login = window.localStorage.getItem("rr_login");
  if (login === "admin") {
    return true;
  }
  return false;
}
