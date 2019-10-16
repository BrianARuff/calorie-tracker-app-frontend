import React from "react";
import axios from "axios";

export default class Auth extends React.Component {
  state = {
    hasError: false,
    error: {}
  };
  componentDidMount() {
    console.log(this.props.match.params.username);
    axios
      .post(`http://localhost:3001/auth/validate`, {
        username: this.props.match.params.username
      })
      .then(res => {
        setTimeout(() => {
          this.props.history.push("/login");
        }, 3000);
      })
      .catch(err => {
        this.setState({ error: err, hasError: true });
        console.log({ ...err });
      });
  }
  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h4 style={{ color: "red" }}>
            {this.state.error.response.data.message}
          </h4>
        ) : null}
        <p>
          Thank you for registering and validating your account. You should be
          redirected to the login page. If not then click{" "}
          <a href={`${window.location.origin}/login`}>here</a> to Login.
        </p>
      </div>
    );
  }
}
