import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Form extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    const newText = e.target.value;
    this.setState({
      text: newText
    });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.props.submit(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { text } = this.state;
    return (
      <TextField
        label="Todo ..."
        margin="normal"
        value={text}
        fullWidth
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default Form;
