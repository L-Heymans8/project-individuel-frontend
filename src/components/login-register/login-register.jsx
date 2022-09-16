import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import style from './login-register.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const LoginRegister = () => {



    return (
        <Link to={'/Profil'}>
            <div className={style.loginGlobal}>
                <button className={style.buttonLogin} >
                    <FontAwesomeIcon icon={faUser} className={style.logoLogin} />
                </button>

            </div>
        </Link>
    );
};

export default LoginRegister;