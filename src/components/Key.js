import { Component } from "react";
import "./Key.css";

class Key extends Component {
  handleClick() {
    const letter = this.props.letter;
    this.props.setKey(letter);
  }
  render() {
    const letter = this.props.letter;

    return (
      <button
        className={this.props.buttonClass}
        onClick={() => this.handleClick()}
      >
        {this.props.letter}
      </button>
    );
  }
}

export default Key;
