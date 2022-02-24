import { Component, createRef } from "react";
import "./Square.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.inputReference = createRef();
  }
  state = {
    content: "",
    classes: "",
    disabled: true,
  };

  handleKeyDown = (e) => {
    if (this.props.check) {
      return;
    }

    if (e.key === "Enter") {
      this.props.submit();
    } else if (e.key === "Backspace") {
      this.props.backSpace(this.props.position);
      this.setState({
        content: "",
      });
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
    if (this.props.position === 0 && !this.props.freeze && !this.props.check) {
      this.inputReference.current.focus();
      this.setState({
        disabled: false,
      });
    }
  }

  componentDidUpdate() {
    if (this.props.focus && !this.props.freeze && !this.props.check) {
      this.inputReference.current.focus();
      // this.setState({
      //   disabled: false,
      // });
    }
  }

  validate() {
    let classes;
    if (this.props.check) {
      if (this.props.letter === this.state.content) {
        //all correct
        classes = "square all_correct animate";
      } else if (this.props.word.includes(this.state.content)) {
        //partial correct
        classes = "square one_correct animate";
      } else {
        //not correct
        classes = "square incorrect animate";
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
        //disabled={this.state.disabled}
        ref={this.inputReference}
        value={this.state.content}
      ></input>
    );
  }
}

export default Square;
