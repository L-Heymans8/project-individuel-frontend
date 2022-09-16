import React from 'react';
import style from './fenetreRegister.module.css'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/auth-action';

const FenetreRegister = () => {

    const { handleSubmit } = useForm()
    const dispatch = useDispatch()
    const onLogin = () => {
        dispatch(loginUser(true))
    }
    return (

        <div className={style.fenetreLoginGlobal}>
            <form onSubmit={handleSubmit(onLogin)} className={style.loginForm} >
                <h1 className={style.loginH1}>Register</h1>
                <input type="text" placeholder='Email' className={style.loginInput} />
                <input type="text" placeholder='Mot de passe' className={style.loginPassword} />
                <input type="text" placeholder='Comfirmer mot de passe' className={style.loginConfirmPassword} />


                <button type="submit" className={style.loginSubmit} >Register </button>
            </form>

        </div>

    );
};

export default FenetreRegister;