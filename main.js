import App from './App.vue'
import store from './store'
import Vue from 'vue'
import * as http from 'api/http.js'
//懒加载 有可能H5端对image标签不太友好，需要用条件编译来使用 img 标签
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
