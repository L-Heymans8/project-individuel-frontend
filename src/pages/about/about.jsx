import Navbar from "../../components/navbar/navbar";
import MusiqueBar from "../../components/musique-bar/musique-bar";
import style from './about.module.css'
import LoginRegister from '../../components/login-register/login-register';


const About = () => {
    return (
        <div>
            <Navbar />
            {/* <MusiqueBar /> */}
            <h1 className={style.aboutH1}>A  propos</h1>

            <LoginRegister />
        </div>
    );
};

export default About;