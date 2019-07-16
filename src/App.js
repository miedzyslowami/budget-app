import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './components/Profile/Profile';
import Spendings from './components/Spendings/Spendings';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import './App.css';

function App() {
  return (
    <div className="App">
      <Spendings />
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
