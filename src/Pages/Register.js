import React, { Component, Fragment } from "react";
import axios from "axios";
import ErrorBoundary from "../Error/ErrorBoundary";

class Register extends Component {
  state = {
    username: "",
    password: "",
    password2: "",
    email: "",
    age: "",
    height: "",
    starting_weight: "",
    current_weight: "",
    goal_weight: "",
    hasError: false,
    errorMessage: "",
    showEmail: false,
    count: 0
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  register = e => {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      axios
        .post(process.env.REACT_APP_NODE_LOCALHOST + "/auth/register", {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          age: this.state.age,
          height: this.state.height,
          starting_weight: this.state.starting_weight,
          current_weight: this.state.starting_weight,
          goal_weight: this.state.goal_weight
        })
        .then(res => {
          this.setState(prevState => {
            return { showEmail: true, count: prevState.count++ };
          });
        })
        .catch(err => {
          this.setState(prevState => {
            return {
              hasError: true,
              errorMessage: Object(err.response).hasOwnProperty("data")
                ? err.response.data.message
                : "",
              count: prevState.count++
            };
          });
        });
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.hasError ? (
          <h4 style={{ color: "red" }}>
            {this.state.errorMessage || "Error Posting Message"}
          </h4>
        ) : null}
        <form onSubmit={this.register} className="regiter-container">
          <div className="group">
            <label htmlFor="username">Username</label>
            <input
              style={
                this.state.count > 0 && !this.state.username.length
                  ? emptyFieldStyle
                  : {}
              }
              onChange={this.handleInput}
              name="username"
              type="text"
            />
          </div>

          {this.state.password === this.state.password2 ? null : (
            <span>Passwords Do Not Match</span>
          )}

          <div className="group">
            <label htmlFor="password">Password</label>
            <input
              style={
                this.state.count > 0 && !this.state.password.length
                  ? emptyFieldStyle
                  : {}
              }
              autoComplete="true"
              onChange={this.handleInput}
              name="password"
              type="password"
            />
          </div>

          <div className="group">
            <label htmlFor="password2">Validate Password</label>
            <input
              autoComplete="false"
              onChange={this.handleInput}
              name="password2"
              type="password"
            />
          </div>

          <div className="group">
            <label htmlFor="email">Email</label>
            <input
              style={
                this.state.count > 0 && !this.state.email.length
                  ? emptyFieldStyle
                  : {}
              }
              onChange={this.handleInput}
              name="email"
              type="email"
            />
          </div>

          <div className="group">
            <label htmlFor="age">Age</label>
            <input
              style={
                this.state.count > 0 && !this.state.age ? emptyFieldStyle : {}
              }
              onChange={this.handleInput}
              name="age"
              type="text"
            />
          </div>

          <div className="group">
            <label htmlFor="height">Height in Inches</label>
            <input
              style={
                this.state.count > 0 && !this.state.height
                  ? emptyFieldStyle
                  : {}
              }
              onChange={this.handleInput}
              name="height"
              type="text"
            />
          </div>

          <div className="group">
            <label htmlFor="starting_weight">Starting Weight</label>
            <input
              style={
                this.state.count > 0 && !this.state.starting_weight
                  ? emptyFieldStyle
                  : {}
              }
              onChange={this.handleInput}
              name="starting_weight"
              type="text"
            />
          </div>

          <div className="group">
            <label htmlFor="goal_weight">Goal Weight</label>
            <input
              style={
                this.state.count > 0 && !this.state.goal_weight
                  ? emptyFieldStyle
                  : {}
              }
              onChange={this.handleInput}
              name="goal_weight"
              type="text"
            />
          </div>
          <button onClick={this.register}>Submit</button>
        </form>
        {this.state.showEmail ? (
          <p>Please check your email to continue.</p>
        ) : null}
      </Fragment>
    );
  }
}

const emptyFieldStyle = {
  border: "1px solid red"
};

export default function RegisterWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Register {...props} />
    </ErrorBoundary>
  );
}
