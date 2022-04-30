import React from 'react';
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
                <a href={props.spotify} target="__blank"><img src= {props.cover} alt="" width="100%"/></a>
                <div className='card-words'>
                    <h2>{props.title}</h2>
                    <h3>By: {props.artists}</h3>
                    <div>
                        {preview ? 
                            <ReactAudioPlayer src={props.preview_sound} controls /> 
                            :
                            <br />
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;