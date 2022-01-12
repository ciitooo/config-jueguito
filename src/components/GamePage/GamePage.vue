<template>
		<section class="canvas__container" id="canvasContainer" :key="startGame">
				<header>
					<h1>{{ 'Nivel ' + level }}</h1>
				</header>
				<p class="alert__lose">{{ alertLose }}</p>
				<v-stage ref="stage" :config="configKonva">
				    <v-layer>
				      <v-circle
					  	ref="circle"
					  	@mousedown="handleDragStart"
						:config="configCircle">
					  </v-circle>
				    </v-layer>
				</v-stage>
		</section>
</template>

<script>
import canvasHeight from '../../scripts/canvasHeight';
const fps = 60
const heightCanvas = canvasHeight(85);
const heightRectangles = ((heightCanvas * 10) / 100);
const posRectStart = (heightCanvas - heightRectangles);
const posCircleStart = (posRectStart + 20)

export default {
	name: 'GamePage',
	data(){
		return {
			level: '1',
			alertLose: 'Buen intento!',
			configKonva: {
		        width: 300,
		        height: canvasHeight(85)
		    },
		    configCircle: {
		        x: 150,
		        y: posCircleStart,
		        radius: 20,
		        fill: "white",
		        stroke: "black",
		        strokeWidth: 2,
				draggable: true,
		    },
			isDragging: false,
		}
	},
	methods: {
		handleDragStart() {
	      	this.isDragging = true;
			  this.handleDragMove()
		},
		handleDragMove(){
				if (this.isDragging == true && this.configCircle.x > 20 && this.configCircle.x < 280 && this.configCircle.y > 20 && this.configCircle.y < (heightCanvas - 10) ){
					console.log('moviendo el circulo');
				}
				else this.handleDragEnd();
		},
    	handleDragEnd() {
      		this.isDragging = false;
			this.configCircle.x = 150;
			this.configCircle.y = posCircleStart;
    	}
	},
	computed: {
		startGame(){
			setInterval(() => {
				//redibujar canvas
				this.configKonva.width = 300;
				this.configKonva.height = canvasHeight(85);

				if (this.isDragging == false) {
					this.configCircle.x = 150;
					this.configCircle.y = posCircleStart;
				}
				//ejecutar mainDraw a 60fps
				this.$store.commit('mainDraw');
			}, 1000/fps);
		},
	}
}
</script>

<style>

section {
	margin: 10%;
}
.konvajs-content {
	background: transparent;
	border: 5px solid black;
	border-radius: 15px;
	margin-left: auto;
	margin-right: auto;
}
</style>