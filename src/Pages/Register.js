import React, { Component, Fragment } from "react";
import axios from "axios";

export default class Register extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    age: "",
    height: "",
    starting_weight: "",
    current_weight: "",
    goal_weight: "",
    hasError: false,
    errorMessage: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  register = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/register", {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        age: this.state.age,
        height: this.state.height,
        starting_weight: this.state.starting_weight,
        current_weight: this.state.starting_weight,
        goal_weight: this.state.goal_weight
      })
      .then(res => {})
      .catch(err => {
        this.setState({
          hasError: true,
          errorMessage: err.response.data.message
        });
      });
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
            <input onChange={this.handleInput} name="username" type="text" />
          </div>

          <div className="group">
            <label htmlFor="password">Password</label>
            <input
              autoComplete="true"
              onChange={this.handleInput}
              name="password"
              type="password"
            />
          </div>

          <div className="group">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleInput} name="email" type="email" />
          </div>

          <div className="group">
            <label htmlFor="age">Age</label>
            <input onChange={this.handleInput} name="age" type="text" />
          </div>

          <div className="group">
            <label htmlFor="height">Height</label>
            <input onChange={this.handleInput} name="height" type="text" />
          </div>

          <div className="group">
            <label htmlFor="starting_weight">Starting Weight</label>
            <input
              onChange={this.handleInput}
              name="starting_weight"
              type="text"
            />
          </div>

          <div className="group">
            <label htmlFor="goal_weight">Goal Weight</label>
            <input onChange={this.handleInput} name="goal_weight" type="text" />
          </div>
          <button onClick={this.register}>Submit</button>
        </form>
      </Fragment>
    );
  }
}
