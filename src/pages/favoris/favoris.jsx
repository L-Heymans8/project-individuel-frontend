import React from 'react';
import Navbar from "../../components/navbar/navbar";
import LoginRegister from '../../components/login-register/login-register';

import style from './favoris.module.css'
import FavorisItem from '../../components/favorisItem/favorisItem';

const Favoris = () => {
    return (
        <div>
            <Navbar />

            <LoginRegister />
            <h1 className={style.favorisH1}>Favoris</h1>
            <FavorisItem />

        </div>
    );
};

export default Favoris;