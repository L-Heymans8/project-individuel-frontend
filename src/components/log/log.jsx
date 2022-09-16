import React, { useEffect } from 'react';
import FenetreLogin from '../fenetreLogin/fenetreLogin';
import FenetreRegister from '../fenetreRegister/fenetreRegister';
import style from './log.module.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { logoutUser } from '../../store/actions/auth-action';
import { useDispatch } from 'react-redux';

const Log = ({ onSelectedMenu }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false)
    //fonction qui permet que quand l'utilisateur est connecté de faire disparaitre mes boutons s'enregistrer et se connecter
    const isConnected = useSelector(state => state.auth.isConnected)
    useEffect(() => {
        if (isConnected) {
            setLogin(false)
            setRegister(false)
        }
    }, [isConnected])


    const handleStates = (e) => {
        if (e.target.id === "register") {
            setLogin(false)
            setRegister(true)
        }
        else if (e.target.id === "login") {
            setLogin(true)
            setRegister(false)
        }
    }

    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logoutUser())
    }
    return (
        <div>
            <div className={style.buttonGlobal}>
                {!isConnected &&
                    <button onClick={handleStates} id="register" className={style.registerButton} >
                        Register
                    </button>}
                {!isConnected &&
                    <button onClick={handleStates} id="login" className={style.loginButton}>
                        Login
                    </button>}
                {isConnected &&
                    <button className={style.logoutButton} onClick={(onLogout)}>Logout</button>}

            </div>

            <div>

                {register && <FenetreRegister />}
                {login && <FenetreLogin onSelected={onSelectedMenu} />}
            </div>
        </div>

    );
};

export default Log;