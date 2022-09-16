import React from 'react';
import style from './favorisItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const FavorisItem = () => {
    return (
        <div className={style.favorisGlobal}>

            <div className={style.favorisCard}>
                <h1>Artiste</h1>
                <h2>Morceau</h2>
                <button>
                    <FontAwesomeIcon icon={faPlay} className={style.favorisPlayIcon} />
                </button>
            </div>

            <div className={style.favorisCard}>
                <h1>Artiste</h1>
                <h2>Morceau</h2>
                <button>
                    <FontAwesomeIcon icon={faPlay} className={style.favorisPlayIcon} />
                </button>
            </div>
            <div className={style.favorisCard}>
                <h1>Artiste</h1>
                <h2>Morceau</h2>
                <button>
                    <FontAwesomeIcon icon={faPlay} className={style.favorisPlayIcon} />
                </button>
            </div>
            <div className={style.favorisCard}>
                <h1>Artiste</h1>
                <h2>Morceau</h2>
                <button>
                    <FontAwesomeIcon icon={faPlay} className={style.favorisPlayIcon} />
                </button>
            </div>
            <div className={style.favorisCard}>
                <h1>Artiste</h1>
                <h2>Morceau</h2>
                <button>
                    <FontAwesomeIcon icon={faPlay} className={style.favorisPlayIcon} />
                </button>
            </div>
            <div className={style.favorisCard}>
                <h1>Artiste</h1>
                <h2>Morceau</h2>
                <button>
                    <FontAwesomeIcon icon={faPlay} className={style.favorisPlayIcon} />
                </button>
            </div>
            <div className={style.favorisCard}>
                <h1>Artiste</h1>
                <h2>Morceau</h2>
                <button>
                    <FontAwesomeIcon icon={faPlay} className={style.favorisPlayIcon} />
                </button>
            </div>
            <div className={style.favorisCard}>
                <h1>Artiste</h1>
                <h2>Morceau</h2>
                <button>
                    <FontAwesomeIcon icon={faPlay} className={style.favorisPlayIcon} />
                </button>
            </div>
            <div className={style.favorisCard}>
                <h1>Artiste</h1>
                <h2>Morceau</h2>
                <button>
                    <FontAwesomeIcon icon={faPlay} className={style.favorisPlayIcon} />
                </button>
            </div>
            <div className={style.favorisCard}>
                <h1>Artiste</h1>
                <h2>Morceau</h2>
                <button>
                    <FontAwesomeIcon icon={faPlay} className={style.favorisPlayIcon} />
                </button>
            </div>

        </div>
    );
};

export default FavorisItem;