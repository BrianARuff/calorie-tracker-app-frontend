import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from "react-router-dom";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Auth from "../Pages/Auth";

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div className="navLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Register </NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/auth/:username" render={props => <Auth {...props} />} />
        </Switch>
      </Router>
    );
  }
}
