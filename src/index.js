import Vue from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import VueRouter from "vue-router";
import { routes } from './routes.js';
import { store } from './store/store'
import VueKonva from 'vue-konva';



import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

//directiva creada para dimensionar dinamicamente el tamaño del canvas
Vue.directive('height', {
	inserted: function (el) {
	  el.height;
	  el.width;
	}
  })
Vue.use(VueKonva);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
const router = new VueRouter({
	routes
})
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
});