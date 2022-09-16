import React from 'react';
import style from './profil.module.css'
import { Link } from 'react-router-dom';
const Profil = () => {
    return (
        <div className={style.LoginGeneral}>
            <div className={style.LoginForm}>
                <Link to="/Profil"><button className={style.loginButton}>Login</button></Link>


            </div>
        </div>
    );
};

export default Profil;