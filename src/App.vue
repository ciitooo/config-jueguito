<template>
	<div>
	<ul>
		<router-link  @click="toHome"  exact to="/" tag="li">Inicio</router-link>
	  	<router-link class="buttonStart" @click="startGame"  to="/game-start" tag="li">Start Game</router-link>	
	  	<router-link  to="/opciones" tag="li">Opciones</router-link>

	</ul>
		<router-view></router-view>
	</div>
</template>

<script>
import HomePage from './components/HomePage';
import GamePage from './components/GamePage/GamePage.vue';
import Opciones from './components/Opciones.vue';
import NotFound from './components/NotFound.vue';

export default {
  name: 'App',

  components: {
    GamePage, HomePage, NotFound, Opciones
  },
  data(){
    return {}
	},
	methods: {
		startGame(){
			this.$router.push('/game-start')
		},
		showTutorial(){
			this.$router.push('/tutorial')
		},
		toHome(){
			this.$router.push('/')
		},
	}
};
</script>
