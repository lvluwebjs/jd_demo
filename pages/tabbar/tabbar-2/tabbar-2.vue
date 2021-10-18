<template>
	<view class="content">
		<view class="scroll-content">
			<scroll-view scroll-with-animation="true" :scroll-top="scrollTop" scroll-y="true" class="scroll-box">
				<view class="list-item" v-for="item in titleView" :key='item.id'
					:class="[current===item.id?'activeCurrnet':0]" :data-index="item.id" @click="changeCurrent($event)">
					{{item.title}}
				</view>
			</scroll-view>
		</view>

		<view class="content-left">
			<view class="content-shop" v-for="(item,index) in categoryList" :key="item.id">
				<!-- v-lazy有可能对image标签不太友好 需要处理兼容问题 -->
				<!-- #ifdef APP-PLUS -->
				<image :lazy-load="true" :src="item.imgUrl" :key="item.id"></image>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<img v-lazy="item.imgUrl" :key="item.id">
				<!-- #endif -->
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import list from '../../../static/dataJs/list.js';
	// console.log(list.listData)
	export default {
		data() {
			return {
				current: 0,
				scrollTop: 0,
				moveHeight: 0,
				titleView:[],
				categoryList: [],
				obj: {
					url: 'category.json'
				}
			}
		},
		onLoad() {
			uni.getSystemInfo({
					success: (res) => {
						//初始化计算视口高度与宽度
						this.moveHeight = res.windowHeight
						// console.log(this.moveHeight)
					}
				}),
				// 打开页面第一次渲染数据(热门推荐数据)，后面列表数据需要点击切换时候渲染
				this.getData();
				this.getList()
		},
		methods: {
			changeCurrent(e) {
				this.current = e.currentTarget.dataset.index;
				var num = parseInt(this.moveHeight / 46)
				//当e.currentTarget.dataset.index - (num-2) / 2为负数的时候列表不滚动，直到值为正数时候才开始滚动，横向列表也是一个道理
				if ((e.currentTarget.dataset.index - num / 2) === 1) {
					this.scrollTop = (e.currentTarget.dataset.index - num / 2) * this.moveHeight / num
					console.log(this.scrollTop)
				} else {
					this.scrollTop = (e.currentTarget.dataset.index - num / 2) * this.moveHeight / num
					// console.log(this.scrollTop)
				}
				// console.log(this.current)
				// 所有的列表数据都共用一个url：/static/dataJs/category{num}.json，只是携带的url的num参数不同
				//每次点击列表的时候改变请求的url,从而渲染每个列表相对应的数据
				this.obj = {
					url: `category${this.current + 1}.json`
				}
				this.getData(this.obj)
			},
			//数据请求
			async getData(obj) {
				//除第一次(热门推荐)，后面列表数据需要点击切换时候渲染
				this.obj = {
					url: `category${this.current + 1}.json`
				}
				const res = await this.$http.getData(this.obj)
				this.categoryList = res.data;
				// console.log(this.categoryList)
			},
			async getList() {
				const res = await this.$http.getList();
				this.titleView = res.data
			}
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: row;

	}

	.scroll-content {
		width: 172rpx;
	}

	.scroll-box {
		position: fixed;
		width: 172rpx;
		height: 100%;

	}

	.list-item {
		background-color: #f8f8f8;
		height: 92rpx;
		text-align: center;
		line-height: 92rpx;
		font-size: 28rpx;
		color: #333;


	}

	.activeCurrnet {
		border-left: 4px solid red;
		background-color: #fff;
		box-sizing: border-box;
		color: red;

	}

	.content-left {
		flex: 1;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.content-shop {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 33.3%;
		height: 214rpx;
	}

	.content-shop image {
		width: 140rpx;
		height: 140rpx;
		display: block;
	}

	.content-shop text {
		font-size: 24rpx;
		display: block;
	}
</style>
