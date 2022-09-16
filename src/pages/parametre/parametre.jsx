import React from 'react';
import Navbar from "../../components/navbar/navbar";
import MusiqueBar from "../../components/musique-bar/musique-bar";
import LoginRegister from '../../components/login-register/login-register';
import style from './parametre.module.css'

const Parametres = () => {
    return (
        <div>
            <Navbar />
            {/* <MusiqueBar /> */}
            <h1 className={style.parametreH1}>Paramètres</h1>

            <LoginRegister />
        </div>
    );
};

export default Parametres;