import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './components/Profile/Profile';
import Spendings from './components/Spendings/Spendings';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddSpending from './components/AddSpending/AddSpending';
import './App.css';

function App() {
  function getUser(user){
    console.log(user);
  }

  return (
    <div className="App">
      <Spendings />
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <AddSpending />
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/budget-app/profile" component={ Profile } getUser={getUser.bind(this)}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
