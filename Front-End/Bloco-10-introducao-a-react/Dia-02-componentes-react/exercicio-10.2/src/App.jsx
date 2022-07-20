import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <section className='title'>
          <h1>Pokedex</h1>
        </section>
        <section className='pokedex-container'>
          <Pokedex />
        </section>
      </div>
    );
  }
}

export default App;
