import React from 'react';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Assignment-1 Counter Application</h1>
        <div className="row">
          <CounterClass />
          <CounterFunction />
        </div>
      </header>
    </div>
  );
}

export default App;
