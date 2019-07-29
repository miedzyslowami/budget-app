import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './components/Profile/Profile';
import Spendings from './components/Spendings/Spendings';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddSpending from './components/AddSpending/AddSpending';
import { useAuth0 } from "./react-auth0-wrapper";
import './App.css';

function App(props) {
  let location = props.location;
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="App">
      <Spendings />
      <BrowserRouter>
        <header>
          <NavBar location={location}/>
        </header>
        <Switch>
          <Route path={`${location}`} exact />
          <PrivateRoute path={`${location}add_spending`} component={ AddSpending}/>
          <PrivateRoute path={`${location}profile`} component={ Profile } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
