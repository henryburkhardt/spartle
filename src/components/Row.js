import { Component } from "react";
import Square from "./Square.js";
import dictionary from "../dictionary.json";

class Row extends Component {
  constructor(props) {
    super(props);
    this.wordLen = this.props.word.split("").length;
  }
  state = {
    focus: 0,
    check: false,
    freeze: this.props.freeze,
    word: this.props.word.split(""),
    allCorrect: false,
    guessArr: Array(this.wordLen),
    guessStr: "",
  };
  nextSpace() {
    const focus = this.state.focus + 1;
    if (focus < this.wordLen) {
      this.setState({ focus: focus });
    }
  }
  backSpace() {
    const focus = this.state.focus - 1;
    if (focus >= 0) {
      this.setState({ focus: focus });
    }
  }

  lookUpWord(word) {
    for (let i = 0; i < dictionary.length; i++) {
      if (dictionary[i] === word) {
        console.log(i);
        return true;
      }
    }
    return false;
  }
  submit() {
    if (this.state.focus === this.wordLen - 1 && !this.props.freeze) {
      const real = this.lookUpWord(this.state.guessStr);
      if (this.state.guessStr == this.props.word) {
        alert("congrats!");
        this.setState({
          check: true,
        });
        return;
      } else if (!real) {
        alert("not a real word");
      } else {
        this.setState({
          check: true,
        });
        this.props.nextRow();
      }
    }
  }
  guess(position, value) {
    let curGuess = this.state.guessArr;
    curGuess[position] = value;
    this.setState({
      guessArr: curGuess,
      guessStr: curGuess.join(""),
    });
  }

  render() {
    let squares = [];
    for (let i = 0; i < this.wordLen; i++) {
      let status = 0;
      if (this.state.focus == i) {
        status = true;
      } else {
        status = false;
      }
      let letter = this.props.word[i];

      squares.push(
        <Square
          backSpace={() => this.backSpace()}
          nextSpace={() => this.nextSpace()}
          submit={() => this.submit()}
          key={i}
          position={i}
          focus={status}
          check={this.state.check}
          freeze={this.props.freeze}
          letter={letter}
          word={this.state.word}
          updateGuess={(position, value) => this.guess(position, value)}
        />
      );
    }
    return <div>{squares}</div>;
  }
}

export default Row;
