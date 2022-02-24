import { Component } from "react";
import Row from "./Row";
import words from "../words.json";
import { ToastContainer, toast } from "react-toastify";
import Timer from "./Timer";
import "./Game.css";
import "react-toastify/dist/ReactToastify.css";
import Keyboard from "./Keyboard";

const guesses = 6;
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
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = month + "/" + day + "/" + year;
    word = words[newdate];
  }

  nextRow(guess) {
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
    const nrow = this.state.curRow + 1;
    this.setState({
      curRow: nrow,
    });
  }

  wordNotFound() {
    toast.warning("Word does not exist!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }

  correct() {
    toast.success("Nice job! Wordle correct.", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }

  gameOver() {
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
    });
  }

  render() {
    this.getWord();
    let rows = [];
    for (let i = 0; i < guesses; i++) {
      let freeze;
      if (i === this.state.curRow) {
        freeze = false;
      } else {
        freeze = true;
      }
      rows.push(
        <Row
          word={word}
          key={i}
          rowPosition={i}
          freeze={freeze}
          nextRow={(x) => this.nextRow(x)}
          wordNotFound={() => this.wordNotFound()}
          correct={() => this.correct()}
          gameOver={() => this.gameOver()}
        />
      );
    }

    return (
      <div className="game">
        <div className="toast">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
        </div>
        <div>{rows}</div>
        {/* <Keyboard
          incorrect={this.state.letters.incorrectLetters}
          correct={this.state.letters.allcorrectLetters}
          partial={this.state.letters.partialCorrectLetter}
        /> */}
      </div>
    );
  }
}

export default Game;
