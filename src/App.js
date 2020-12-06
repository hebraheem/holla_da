import React from 'react'
import './App.css';
import Overview from './OverView';
import SavedPage from './SavedPage';
import ErrorPage from './ErrorPage';
import SeeMore from './SeeMore'
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route path="/overview">
              <Overview />
            </Route>
            <Route path="/savedpage">
              <SavedPage />
            </Route>
            <Route path="/seemore">
              <SeeMore />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
