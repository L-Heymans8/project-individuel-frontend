import React from 'react';
import style from './profil.module.css'
import { Link } from 'react-router-dom';
const Profil = () => {
    return (
        <div className={style.LoginGeneral}>
            <div className={style.LoginForm}>
                <Link to="/connexion"><button className={style.loginButton}>Login</button></Link>
                <button className={style.loginButton}>Logout</button>

            </div>
        </div>
    );
};

export default Profil;