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
import ErrorBoundary from "../Error/ErrorBoundary";
import PageNotFound from "../Pages/PageNotFound";

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
          <Route
            exact
            path="/"
            render={props => (
              <ErrorBoundary>
                <Home {...props} />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/register"
            render={props => (
              <ErrorBoundary>
                <Register {...props} />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/login"
            render={props => (
              <ErrorBoundary>
                <Login {...props} />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/auth/:username"
            render={props => (
              <ErrorBoundary>
                <Auth {...props} />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/*"
            render={props => (
              <ErrorBoundary>
                <PageNotFound {...props} />
              </ErrorBoundary>
            )}
          />
        </Switch>
      </Router>
    );
  }
}
