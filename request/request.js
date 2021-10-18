//基于promise再次封装uni.request请求
function $ajax(obj) {
	return new Promise((resolve, reject) => {
		const HOST = '/static/dataJs/' //所有接口请求的公共路径
		var method = obj.method || "GET"; //请求方法，get为默认值
		var url = HOST + obj.url || ""; //拼接请求地址与公共路径
		var data = obj.data || {}; //请求所需参数
		var header = obj.header || { //请求头信息
			'Content-Type': obj.contentType || 'application/json',
		};
		var success = obj.success; // 成功后需要执行的回调函数
		var fail = obj.fail; //失败后需要执行的回调函数
		// 发送请求前的loading效果
		uni.showLoading({
			title: '正在加载'
		})
		// 将uni.request再重新封装一次
		uni.request({
			url: url,
			data: data,
			method: method,
			header: header,
			success: ((res) => {
				if (res.statusCode === 403 || res.statusCode === 401) {
					// 错误处理，返回登录页
					uni.reLaunch({
						url: '/pages/login/login.vue'
					})
				} else if (res.statusCode === 200) {
					setTimeout(() => {
						//请求成功后隐藏loading
						uni.hideLoading()
						resolve(res)
					}, 300)

				}
			}),
			fail: ((err) => {
				uni.hideLoading()
				reject(err)
			})
		})
	})
}
//导出封装后的数据请求方法 $ajax
export default $ajax
