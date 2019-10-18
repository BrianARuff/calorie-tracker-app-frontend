import React, { Component } from "react";
import { css } from "emotion";

export default class PageNotFound extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/");
    }, 5000);
  }
  render() {
    return (
      <div
        className={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          flex-wrap: nowrap;
          min-height: 100vh;
          width: 100%;
          padding: 20px 0 0 0;
          color: rgba(200, 69, 69);
        `}
      >
        <h2
          className={css`
            text-decoration: underline;
          `}
        >
          Page Not Found -- 404
        </h2>
        <p>
          Unable to find this page. Redirecting to home page in 5 seconds...
        </p>
      </div>
    );
  }
}
