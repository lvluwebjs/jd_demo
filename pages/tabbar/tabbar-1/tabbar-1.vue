<template>
	<view class="content">
		<!-- 头部搜索框 -->
		<view class="head_bar">
			<view class="head_bar_left">
				<image src="../../../static/home/left.png" mode=""></image>
			</view>
			<view class="head_bar_search">
				<image class="search_jd" src="../../../static/home/jd.png" mode=""></image>
				<view class="search_line"></view>
				<image class="search_mi" src="../../../static/home/ati.png" mode=""></image>
				<!-- 	<view class="search_title"><text>电脑</text></view> -->
			</view>
			<view class="head_bar_right">
				<image src="../../../static/home/ai3.png" mode=""></image>
			</view>
		</view>
		<!-- 头部搜索框end -->
		<!-- swiper区域 -->
		<view class="head_swiper">
			<swiper class="swiper_box" @change="swChange" circular="true" indicator-dots="true"
				indicator-active-color="red" indicator-color="#fff" :autoplay="true" :interval="2500" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../../static/home/jd1.jpg" mode="widthFix"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../../static/home/jd2.jpg" mode="widthFix"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../../static/home/jd3.jpg" mode="widthFix"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../../static/home/jd4.jpg" mode="widthFix"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../../static/home/jd5.jpg" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- indicator自定义指示点样式 -->
			<!-- #ifdef H5 -->
			<!-- <view class="swiper-indicator-box">
				<view class="swiper-indicator" v-for="i in 5" :class="[current == i ? 'indicatorActive':'']" :key="i">
				</view>
			</view> -->
			<!-- #endif -->
		</view>
		<!-- swiper end -->
		<!-- 菜单切换选项卡 -->
		<view class="list_tab">
			<swiper indicator-active-color="red" indicator-color="#fff" indicator-dots="true">
				<swiper-item class="list_tab_right">
					<view>
						<image src="../../../static/home/one.png" mode=""></image>
						<text>京东超市</text>

					</view>
					<view>
						<image src="../../../static/home/two.png" mode=""></image>
						<text>数码电器</text>
					</view>
					<view>
						<image src="../../../static/home/tr.png" mode=""></image>
						<text>京东服饰</text>
					</view>
					<view>
						<image src="../../../static/home/fo.png" mode=""></image>
						<text>京东生鲜</text>
					</view>
					<view>
						<image src="../../../static/home/fi.png" mode=""></image>
						<text>京东到家</text>
					</view>
					<view>
						<image src="../../../static/home/si.png" mode=""></image>
						<text>充值缴费</text>
					</view>
					<view>
						<image src="../../../static/home/se.png" mode=""></image>
						<text>物流查询</text>
					</view>
					<view>
						<image src="../../../static/home/ei.png" mode=""></image>
						<text>领劵</text>
					</view>
					<view>
						<image src="../../../static/home/ni.png" mode=""></image>
						<text>领津贴</text>
					</view>
					<view>
						<image src="../../../static/home/te.png" mode=""></image>
						<text>Plus会员</text>
					</view>

				</swiper-item>
				<swiper-item>
					<view class="list_tab_left">
						<view>
							<image src="../../../static/home/one.png" mode=""></image>
							<text>京东超市</text>

						</view>
						<view>
							<image src="../../../static/home/two.png" mode=""></image>
							<text>数码电器</text>
						</view>
						<view>
							<image src="../../../static/home/tr.png" mode=""></image>
							<text>京东服饰</text>
						</view>
						<view>
							<image src="../../../static/home/fo.png" mode=""></image>
							<text>京东生鲜</text>
						</view>
						<view>
							<image src="../../../static/home/fi.png" mode=""></image>
							<text>京东到家</text>
						</view>
						<view>
							<image src="../../../static/home/si.png" mode=""></image>
							<text>充值缴费</text>
						</view>
						<view>
							<image src="../../../static/home/se.png" mode=""></image>
							<text>物流查询</text>
						</view>
						<view>
							<image src="../../../static/home/ei.png" mode=""></image>
							<text>领劵</text>
						</view>
						<view>
							<image src="../../../static/home/ni.png" mode=""></image>
							<text>领津贴</text>
						</view>
						<view>
							<image src="../../../static/home/te.png" mode=""></image>
							<text>Plus会员</text>
						</view>

					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 菜单切换选项卡结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1
			}
		},
		onLoad() {

		},
		methods: {
			swChange(e) {
				this.current++
				if (this.current === 6) {
					this.current = 1
				}
			}
		}
	}
</script>

<style scoped>
	.content {
		position: relative;
	}

	.head_bar {
		position: relative;
		display: flex;
		flex-direction: row;
		height: 300rpx;

	}

	.head_bar::after {
		content: '';
		width: 120%;
		height: 280rpx;
		position: absolute;
		left: -10%;
		top: 0;
		z-index: -1;
		border-radius: 0 0 50% 50%;
		background-image: linear-gradient(0deg, #f1503b, #c82519 50%)
	}

	.head_bar .head_bar_search {
		flex: 1;
	}

	.head_bar_left {
		width: 80rpx;
		height: 88rpx;
		padding: 20rpx 20rpx 0 20rpx;
		box-sizing: border-box;
	}

	.head_bar_left image {
		width: 45rpx;
		height: 40rpx;
	}

	.head_bar_search {
		margin: 16rpx 0 0 24rpx;
		box-sizing: border-box;
		background-color: #fff;
		height: 55rpx;
		border-radius: 15px;
	}

	.head_bar_search input {
		font-size: 24rpx;
		text-align: center;
		padding: 13px 0;
		box-sizing: border-box;
		position: absolute;
	}

	.search_jd {
		width: 40rpx;
		height: 30rpx;
		position: absolute;
		left: 17%;
		top: 9%;
	}

	.search_line {
		position: absolute;
		border: 1px solid #ddd;
		height: 15px;
		left: 24%;
		top: 9%;
	}

	.search_mi {
		width: 28rpx;
		height: 30rpx;
		position: absolute;
		left: 27%;
		top: 10%;
	}

	.search_title {
		position: absolute;
		left: 35%;
		top: 9%;
		font-size: 24rpx;
		color: #555555;
	}

	.head_bar_right {
		width: 80rpx;
		height: 88rpx;
		padding: 22rpx 20rpx 0 20rpx;
		box-sizing: border-box;

	}

	.head_bar_right image {
		width: 40rpx;
		height: 36rpx;
	}

	.head_swiper {
		margin: 0 24rpx;
		position: relative;
		margin-top: -28%;
		border-radius: 14px;
		overflow: hidden;
	}

	swiper {
		height: 340rpx;

	}


	.swiper-item image {
		width: 100%;
	}

	.swiper-indicator-box {
		position: relative;
		height: 10rpx;
		width: 100rpx;
		top: -15px;
		left: 50%;
		margin-left: -25px;
		display: flex;
	}

	.swiper-indicator {
		width: 10rpx;
		height: 10rpx;
		border-radius: 50%;
		background-color: #fff;
		margin-right: 10rpx;
	}

	.indicatorActive {
		background-color: red;
	}

	.list_tab {
		background-color: #f6f6f6;
		margin-top: 12rpx;
	}

	.list_tab_right {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 15rpx 0 25rpx 0;
		box-sizing: border-box;
	}

	.list_tab_right view {
		width: 20%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.list_tab_right view text {
		font-size: 24rpx;
		color: #808080;
	}

	.list_tab_right view>image {
		width: 88rpx;
		height: 88rpx;
	}

	.list_tab_left {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.list_tab_left view {
		width: 20%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 30rpx;
	}

	.list_tab_left view text {
		font-size: 24rpx;
		color: #808080;
	}

	.list_tab_left view>image {
		width: 88rpx;
		height: 88rpx;
	}
</style>
