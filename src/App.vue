<template>
	<div id="app">
	<ul>
		<router-link  @click="toHome"  exact to="/" tag="li">Inicio</router-link>
	  	<router-link class="buttonStart" @click="initGame"  to="/game-start" tag="li">Start Game</router-link>
	  	<router-link  to="/opciones" tag="li">Opciones</router-link>

	</ul>
		<router-view></router-view>
	</div>
</template>

<script>
import GamePage from './components/GamePage/GamePage';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Opciones from './components/Opciones';

export default {
  name: 'App',
  components: {
    GamePage, HomePage, NotFound, Opciones
  },
  data(){
    return {}
	},
	methods: {
		initGame(){
			this.$router.push('/game-start')
		},
		showTutorial(){
			this.$router.push('/tutorial')
		},
		toHome(){
			this.$router.push('/')
		},
	},
};
</script>

<style>
	body {
		background-color: brown;
	}
</style>