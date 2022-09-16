import React from 'react';
import Navbar from "../../components/navbar/navbar";
import MusiqueBar from "../../components/musique-bar/musique-bar";
import LoginRegister from '../../components/login-register/login-register';
import style from './parametre.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';

const Parametres = () => {
    return (
        <div>
            <Navbar />
            {/* <MusiqueBar /> */}
            <h1 className={style.parametreH1}>Paramètres</h1>
            <p className={style.parametreP}><FontAwesomeIcon icon={faHammer} className={style.hammer} /> En construction <FontAwesomeIcon icon={faHammer} className={style.hammer} />  </p>

            <LoginRegister />
        </div>
    );
};

export default Parametres;