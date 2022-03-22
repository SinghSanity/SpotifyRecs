import React, { useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Info.css';

function Info(props) {

    var preview = false;

    if  (props.preview_sound == null) {
        preview = false;
    } 
    else {
        preview = true;
    }

    return(
        <div className='container'>
            <div className='left'>
                <img src= {props.cover} alt="" width="300px"/>
            </div>
            <div className='right'>
                <h2>{props.title}</h2>
                <h2>By: {props.artists}</h2>
                <div>
                   {preview ? 
                    <ReactAudioPlayer src={props.preview_sound} controls /> 
                    :
                   <h2>No Preview Available</h2>
                } 
                </div>
                <a href={props.spotify} target="_blank"><h2>Play me on Spotify!</h2></a>
            </div>
        </div>
    )
}

export default Info;