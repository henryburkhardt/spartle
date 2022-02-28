import { Component } from "react";
import Square from "./Square.js";
import dictionary from "../json/dictionary.json";
import React, { useEffect } from "react";
import KeyLisitner from "./KeyListiner.js";
import ReactGA from "react-ga";

class Row extends Component {
  state = {
    focus: -1,
    checkStatus: false,
    allCorrect: false,
    guessArr: Array(0),
    currentKey: "",
    shake: false,
  };

  nextSpace() {
    const focus = this.state.focus + 1;
    if (focus < this.props.wordLength) {
      this.setState({ focus: focus });
    }
  }
  backSpace() {
    const focus = this.state.focus - 1;
    const guess = [...this.state.guessArr];
    guess.splice(focus + 1);
    if (focus >= -1) {
      this.setState({ focus: focus, guessArr: guess });
    }
  }

  lookUpWord(word) {
    for (let i = 0; i < dictionary.length; i++) {
      if (dictionary[i] === word) {
        return true;
      }
    }
    return false;
  }

  submit() {
    if (this.state.focus === this.props.wordLength - 1 && !this.props.freeze) {
      const guessStr = this.state.guessArr.join("");
      const real = this.lookUpWord(guessStr);
      if (guessStr === this.props.word) {
        //word is correct
        this.props.correctToast();
        this.setState({
          checkStatus: true,
        });
        ReactGA.event({
          category: "completed_Spartle",
          action: "submit",
          label: "correct",
        });
        return;
      } else if (!real) {
        //word is invalid
        this.props.notFoundToast();
        this.setState({
          shake: true,
        });
      } else {
        // word is valid, not correct
        this.setState({
          checkStatus: true,
        });
        if (this.props.rowPosition === 5) {
          this.props.gameOverToast();
          ReactGA.event({
            category: "completed_Spartle",
            action: "submit",
            label: "incorrect",
          });
        } else {
          this.props.nextRow(this.state.guessArr);
        }
      }
    }
  }

  guess(position, value) {
    let curGuess = this.state.guessArr;
    curGuess[position] = value;
    this.setState({
      guessArr: curGuess,
    });
  }

  currentKey(e) {
    if (this.props.freeze) {
      return;
    }

    e.preventDefault();
    if (e.key === "Enter") {
      this.submit();
    } else if (e.key === "Backspace") {
      this.backSpace();
    } else if (
      !(
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 97 && e.keyCode <= 122)
      )
    ) {
      return;
    } else {
      const key = e.key.toLowerCase();
      this.handleLetter(key);
    }
  }

  handleLetter(key) {
    const guess = this.state.guessArr;
    if (this.state.guessArr.length < this.props.wordLength) {
      guess.push(key);
    }
    this.setState({
      currentKey: key,
      guessArr: guess,
    });
    this.nextSpace();
  }

  handleAnimationEnd() {
    this.setState({
      shake: false,
    });
  }

  render() {
    let squares = [];
    for (let i = 0; i < this.props.wordLength; i++) {
      let focus = 0;

      if (this.state.focus === i) {
        focus = true;
      } else {
        focus = false;
      }
      let content = this.state.guessArr[i];

      squares.push(
        <Square
          key={i}
          shake={this.state.shake}
          content={content}
          position={i}
          focus={focus}
          check={this.state.checkStatus}
          freeze={this.props.freeze}
          letter={this.props.word[i]}
          word={this.props.word}
          updateGuess={(position, value) => this.guess(position, value)}
          backSpace={() => this.backSpace()}
          nextSpace={() => this.nextSpace()}
          submit={() => this.submit()}
        />
      );
    }
    return (
      <div
        className="game-row"
        onAnimationEnd={() => this.handleAnimationEnd()}
      >
        <KeyLisitner currentKey={(e) => this.currentKey(e)} />
        {squares}
      </div>
    );
  }
}

export default Row;
