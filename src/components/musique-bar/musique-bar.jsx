import React from 'react';
import style from './musique-bar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faForwardStep, faBackwardStep, faRepeat, faShuffle } from '@fortawesome/free-solid-svg-icons'

const MusiqueBar = () => {
    return (
        <div className={style.musiqueBarGlobal}>
            <div className={style.musiqueBar}>
                <FontAwesomeIcon icon={faShuffle} className={style.iconShuffle} />
                <FontAwesomeIcon icon={faBackwardStep} className={style.iconBackward} />
                <FontAwesomeIcon icon={faPlay} className={style.iconPlay} />
                <FontAwesomeIcon icon={faForwardStep} className={style.iconForward} />
                <FontAwesomeIcon icon={faRepeat} className={style.iconRepeat} />
            </div>
        </div>
    );
};

export default MusiqueBar;