
import style from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <h1 className={style.navbar_h1}>AVG.443</h1>
            <ul className={style.navbar_ul}>
                <li className={style.navbar_li}>Musique</li>
                <li className={style.navbar_li}>Playlist</li>
                <li className={style.navbar_li}>Favoris</li>
                <li className={style.navbar_li}>Parametres</li>
                <li className={style.navbar_li}>A propos</li>


            </ul>
        </div>
    );
};

export default Navbar;