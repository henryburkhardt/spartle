import { Component, createRef } from "react";
import "./Square.css";

class Square extends Component {
  validate() {
    let classes;
    if (this.props.check) {
      if (this.props.letter === this.props.content) {
        //all correct
        classes = "game-row-square all_correct animate";
      } else if (this.props.word.includes(this.props.content)) {
        //partial correct
        classes = "game-row-square one_correct animate";
      } else {
        //not correct
        classes = "game-row-square incorrect animate";
      }
    } else {
      classes = "game-row-square";
    }
    return classes;
  }
  render() {
    const classes = this.validate();
    return (
      <div className={classes}>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Square;
