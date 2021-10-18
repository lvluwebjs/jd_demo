import App from './App.vue'
import store from './store'
import Vue from 'vue'
import * as http from 'api/http.js'
//懒加载 有可能对image标签不太友好 需要处理兼容问题
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
	loading: require('./static/loading.png'),
	error: require('./static/error.png'),
	preLoad: 2
});
Vue.config.productionTip = false
Vue.prototype.$http = http
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
