import React, { Component } from "react";
import axios from "axios";
import { css, keyframes } from "emotion";
import ErrorBoundary from "../Error/ErrorBoundary";

class Login extends Component {
  state = {
    errorMessage: "",
    hasError: false,
    username: Object(this.props.location.state).hasOwnProperty("username")
      ? this.props.location.state.username
      : "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/users/name/${this.state.username}`)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("age", res.data.age);
        localStorage.setItem("height", res.data.height);
        localStorage.setItem("starting_weight", res.data.starting_weight);
        localStorage.setItem("current_weight", res.data.current_weight);
        localStorage.setItem("goal_weight", res.data.goal_weight);
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          hasError: true,
          errorMessage: Object(err.response).hasOwnProperty("data")
            ? err.response.data.message
            : ""
        });
      });
  };
  render() {
    return (
      <form onSubmit={this.login} className="login-container">
        {this.state.hasError ? (
          <span
            className={css`
              position: relative;
              color: #fff;
              font-weight: light;
              animation: ${fadeIn} 300ms ease-in-out;
              background: #cc0000;
              width: 300px;
              padding: 5px 20px;
              margin: 20px;
              cursor: pointer;
              transition: all 300ms ease-in-out;
              text-transform: uppercase;
              display: ${this.state.hasError === false ? "none" : "block"}
              &:hover {
                font-weight: bold;
                font-size: 24px;
              }
            `}
          >
            {this.state.errorMessage ? this.state.errorMessage : ""}
          </span>
        ) : null}
        <div
          className={css`
            margin: 20px;
          `}
        >
          <label htmlFor="username">Username</label>
          <input
            onChange={this.handleInputChange}
            name="username"
            type="text"
            defaultValue={this.state.username}
          />
        </div>

        <div className="group">
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleInputChange}
            name="password"
            type="password"
            autoComplete="true"
          />
        </div>
        <button onClick={this.login}>Submit</button>
      </form>
    );
  }
}

// emotion key frame styles

const fadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 100
  }
});

export default function LoginWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Login {...props} />
    </ErrorBoundary>
  );
}
