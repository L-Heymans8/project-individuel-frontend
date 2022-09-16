import React from 'react';
import style from './music-player.module.css'

const MusicPLayer = () => {
    return (
        <div className={style.musicPLayerGlobal}>
            <div className={style.musicPLayerImg}></div>
            <div className={style.musicPLayerEnsemble}>
                <p className={style.musicPLayerArtiste}>Artiste</p>
                <p className={style.musicPLayerMusic}>Titre de la musique</p>
            </div>


        </div>
    );
};

export default MusicPLayer;