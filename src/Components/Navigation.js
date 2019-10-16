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
import { css } from "emotion";

export default class Navigation extends Component {
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
