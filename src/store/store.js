import Vue from "vue";
import Vuex from "vuex";
import { ctx } from '../components/GamePage/GamePage.vue';


Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
	  level: 1,
	},
	mutations: {
		mainDraw(){
			// arrayObstacles.forEach(d => {
			// 	d.draw()
			// 	if (circle.move == true) {
			// 		d.move(velObstacleLeft, velObstacleRight)
			// 	}
			// })
			// rectstart.draw()
			// rectend.draw()
			// circle.draw()

		},
	}
  })
 store.commit('mainDraw')