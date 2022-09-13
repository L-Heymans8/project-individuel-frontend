import React from 'react';
import style from './musique-bar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons'
const MusiqueBar = () => {
    return (
        <div className={style.musiqueBarGlobal}>
            <div className={style.musiqueBar}>
                <FontAwesomeIcon icon={faBackwardStep} className={style.iconBackward} />
                <FontAwesomeIcon icon={faPlay} className={style.iconPlay} />
                <FontAwesomeIcon icon={faForwardStep} className={style.iconForward} />
            </div>
        </div>
    );
};

export default MusiqueBar;