

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
  return (
    <div className={style.homeGlobal}>
      <Navbar />
      <LoginRegister />
      <Log />
      <Cercle />
      {/* <MusiqueBar /> */}

    </div>
  );
};

export default Home;