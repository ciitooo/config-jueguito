<template>
		<section class="canvas__container" id="canvasContainer">
				<header>
					<h1>{{ 'Nivel ' + level }}</h1>
				</header>
				<p class="alert__lose">{{ alertLose }}</p>
				<CanvasComp></CanvasComp>
		</section>
</template>

<script>
import CanvasComp from './CanvasComp.vue';
import circle from './scripts/classes/Circle';
import Circle from './Elements/Circle.vue';


export default {
	name: 'GamePage',
	components: Circle,
	data(){
		return {
		level: '1',
		alertLose: 'Buen intento!',
		}
	},
	methods: {
		changeLevel(){
			if (circle.move == true) this.level++;
		},
		returnHome(){
			this.$router.push('/');
		},
	}
}
</script>

<style>
</style>