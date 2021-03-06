import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.click}
        type="button"
        className="btn-block btn btn-lg btn-default"
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
