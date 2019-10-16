import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from "react-router-dom";
import ErrorBoundary from "../Error/ErrorBoundary.js";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Auth from "../Pages/Auth";
import PageNotFound from "../Pages/PageNotFound";
import { css } from "emotion";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div
          className={css`
            background: #ff4900;
            padding: 20px 0;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          `}
        >
          <div className="navLinks">
            <NavLink
              className={css`
                color: #fff;
              `}
              activeClassName="fw-bold"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={css`
                color: #fff;
              `}
              activeClassName="fw-bold"
              to="/register"
            >
              Register{" "}
            </NavLink>
            <NavLink
              className={css`
                color: #fff;
              `}
              activeClassName="fw-bold"
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/auth/:username" render={props => <Auth {...props} />} />
          <Route path="/*" render={props => <PageNotFound {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default function NavigationWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Navigation {...props} />
    </ErrorBoundary>
  );
}
