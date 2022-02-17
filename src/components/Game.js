import { Component } from "react";
import Row from "./Row";
import words from "../words.json";
import { ToastContainer, toast } from "react-toastify";
import Timer from "./Timer";
import "./css/Game.css";
import "react-toastify/dist/ReactToastify.css";

const guesses = 6;
let word;
class Game extends Component {
  state = {
    curRow: 0,
    date: "",
  };

  getWord() {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = month + "/" + day + "/" + year;
    word = words[newdate];
  }

  nextRow() {
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
          freeze={freeze}
          nextRow={() => this.nextRow()}
          wordNotFound={() => this.wordNotFound()}
          correct={() => this.correct()}
        />
      );
    }

    return (
      <div className="game">
        <div className="timer">
          <Timer />
        </div>
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
      </div>
    );
  }
}

export default Game;
