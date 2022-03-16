import React from 'react';
import './App.css';

function Info(props) {
    return(
        <div className='container'>
            <div className='left'>
                <img src= {props.cover} alt="" width="300px"/>
            </div>
            <div className='right'>
                <h2>{props.title}</h2>
                <h2>{props.artists}</h2>
                <h2>{props.preview_sound}</h2>
                <h2>{props.spotify}</h2>
            </div>
        </div>
    )
}

export default Info;