import React, { Component } from "react";
import { createPortal } from "react-dom";

class Portal extends Component {
  state = {
    node: document.createElement("div")
  };
  componentDidMount() {
    this.setState({ node: document.getElementById(`${this.props.id}`) });
  }
  render() {
    return createPortal(
      <React.Fragment>{this.props.children}</React.Fragment>,
      this.state.node
    );
  }
}

export default Portal;
