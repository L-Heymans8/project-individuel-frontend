
import Navbar from "../../components/navbar/navbar";
import LoginRegister from '../../components/login-register/login-register';
import PlaylistBar from "../../components/playlist-bar/playlist-bar";
import style from './musique.module.css'
import MusicPLayer from "../../components/musique-player/music-player";

const Musique = () => {
    return (
        <div>
            <h1 className={style.musiqueH1}>Musique</h1>
            <Navbar />
            <MusicPLayer />
            <LoginRegister />
            <PlaylistBar />

        </div>
    );
};

export default Musique;