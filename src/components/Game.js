import { Component } from "react";
import Row from "./Row";
import words from "../words.json";
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
        />
      );
    }
    return <div>{rows}</div>;
  }
}

export default Game;
