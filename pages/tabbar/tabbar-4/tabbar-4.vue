<template>
	<view class="content">
		<!-- 头部区域 -->
		<view class="head_bar">
			<!-- 头像区域 -->
			<view class="head_bar_user" @click="changePhoto()">
				<image v-show="!user.userPhoto" class="uesr_photo" src="../../../static/img/me/user.png" mode="">
				</image>
				<image v-show="user.userPhoto" class="uesr_photo" :src="user.userPhoto" mode=""></image>
			</view>
			<!-- 登录 -->
			<view v-show="!user.username" class="head_bar_login" @click="login()">
				<text>请点此登录</text>
			</view>
			<view class="head_bar_login" v-show="user.username">
				<text>用户名: {{user.username}}</text>
			</view>
			<!-- 退出登录 -->
			<view class="head_bar_login_out" @click="quit()">
				<text v-show="user.username">退出登录</text>
			</view>
		</view>
		<!-- 余额，积分，优惠券 -->
		<view class="user_money">
			<view class="money">
				<text>0</text>
				<text class="user_fz">余额</text>
			</view>
			<view class="point">
				<text>0</text>
				<text class="user_fz">积分</text>
			</view>
			<view class="ticket">
				<text>0</text>
				<text class="user_fz">优惠券</text>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="order_list">
			<view class="order-one">
				<view class="order-me">
					<text>我的订单</text>
				</view>
				<view class="order-more">
					<text>查看全部></text>
				</view>
			</view>
			<!-- 支付 发货 收货 评价 -->
			<view class="order-two">
				<view class="order-pay">
					<view class="">
						<image src="../../../static/img/me/pay.png" mode=""></image>
					</view>
					<view class="">
						待付款
					</view>
				</view>
				<view class="order-send">
					<view class="">
						<image src="../../../static/img/me/send.png" mode=""></image>
					</view>
					<view class="">
						待发货
					</view>
				</view>
				<view class="order-re">
					<view class="">
						<image src="../../../static/img/me/rec.png" mode=""></image>
					</view>
					<view class="">
						待收货
					</view>
				</view>
				<view class="order-talk">
					<view class="">
						<image src="../../../static/img/me/talk.png" mode=""></image>
					</view>
					<view class="">
						待评价
					</view>
				</view>
			</view>
		</view>
		<!-- 功能区 -->
		<view class="fun-area">
			<view class="area_item">
				<view class="">
					<image src="../../../static/img/me/money.png" mode=""></image>
					我的钱包
				</view>
			</view>
			<view class="area_item">
				<view class="">
					<image src="../../../static/img/me/ad.png" mode=""></image>
					地址管理
				</view>
			</view>
			<view class="area_item">
				<view class="">
					<image src="../../../static/img/me/sc.png" mode=""></image>
					我的收藏
				</view>
			</view>
			<view class="area_item">
				<view class="">
					<image src="../../../static/img/me/mes.png" mode=""></image>
					意见反馈
				</view>
			</view>
			<view class="area_item">
				<view class="">
					<image src="../../../static/img/me/sz.png" mode=""></image>
					设置
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			user() {
				var userInfos = this.$store.state.dataList
				return userInfos
			}
		},
		methods: {
			login() {
				uni.navigateTo({
					url: '../../login/login'
				})
			},
			quit() {
				this.$store.state.dataList = '';
				uni.navigateTo({
					url: '../../login/login'
				})
			},
			changePhoto() {

			}
		}
	}
</script>
<style>
	/* 单独设置page背景色 */
	page {
		background-color: #f7f7f7;
		overflow-y: hidden;
	}
</style>
<style scoped>
	.content {}

	.head_bar {
		position: relative;
		height: 300rpx;
		overflow: hidden;
		z-index: 10;
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
		background-color: #FE8C00;
	}



	.head_bar_user {
		position: absolute;
		width: 130rpx;
		height: 130rpx;
		border-radius: 50%;
		top: 12%;
		left: 5%;
		background-color: #fff;
	}

	.uesr_photo {
		width: 130rpx;
		height: 130rpx;
		border-radius: 50%;
	}

	.head_bar_login {
		position: absolute;
		left: 28%;
		top: 30%;
		color: #fff;
	}

	.user_money {
		margin: 0 20px;
		height: 150rpx;
		background-color: #fff;
		border-radius: 10px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.user_money .money {
		flex: 1;
		text-align: center;

	}

	.user_money .point {
		flex: 1;
		text-align: center;

	}

	.user_money .ticket {
		flex: 1;
		text-align: center;

	}

	.user_money text:first-child {
		display: block;
		color: black;
		font-size: 36rpx;
		font-weight: bold;
	}

	.user_fz {
		font-size: 24rpx;
		color: #999999;
	}

	.order_list {
		margin: 0 20px;
		margin-top: 20rpx;
		height: 180rpx;
		background-color: #fff;
		border-radius: 10px;
		padding: 20rpx 20rpx;
		box-sizing: border-box;
	}

	.order-one {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: #999999;
		font-size: 26rpx;
	}

	.order-me {
		color: #000000;
		font-size: 30rpx;
		font-weight: 600;
	}

	.order-two {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-top: 20rpx;
	}

	.order-two image {
		width: 48rpx;
		height: 48rpx;
	}

	.order-two view {
		flex: 1;
		font-size: 24rpx;
		color: #999999;
	}

	.fun-area {
		margin: 0 20px;
		background-color: #fff;
		border-radius: 10px;
		margin-top: 20rpx;
		padding: 20rpx 20rpx;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}

	.fun-area .area_item {
		height: 76rpx;
		border-bottom: 1px solid #e0e0e0;
		font-size: 26rpx;
		padding: 16rpx 0;
		box-sizing: border-box;

	}

	.area_item image {
		width: 43rpx;
		height: 43rpx;
		vertical-align: middle;
		margin-right: 20rpx;
	}

	.head_bar_login_out {
		position: absolute;
		right: 5px;
		top: 5px;
		color: #fff;
		font-size: 26rpx;
	}
</style>
