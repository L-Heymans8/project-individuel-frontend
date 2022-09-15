import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faForwardStep, faBackwardStep, faRepeat, faShuffle } from '@fortawesome/free-solid-svg-icons'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from './musique-bar.module.css'

const MusiqueBar = () => {
    return (
        <div className={style.musiqueBarGlobal}>
            <div className={style.musiqueBar}>
                <AudioPlayer
                    autoPlay
                    src="http://example.com/audio.mp3"
                    onPlay={e => console.log("onPlay")
                    }
                    className={style.rhap_container}

                />

            </div>
        </div>
    );
};

export default MusiqueBar;