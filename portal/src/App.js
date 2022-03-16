import logo from './logo.svg';
import Info from './Info';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {

  return (
    <div className="App">
      
      <div className='setter'>
        <Info title="This is a super long title that I want to see how it cleans up" artists="Artists" cover={logo} preview_sound="Preview" spotify="Spotify" />
        <Info title="Hello" artists="Artists" cover={logo} preview_sound="Preview" spotify="Spotify" />

      </div>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
