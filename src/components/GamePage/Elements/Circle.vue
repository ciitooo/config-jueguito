<template>
	<div>
		<canvas id="canvas" :height="heightCanvas"></canvas>
	</div>
</template>

<script>
import canvasHeight from '../canvasHeight.js';
const heightCanvas = canvasHeight(85);
const heightRectangles = ((heightCanvas * 10) / 100);
const posRectStart = (heightCanvas - heightRectangles);
const posCircleStart = (posRectStart + 20)


export default {
	name: 'Circle',
	data(){
		return {
			heightCanvas: canvasHeight(75),
			x: '',
			y: '',
			move: true
		}
	},
	provide: {
		
	},
	methods: {
		drawCircle(){

		}
	}

}
</script>

<style>

</style>