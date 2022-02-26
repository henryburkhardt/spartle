import { Component } from "react";
import Key from "./Key";
import "./Keyboard.css";

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.row1Char = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    this.row2Char = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    this.row3Char = ["z", "x", "c", "v", "b", "n", "m"];
  }

  setKey(letter) {
    this.props.setKey(letter);
  }

  getClass(letter) {
    if (this.props.correct.includes(letter)) {
      return "game-keyboard-key game-keyboard-key-correct";
    } else if (this.props.partial.includes(letter)) {
      return "game-keyboard-key  game-keyboard-key-partial";
    } else if (this.props.incorrect.includes(letter)) {
      return "game-keyboard-key  game-keyboard-key-incorrect";
    } else {
      return "game-keyboard-key";
    }
  }
  render() {
    let row1 = [];
    let row2 = [];
    let row3 = [
      <Key
        letter="GO"
        key="Go"
        buttonClass="extraButton"
        setKey={(letter) => this.setKey(letter)}
      />,
    ];
    for (let char of this.row1Char) {
      row1.push(
        <Key
          buttonClass={this.getClass(char)}
          letter={char}
          key={char}
          setKey={(letter) => this.setKey(letter)}
        />
      );
    }
    for (let char of this.row2Char) {
      row2.push(
        <Key
          buttonClass={this.getClass(char)}
          letter={char}
          key={char}
          setKey={(letter) => this.setKey(letter)}
        />
      );
    }
    for (let char of this.row3Char) {
      row3.push(
        <Key
          buttonClass={this.getClass(char)}
          letter={char}
          key={char}
          setKey={(letter) => this.setKey(letter)}
        />
      );
    }

    row3.push(
      <Key
        letter="⌫"
        key="Delete"
        buttonClass="extraButton"
        setKey={(letter) => this.setKey(letter)}
      />
    );

    return (
      <div className="game-keyboard">
        <div className="row1">{row1}</div>
        <div className="row2">{row2}</div>
        <div className="row3">{row3}</div>
      </div>
    );
  }
}

export default Keyboard;
