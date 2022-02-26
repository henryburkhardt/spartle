import { Component } from "react";
import Keyboard from "./Keyboard/Keyboard";
import Row from "./Row";
import words from "../json/words.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Game.css";

let word;
class Game extends Component {
  state = {
    curRow: 0,
    date: "",
    letters: {
      incorrectLetters: Array(0),
      allcorrectLetters: Array(0),
      partialCorrectLetter: Array(0),
    },
  };

  getWord() {
    let dateObj = new Date();
    let newdate = dateObj.toLocaleDateString("en-US");
    word = words[newdate];
  }

  nextRow(guess) {
    //handle keyboard coloring Arrays
    let incorrect = this.state.letters.incorrectLetters;
    let allcorrect = this.state.letters.allcorrectLetters;
    let partialcorrect = this.state.letters.partialCorrectLetter;

    for (let i = 0; i < guess.length; i++) {
      if (word.split("")[i] === guess[i]) {
        allcorrect.push(guess[i]);
      } else if (word.split("").includes(guess[i])) {
        partialcorrect.push(guess[i]);
      } else {
        incorrect.push(guess[i]);
      }
    }

    this.setState({
      letters: {
        incorrectLetters: incorrect,
        allcorrectLetters: allcorrect,
        partialCorrectLetter: partialcorrect,
      },
    });

    //set row focus
    const nrow = this.state.curRow + 1;
    this.setState({
      curRow: nrow,
    });
  }

  notFoundToast() {
    toast("Not in word list", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      toastId: "notfound",
    });
  }

  correctToast() {
    toast.success("Nice job! Spartle correct.", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      toastId: "correct",
    });
  }

  gameOverToast() {
    const message =
      "😢 You've used up all your guesses. The Spartle today was \"" +
      word +
      '"';
    toast(message, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      toastId: "over",
    });
  }

  setKey(letter) {
    if (letter === "⌫") {
      this.refs.activeRow.backSpace();
    } else if (letter === "GO") {
      this.refs.activeRow.submit();
    } else {
      this.refs.activeRow.handleLetter(letter);
    }
  }

  render() {
    this.getWord();
    let rows = [];
    for (let i = 0; i < 6; i++) {
      let freeze;
      let ref;
      if (i === this.state.curRow) {
        freeze = false;
        ref = "activeRow";
      } else {
        freeze = true;
      }

      rows.push(
        <Row
          key={i}
          ref={ref}
          word={word}
          wordLength={word.split("").length}
          rowPosition={i}
          freeze={freeze}
          nextRow={(x) => this.nextRow(x)}
          notFoundToast={() => this.notFoundToast()}
          correctToast={() => this.correctToast()}
          gameOverToast={() => this.gameOverToast()}
        />
      );
    }

    let keyboard;
    if (this.props.showKeyboard) {
      keyboard = (
        <Keyboard
          incorrect={this.state.letters.incorrectLetters}
          correct={this.state.letters.allcorrectLetters}
          partial={this.state.letters.partialCorrectLetter}
          setKey={(letter) => this.setKey(letter)}
        />
      );
    }

    return (
      <div className="game">
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          closeOnClick
        />
        {rows}
        {keyboard}
      </div>
    );
  }
}

export default Game;
