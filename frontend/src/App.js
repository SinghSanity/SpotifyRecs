import logo from './logo.svg';
import Info from './Info';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/info').then(res => res.json()).then(data => {
      setCurrentTime(data.title);
    });
  }, []);

  console.log(currentTime);


  return (
    <div className="App">
      
      <div className='setter'>
        <Info title="This is a super long title that I want to see how it cleans up" artists="Artists" cover={logo} preview_sound="Preview" spotify="Spotify" />
        <Info title="Hello" artists="Artists" cover={logo} preview_sound="Preview" spotify="Spotify" />

      </div>

    </div>
  );
}

export default App;
