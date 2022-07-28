import React, { Component } from 'react'
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>my-form-2.0</h1>
        <Form submit={ this.handleSubmit }/>
      </div>
    );
  }
}

export default App;
