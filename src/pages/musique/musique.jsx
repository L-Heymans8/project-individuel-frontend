
import Navbar from "../../components/navbar/navbar";
import LoginRegister from '../../components/login-register/login-register';
import PlaylistBar from "../../components/playlist-bar/playlist-bar";
import style from './musique.module.css'

const Musique = () => {
    return (
        <div>
            <h1 className={style.musiqueH1}>Musique</h1>
            <Navbar />

            <LoginRegister />
            <PlaylistBar />

        </div>
    );
};

export default Musique;