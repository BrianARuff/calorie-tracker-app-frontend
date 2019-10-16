import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    if (error) {
      console.log(this.props);
      this.setState({ hasError: true });
    }
    console.error(error, errorInfo);
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>
            Something went wrong with component at path {this.props.match.path}.
          </h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
