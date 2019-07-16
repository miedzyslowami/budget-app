import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Router, Route, Switch } from "react-router-dom";
import history from './history';
import Profile from './components/Profile/Profile';
import Spendings from './components/Spendings/Spendings';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import './App.css';

function App() {
  return (
    <div className="App">
      Test
      <Spendings/>
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/spendings" component={Spendings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
