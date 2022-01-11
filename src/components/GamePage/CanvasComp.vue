<template>
</template>

<script>
import canvasHeight from './scripts/canvasHeight';
// import circle from  './scripts/classes/Circle.js';
export default {
	name: 'CanvasComp',
	data(){
		return {
		heightCanvas: canvasHeight(75),
		}
	},

}
</script>

<style>
canvas {
	 background-color: rgb(51, 6, 255);
 }
</style>