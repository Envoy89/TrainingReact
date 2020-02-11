import React, { Component } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const login = e.target.elements[0].value;
    window.localStorage.setItem("rr_login", login);

    if (login === "admin") {
      history.push("/admin");
    } else {
      history.push("/");
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">Пожалуйста, введите логин:</div>
      <form className="col-md-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="login" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
