import React from 'react';
import './App.css';
import Saludo from './components/views/saludo/Saludo';
import Home from './components/views/home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Saludo />
          <Home/>
        </a>
      </header>
    </div>
  );
}

export default App;