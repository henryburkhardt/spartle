import { Component } from "react";
import Key from "./Key";

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.row1Char = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    this.row2Char = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    this.row3Char = ["z", "x", "c", "v", "b", "n", "m"];
  }

  setKey() {
    console.log("set");
  }
  render() {
    let row1 = [];
    let row2 = [];
    let row3 = [<Key letter="↩" key="Enter" />];
    for (let char of this.row1Char) {
      row1.push(
        <Key
          className="Key"
          letter={char}
          key={char}
          setKey={() => this.setKey()}
        />
      );
    }
    for (let char of this.row2Char) {
      row2.push(
        <Key
          className="Key"
          letter={char}
          key={char}
          setKey={() => this.setKey()}
        />
      );
    }
    for (let char of this.row3Char) {
      row3.push(
        <Key
          className="Key"
          letter={char}
          key={char}
          setKey={() => this.setKey()}
        />
      );
    }

    row3.push(<Key letter="⌫" key="Del" />);

    return (
      <div className="keyBoard">
        <div className="row1">{row1}</div>
        <div className="row2">{row2}</div>
        <div className="row3">{row3}</div>
      </div>
    );
  }
}

export default Keyboard;
