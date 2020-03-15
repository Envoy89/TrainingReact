import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Header from './Header';
import HomeContainer from './Home';
import './App.css';
import News from './News';
import Profile from './Profile';

function App() {
  return (
    <Router history={history}>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <HomeContainer />
        </Route>
        <Route path='/news'>
          <News />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
