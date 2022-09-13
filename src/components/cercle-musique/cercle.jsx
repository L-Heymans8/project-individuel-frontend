import { Link } from 'react-router-dom';
import style from './cercle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faList, faHeart, faGear, faBook } from '@fortawesome/free-solid-svg-icons';





const Cercle = () => {

    //function pour faire changer de couleur mon text quand ma souris entre dans mon cercle
    function onEnterItem(elem) {
        const hoverItem = document.getElementById(elem);
        console.log(hoverItem)
        hoverItem.classList.add('liHover')

    }


    //function pour faire changer de couleur mon text quand ma souris sort de  mon cercle
    function onExitItem(elem) {
        const hoverItem = document.getElementById(elem);
        console.log(hoverItem)
        hoverItem.classList.remove('liHover')

    }



    return (

        <article className={style.cercleGlobal} >

            <Link to={'/Musique'}>
                <div className={style.cercle} onMouseEnter={() => onEnterItem("musique")} onMouseLeave={() => onExitItem("musique")}>
                    <FontAwesomeIcon icon={faMusic} className={style.iconNote} />
                    {/* <p>Musique</p> */}
                </div>
            </Link>

            <Link to={'/Playlist'}>
                <div className={style.cercle} >
                    <FontAwesomeIcon icon={faList} className={style.iconList} onMouseEnter={() => onEnterItem("playlist")} onMouseLeave={() => onExitItem("playlist")} />
                    {/* <p>Playlist</p> */}
                </div>
            </Link>
            <Link to={'/Favoris'}>
                <div className={style.cercle}>
                    <FontAwesomeIcon icon={faHeart} className={style.iconHeart} onMouseEnter={() => onEnterItem("favoris")} onMouseLeave={() => onExitItem("favoris")} />
                    {/* <p>Favoris</p> */}
                </div>
            </Link>
            <Link to={'/Parametres'}>
                <div className={style.cercle}>
                    <FontAwesomeIcon icon={faGear} className={style.iconGear} onMouseEnter={() => onEnterItem("parametres")} onMouseLeave={() => onExitItem("parametres")} />
                    {/* <p>Parametres</p> */}
                </div>
            </Link>
            <Link to={'/A-propos'}>
                <div className={style.cercle}>
                    <FontAwesomeIcon icon={faBook} className={style.iconBook} onMouseEnter={() => onEnterItem("a-propos")} onMouseLeave={() => onExitItem("a-propos")} />
                    {/* <p>A propos</p> */}
                </div>
            </Link>


        </article>

    );
};

export default Cercle;