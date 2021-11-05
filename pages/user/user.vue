<template>
	<view class="cl-user-page">

		<view class="cl-userinfo-box">
			<u-avatar :src="headImg" size="large" class="user_avatar"></u-avatar>
			<view style="flex: 7">
				<text class="user_name">宰相肚里贼能装</text>
				<text class="user_phone">
					<u-icon name="phone" style="margin-right: 10rpx;"></u-icon>189******95
				</text>
			</view>
			<u-icon name="arrow-right" style="flex: 1"></u-icon>
		</view>

		<view class="cl-user-rights">
			<view @click="jumpToCard">
				<text class="cl-card">10</text>
				<text>我的卡券</text>
			</view>
			<view @click="jumpToCollect">
				<text class="cl-col">15</text>
				<text>我的收藏</text>
			</view>
			<view @click="jumpToOrder">
				<text class="cl-order">47</text>
				<text>我的订单</text>
			</view>
		</view>

		<view class="cl-user-list">
			<u-cell-group>
				<u-cell-item icon="home-fill" title="我的地址" @click="jumpToAddress"></u-cell-item>
				<u-cell-item icon="chat-fill" title="我的评价" @click="jumpToComment"></u-cell-item>
				<u-cell-item icon="tags-fill" title="我的足迹" @click="jumpToFootprint"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headImg: 'https://p1.music.126.net/Z9W9hCQaeibiLQSfbV7OTQ==/109951166378377533.jpg?param=140y140'
			}
		},
		methods: {
			/**
			 * 跳转到我的收货地址界面
			 */
			jumpToAddress() {
				uni.navigateTo({
					url: '../address/address'
				})
			},
			/**
			 * 跳转到我的评价界面
			 */
			jumpToComment() {
				uni.navigateTo({
					url: './comment/comment'
				})
			},
			/**
			 * 跳转到我的足迹界面
			 */
			jumpToFootprint() {
				uni.navigateTo({
					url: './footprint/footprint'
				})
			},
			/**
			 * 跳转到我的卡券界面
			 */
			jumpToCard() {
				uni.navigateTo({
					url: './card/card'
				})
			},
			/**
			 * 跳转到我的收藏界面
			 */
			jumpToCollect() {
				uni.navigateTo({
					url: './collect/collect'
				})
			},
			/**
			 * 跳转到我的订单界面
			 */
			jumpToOrder() {
				uni.navigateTo({
					url: '../order/order'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../static/sass/var";

	.cl-user-page {
		padding: 20rpx;
	}

	.cl-userinfo-box {
		background: -webkit-linear-gradient(to right, #f7971e, #ffd200);
		background: linear-gradient(to right, #f7971e, #ffd200);
		margin: -20rpx;
		padding: 60rpx;
		color: $--text-color-white;
		font-size: $--font-size-large;
		display: flex;

		.user_avatar {
			margin-right: 20rpx;
			border: 5rpx solid rgba(#fff, 0.5);
		}

		.user_name {
			display: block;
		}

		.user_phone {
			font-size: $--font-size-middle;
		}
	}

	.cl-user-rights {
		background-color: $--color-white;
		border-radius: $--border-radius-middle;
		display: flex;
		padding: 40rpx 30rpx;
		justify-content: space-around;
		box-shadow: $--box-shadow-base;
		transform: translateY(-20rpx);

		.cl-order,
		.cl-col,
		.cl-card {
			display: block;
			color: $--color-yellow;
			font-size: $--font-size-large;
			text-align: center;
		}

		.cl-order {
			&::after {
				content: '单';
				font-size: $--font-size-small;
			}
		}

		.cl-col {
			&::after {
				content: '个';
				font-size: $--font-size-small;
			}
		}

		.cl-card {
			&::after {
				content: '个';
				font-size: $--font-size-small;
			}
		}
	}
	
	.cl-user-list {
		margin: 40rpx -20rpx 0 -20rpx;
	}
</style>
