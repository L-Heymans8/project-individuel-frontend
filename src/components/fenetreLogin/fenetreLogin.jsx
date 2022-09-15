import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/auth-action';
import style from './fenetreLogin.module.css'


const FenetreLogin = () => {
    const { handleSubmit } = useForm()
    const dispatch = useDispatch()
    const onLogin = () => {
        dispatch(loginUser(true))
    }
    return (
        <div className={style.fenetreLoginGlobal}>
            <form onSubmit={handleSubmit(onLogin)} >
                <input type="text" placeholder='Login' />
                <button type="submit" >Login </button>
            </form>

        </div>
    );
};

export default FenetreLogin;