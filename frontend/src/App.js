import logo from './logo.svg';
import Info from './Info';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {

  const [title, setTitle] = useState('');
  const [artists, setArtists] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [spotify, setSpotify] = useState('');

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
      
      <div className='setter'>
        <Info title={title} artists={artists} cover={image} preview_sound={preview} spotify={spotify} />
      </div>

    </div>
  );
}

export default App;
