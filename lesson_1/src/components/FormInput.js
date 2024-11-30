import React, { Component } from "react";

class FormInput extends Component {
  constructor(props) {
    console.log("Конструктор: компонент создается");
    super(props);
    this.state = {
      inputValue: "",
      submittedText: "",
    };
  }

  currentInputValue = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = () => {
    console.log("Отправка данных:", this.state.inputValue);
    this.setState({ submittedText: this.state.inputValue, inputValue: "" });
  };

  componentDidMount() {
    console.log("componentDidMount: компонент смонтирован");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: нужно ли обновлять компонент?");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: компонент обновился");
    console.log("Предыдущие пропсы:", prevProps);
    console.log("Предыдущее состояние:", prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: компонент размонтируется");
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError: поймана ошибка");
    return null;
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch: ошибка в компоненте");
    console.log("Ошибка:", error);
    console.log("Информация:", info);
  }

  render() {
    console.log("рендер компонента");
    return (
      <>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.currentInputValue}
          ></input>
          <button onClick={this.handleSubmit}>Отправить</button>
        </div>
        <p>значение внутри поля input: {this.state.submittedText}</p>
      </>
    );
  }
}

export default FormInput;
