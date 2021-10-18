// 引入封装后的$ajax请求方法
import $ajax from '../request/request.js'
//集中管理所有页面请求,导出所有方法
export const getData = (obj) => {
	//列表对应数据
	return $ajax(
		// 以下对象相当于参数obj
		{
			url: obj.url,
			method: 'get',
			// contentType:'application/x-www-form-urlencoded',
			// data: data 所携带参数
		}

	)
}
export const getList = () => {
	//列表标题数据
	return $ajax({
		url: 'listTitle.json',
		method: 'get',
	})
}
