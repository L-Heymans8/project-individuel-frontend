import React, { useEffect } from 'react';
import FenetreLogin from '../fenetreLogin/fenetreLogin';
import FenetreRegister from '../fenetreRegister/fenetreRegister';
import style from './log.module.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Log = () => {

    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false)

    const isConnected = useSelector(state => state.auth.isConnected)
    let setupButton = <div></div>;
    useEffect(() => {
        console.log(isConnected)
        if (isConnected) {
            setupButton = <div>
                <button> Logout</button>
            </div>

        }

        else {
            console.log("eaea")
            setupButton = <div>oajeae</div>
            {/* <button onClick={handleStates} id="register">
                    Register
                </button>
                <button onClick={handleStates} id="login">
                    Login
                </button>

            </div> */}
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
    return (
        <div>
            {setupButton}

            <div>

                {register && <FenetreRegister />}
                {login && <FenetreLogin />}
            </div>
        </div>

    );
};

export default Log;