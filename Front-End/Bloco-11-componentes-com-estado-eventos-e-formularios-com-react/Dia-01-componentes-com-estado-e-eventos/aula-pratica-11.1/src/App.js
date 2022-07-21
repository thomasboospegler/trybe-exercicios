import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.handleClickButton1 = this.handleClickButton1.bind(this)
    this.handleClickButton2 = this.handleClickButton2.bind(this)
    this.handleClickButton3 = this.handleClickButton3.bind(this)

    this.state = {
      button1Clicks: 0,
      button2Clicks: 0,
      button3Clicks: 0,
    }
  }

  handleClickButton1() {
    this.setState((estadoanterior, _props) => ({
      button1Clicks: estadoanterior.button1Clicks + 1
    }), () => {
      console.log(this.getButtonColor(this.state.button1Clicks));
    })
  }
  
  handleClickButton2() {
    this.setState((estadoanterior, _props) => ({
      button2Clicks: estadoanterior.button2Clicks + 1
    }), () => {
      console.log(this.getButtonColor(this.state.button2Clicks));
    })
  }
  
  handleClickButton3() {
    this.setState((estadoanterior, _props) => ({
      button3Clicks: estadoanterior.button3Clicks + 1
    }), () => {
      console.log(this.getButtonColor(this.state.button3Clicks));
    })
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <div className='App'>
        <button
        onClick={ this.handleClickButton1 }
        style={{backgroundColor: this.getButtonColor(this.state.button1Clicks)}}
        >
          Botão 1 - Clicks: { this.state.button1Clicks }
        </button>
        <button
        onClick={ this.handleClickButton2 }
        style={{backgroundColor: this.getButtonColor(this.state.button2Clicks)}}
        >
          Botão 2 - Clicks: { this.state.button2Clicks }
        </button>
        <button
        onClick={ this.handleClickButton3 }
        style={{backgroundColor: this.getButtonColor(this.state.button3Clicks)}}
        >
          Botão 3 - Clicks: { this.state.button3Clicks }
        </button>
      </div>
    );
  }
}

export default App;
