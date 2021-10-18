import Vue from 'vue'
import Vuex from 'vuex'
//引入vuex-persistedstate可以默认持久化保存state状态，防止页面刷新后数据丢失
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
export default new Vuex.Store({
	// plugins: [createPersistedState()],
	state: {
		dataList: {}
	},
	mutations: {
		//只有在mutations里面才能修改state的值
		TOKEN_LOGIN(state, payload) {
			state.dataList = payload,
			uni.setStorage({
			    key: 'user',
			    data: payload,
			    });
		}
	},

	actions: {
		//异步任务
		AJAX_LOGIN({
			commit
		}, payload) {
			commit('TOKEN_LOGIN', payload)
		},

	},
	modules: {}
});
