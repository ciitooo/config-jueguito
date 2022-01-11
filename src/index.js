import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Vue from 'vue';
import VueRouter from "vue-router";
import {routes} from './routes';
import { store } from "./store/store";


import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

//directiva creada para dimensionar dinamicamente el tamaño del canvas
Vue.directive('height', {
	inserted: function (el) {
	  el.height;
	}
  })
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
const router = new VueRouter({
	routes
})
new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App),
});