import { Component } from "react";
import "./Key.css";

class Key extends Component {
  render() {
    return (
      <button
        className={this.props.buttonClass}
        onClick={() => this.props.setKey()}
      >
        {this.props.letter}
      </button>
    );
  }
}

export default Key;
