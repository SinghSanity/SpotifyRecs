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

  function onSearchButton(){
    fetch('/search?artist=' + String(inputRef.current.value)).then(res => res.json()).then(data => {
      if (data.status =='success') {
      setTitle(data.title);
      setArtists(data.artists);
      setImage(data.image);
      setPreview(data.preview);
      setSpotify(data.spotify);
      }
      else {
        alert('No results found! Try to check your spelling or search again.');
      }
    });
  }

  return (
    <div>

      <div>

        <h1 className='search_field'>Search for an Artist!</h1>

        <div className="search_field">
          <input ref={inputRef} type="text" aria-label="username-input" />
            <button onClick={onSearchButton} type="submit">
              Search
            </button>
        </div>
      </div>

      <br />

      <div>
        <Info title={title} artists={artists} cover={image} preview_sound={preview} spotify={spotify} />
      </div>



    </div>
  );
}

export default App;
