import HomePage from './components/HomePage.vue';
import GamePage from './components/GamePage/GamePage.vue';
import Opciones from './components/Opciones.vue';
import NotFound from './components/NotFound.vue';

export const routes = [
	{path: '/', component: HomePage},
	{path: '/game-start', component: GamePage},
	{path: '/opciones', component: Opciones},
	{path: '/*', component: NotFound},
]