import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faList, faHeart, faGear, faBook } from '@fortawesome/free-solid-svg-icons';
import style from "./navbar.module.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className={style.navbar}>
            <Link to={'/Home'}>
                <h1 className={style.navbar_h1}>AVG.443</h1>
            </Link>
            <ul className={style.navbar_ul}>
                <Link to={'/Musique'}>
                    <li className={style.navbar_li} id="musique">
                        <FontAwesomeIcon icon={faMusic} className={style.iconNote} /> Musique</li>
                </Link>

                <Link to={'/Playlist'}>
                    <li className={style.navbar_li} id="playlist">
                        <FontAwesomeIcon icon={faList} className={style.iconList} /> Playlist</li>
                </Link>
                <Link to={'/Favoris'}>
                    <li className={style.navbar_li} id="favoris">
                        <FontAwesomeIcon icon={faHeart} className={style.iconHeart} /> Favoris</li>
                </Link>
                <Link to={'/Parametres'}>
                    <li className={style.navbar_li} id="parametres">
                        <FontAwesomeIcon icon={faGear} className={style.iconGear} /> Parametres</li>
                </Link>
                <Link to={'/A-propos'}>
                    <li className={style.navbar_li} id="a-propos">
                        <FontAwesomeIcon icon={faBook} className={style.iconBook} /> A propos</li>
                </Link>

            </ul>
        </div>
    );
};

export default Navbar;