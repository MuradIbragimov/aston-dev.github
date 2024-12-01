import React, { Component } from "react";
import InputList from "./InputList";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      submittedText: "",
      isDisableButton: false,
      items: [],
    };
  }

  currentInputValue = (event) => {
    const value = event.target.value;
    this.setState({ inputValue: value });

    if (value.toLowerCase().includes("реакт")) {
      this.setState({ isDisableButton: true });
    } else {
      this.setState({ isDisableButton: false });
    }
  };

  handleSubmit = () => {
    const { inputValue, items } = this.state;
    this.setState({
      submittedText: inputValue,
      inputValue: "",
      items: [...items, inputValue],
    });
  };

  render() {
    return (
      <>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.currentInputValue}
          />
          <button
            onClick={this.handleSubmit}
            disabled={this.state.isDisableButton}
          >
            Отправить
          </button>
        </div>
        <p>значение внутри поля input: {this.state.submittedText}</p>
        <InputList items={this.state.items} />
      </>
    );
  }
}

export default FormInput;
