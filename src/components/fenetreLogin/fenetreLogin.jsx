import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/auth-action';
import style from './fenetreLogin.module.css'


const FenetreLogin = ({ }) => {

    const { handleSubmit } = useForm()
    const dispatch = useDispatch()
    const onLogin = () => {
        dispatch(loginUser(true))
    }

    //-------

    return (
        <div className={style.fenetreLoginGlobal}>
            <form onSubmit={handleSubmit(onLogin)} className={style.loginForm} >
                <h1 className={style.loginH1}>Login</h1>
                <input type="text" placeholder='Email' className={style.loginInput} />
                <input type="text" placeholder='Mot de passe' className={style.loginPassword} />

                <button type="submit" className={style.loginSubmit} >Login </button>
            </form>

        </div>
    );
};

export default FenetreLogin;