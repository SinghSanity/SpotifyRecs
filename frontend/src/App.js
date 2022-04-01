import Info from './Info';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {

  const [title, setTitle] = useState('');
  const [artists, setArtists] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [spotify, setSpotify] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    
    fetch('/info').then(res => res.json()).then(data => {
      setTitle(data.title);
      setArtists(data.artists);
      setImage(data.image);
      setPreview(data.preview);
      setSpotify(data.spotify);
    });
    
  }, []);

  console.log(preview);

  return (
    <div>
      
      <div>
        <Info title={title} artists={artists} cover={image} preview_sound={preview} spotify={spotify} />
      </div>

      <div>
            <h1 className="info">Search for an Artist!</h1>
            <div className="info">
              <input ref={inputRef} type="text" aria-label="username-input" />
              <button type="submit">
                Search
              </button>
            </div>
      </div>

    </div>
  );
}

export default App;
