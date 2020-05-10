import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Header from './Header';
import HomeContainer from './Home';
import './App.css';
import News from './News';
import Profile from './Profile';
import Login from './Login';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <Header />
      <div className="main-body">
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
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
