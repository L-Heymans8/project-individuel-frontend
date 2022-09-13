import Home from "./pages/home/home"
import Musique from "./pages/musique/musique"
import Playlist from "./pages/playlist/playlist"
import About from "./pages/about/about"
import Parametres from "./pages/parametre/parametre"
import Favoris from "./pages/favoris/favoris"

export const routes = [
    {
        path: '',
        element: <Home />
    },
    {
        path: 'Home',
        element: <Home />
    },
    {
        path: 'Musique',
        element: <Musique />
    },
    {
        path: 'Playlist',
        element: <Playlist />
    }
    ,
    {
        path: 'Favoris',
        element: <Favoris />
    }
    ,
    {
        path: 'Parametres',
        element: <Parametres />
    }
    ,
    {
        path: 'A-propos',
        element: <About />
    }

]