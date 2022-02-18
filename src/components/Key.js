import { Component } from "react";
import "./css/Keyboard.css";

class Key extends Component {
  state = {
    oneCorrect: false,
    allCorrect: false,
    incorrect: false,
  };
  render() {
    let classes;
    if (this.state.oneCorrect) {
      classes = "keyButton oneCorrect";
    } else if (this.state.allCorrect) {
      classes = "keyButton allCorrect";
    } else if (this.state.incorrect) {
      classes = "keyButton incorrect";
    } else {
    }
    return (
      <button className="keyButton" onClick={() => this.props.setKey()}>
        {this.props.letter}
      </button>
    );
  }
}

export default Key;
