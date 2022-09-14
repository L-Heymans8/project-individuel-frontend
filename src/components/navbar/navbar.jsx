import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faList, faHeart, faGear, faBook } from '@fortawesome/free-solid-svg-icons';
import style from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <h1 className={style.navbar_h1}>AVG.443</h1>
            <ul className={style.navbar_ul}>
                
                <li className={style.navbar_li} id="musique"> 
                <FontAwesomeIcon icon={faMusic} className={style.iconNote} /> Musique</li>
                <li className={style.navbar_li} id="playlist">
                <FontAwesomeIcon icon={faList} className={style.iconList} /> Playlist</li>
                <li className={style.navbar_li} id="favoris"> 
                <FontAwesomeIcon icon={faHeart} className={style.iconHeart} /> Favoris</li>
                <li className={style.navbar_li} id="parametres"> 
                <FontAwesomeIcon icon={faGear} className={style.iconGear}  /> Parametres</li>
                <li className={style.navbar_li} id="a-propos">
                <FontAwesomeIcon icon={faBook} className={style.iconBook}  /> A propos</li>

            </ul>
        </div>
    );
};

export default Navbar;