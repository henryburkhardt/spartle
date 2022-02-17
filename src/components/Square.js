import { Component, createRef } from "react";
import "./css/Square.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.inputReference = createRef();
  }
  state = {
    content: "",
    classes: "",
  };
  handleKeyDown = (e) => {
    if (this.props.check) {
      return;
    }

    if (e.key === "Enter") {
      this.props.submit();
    } else if (e.key === "Backspace") {
      this.setState({
        content: "",
      });
      this.props.backSpace(this.props.position);
    }

    const value = e.key.toLowerCase();
    if (
      !(
        (e.keyCode >= 65 && e.keyCode <= 90) ||
        (e.keyCode >= 97 && e.keyCode <= 122)
      )
    ) {
      return;
    } else {
      this.setState({
        content: value,
      });
      this.props.updateGuess(this.props.position, value);
      this.props.nextSpace();
    }
  };

  handleChange = (e) => {};

  componentDidMount() {
    if (this.props.position == 0 && !this.props.freeze && !this.props.check) {
      this.inputReference.current.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.focus && !this.props.freeze && !this.props.check) {
      this.inputReference.current.focus();
    }
  }

  validate() {
    let classes;
    if (this.props.check) {
      if (this.props.letter === this.state.content) {
        classes = "square all_correct";
      } else if (this.props.word.includes(this.state.content)) {
        classes = "square one_correct";
      } else {
        classes = "square incorrect";
      }
    } else {
      classes = "square";
    }
    return classes;
  }
  render() {
    const classes = this.validate();
    return (
      <input
        className={classes}
        maxLength={1}
        onKeyDown={this.handleKeyDown.bind(this)}
        onChange={this.handleChange}
        readOnly={this.state.readOnly}
        ref={this.inputReference}
        value={this.state.content}
      ></input>
    );
  }
}

export default Square;
