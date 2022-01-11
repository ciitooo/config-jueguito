<template>
		<section class="canvas__container" id="canvasContainer">
				<header>
					<h1>{{ 'Nivel ' + level }}</h1>
				</header>
				<p class="alert__lose">{{ alertLose }}</p>
				<canvas :height="heightCanvas" id="canvas" :key="getcontextCanvas" ></canvas>
		</section>
</template>

<script>
import canvasHeight from './scripts/canvasHeight';
import circle from './scripts/Circle.js'
const canvas = document.getElementById('canvas');

export default {
	name: 'GamePage',
	data(){
		return {
		level: '1',
		alertLose: 'Buen intento!',
		heightCanvas: canvasHeight(85)
		}
	},
	computed: {
		getcontextCanvas(){
			if (canvas && canvas.getContext) {
				let ctx = canvas.getContext('2d')
				return ctx
			}
		},
		drawCircle(){
			ctx.fillStyle = '#FFF';
			ctx.arc(5, 5, 50,0, 2 * Math.PI);
			ctx.fill();
			ctx.stroke();
		}

	}
}

export let ctx
</script>

<style>
canvas {
	background-color: black;
}
</style>