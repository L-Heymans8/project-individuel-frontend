

import Cercle from '../../components/cercle-musique/cercle';
import LoginRegister from '../../components/login-register/login-register';
import Login from '../../components/login-register/login-register';
import MusiqueBar from '../../components/musique-bar/musique-bar';
import Navbar from '../../components/navbar/navbar';
// import style from './home.module.css';
import style from './home.module.css'

const Home = () => {
  return (
    <div className={style.homeGlobal}>
      <Navbar />
      <LoginRegister/>
      <Cercle />
      <MusiqueBar />

    </div>
  );
};

export default Home;