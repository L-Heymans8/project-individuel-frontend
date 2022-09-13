
import style from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <h1 className={style.navbar_h1}>AVG.443</h1>
            <ul className={style.navbar_ul}>
                <li className={style.navbar_li} id="musique">Musique</li>
                <li className={style.navbar_li} id="playlist">Playlist</li>
                <li className={style.navbar_li} id="favoris">Favoris</li>
                <li className={style.navbar_li} id="parametres">Parametres</li>
                <li className={style.navbar_li} id="a-propos">A propos</li>

            </ul>
        </div>
    );
};

export default Navbar;