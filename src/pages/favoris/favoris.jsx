import React from 'react';
import Navbar from "../../components/navbar/navbar";
import MusiqueBar from "../../components/musique-bar/musique-bar";
import LoginRegister from '../../components/login-register/login-register';
import FavorisItem from '../../components/favoris/favorisItem';
import style from './favoris.module.css'

const Favoris = () => {
    return (
        <div>
            <Navbar />
            {/* <MusiqueBar /> */}
            <LoginRegister />
            <h1 className={style.favorisH1}>Favoris</h1>
            <FavorisItem />

        </div>
    );
};

export default Favoris;