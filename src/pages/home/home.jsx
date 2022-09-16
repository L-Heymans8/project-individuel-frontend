
import { useState } from 'react';
import Cercle from '../../components/cercle-musique/cercle';
import FenetreLogin from '../../components/fenetreLogin/fenetreLogin';
import FenetreRegister from '../../components/fenetreRegister/fenetreRegister';
import LoginRegister from '../../components/login-register/login-register';
import Login from '../../components/login-register/login-register';
import MusiqueBar from '../../components/musique-bar/musique-bar';
import Navbar from '../../components/navbar/navbar';
import style from './home.module.css'
import Log from '../../components/log/log';
const Home = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className={style.homeGlobal}>
      <Navbar />
      <LoginRegister />
      <Log onSelectedMenu={() => setMenuVisible(false)} />
      <Cercle />
      {/* <MusiqueBar /> */}

    </div>
  );
};

export default Home;