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
            <div className='card'>
                <img src= {props.cover} alt="" width="100%"/>
                <div className='card-words'>
                    <h3>{props.title}</h3>
                    <h3>By: {props.artists}</h3>
                    <div>
                        {preview ? 
                            <ReactAudioPlayer src={props.preview_sound} controls /> 
                            :
                            <br />
                        } 
                    </div>
                    <a href={props.spotify} target="_blank"><h3>Play me on Spotify!</h3></a>
                </div>
            </div>
        </div>
    )
}

export default Info;