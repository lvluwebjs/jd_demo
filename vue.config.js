// vue.config文件配置解决H5端的跨域问题
module.exports = {
	devServer: {
		proxy: {
			'': {
				target: 'http://127.0.0.1:8089',
				pathRewrite: {
					'^': ''
				}
			}
		},
	}
}
