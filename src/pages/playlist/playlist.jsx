
import React from 'react';
import Navbar from "../../components/navbar/navbar";
import MusiqueBar from "../../components/musique-bar/musique-bar";
import LoginRegister from '../../components/login-register/login-register';
import style from './playlist.module.css'

const Playlist = () => {
    return (
        <div>
            <Navbar />
            <h1 className={style.playlistH1}>Playlist</h1>


            {/* <MusiqueBar /> */}
            <LoginRegister />
        </div>
    );
};

export default Playlist;