<template>
	<view>
		<cl-header title="外卖评价"></cl-header>
		<view class="cl-evaluate">
			<view class="cl-rider-info">
				<image src="../../../static/logo.png"></image>
				<view>
					<text class="rider__name">小红专业骑手</text>
					<text class="rider__time">45分钟(12:28送达)</text>
				</view>
				<u-button plain size="medium" style="padding: 0 20rpx;float: right;">匿名</u-button>
			</view>
			<view class="rider-evaluate">
				<view class="rider-title">
					<text>配送评价</text>
				</view>
				<view class="rider-evaluate__chose">
					<text>不满意</text>
					<text>满意</text>
				</view>
				<view class="rider-evaluate__content">
					<u-tag text="衣着整洁" mode="plain" color="#fdc701" border-color="#fdc701"></u-tag>
					<u-tag text="穿着专业" mode="plain" color="#fdc701" border-color="#fdc701"></u-tag>
					<u-tag text="准时送达" type="info" mode="plain"></u-tag>
					<u-tag text="服务态度好" type="info" mode="plain"></u-tag>
					<u-tag text="餐品完好" type="info" mode="plain"></u-tag>
					<u-tag text="送餐快" type="info" mode="plain"></u-tag>
					<u-tag text=" + 文字描述" type="warning" mode="plain"></u-tag>
				</view>
			</view>
			<view class="shop-evaluate">
				<view class="shop__title">
					<text>店铺评价</text>
				</view>
				<view style="margin: 20rpx 0;">
					<u-rate :count="count" active-color="#fdc701" size="50"></u-rate>
				</view>
				<view class="shop-evaluate__other">
					<view>
						<text>口味(必填)</text>
						<u-rate :count="count" active-color="#fdc701" size="40"></u-rate>
					</view>
					<view>
						<text>包装(必填)</text>
						<u-rate :count="count" active-color="#fdc701" size="40"></u-rate>
					</view>
				</view>
				<view>
					<u-input type="textarea" :border="true" maxlength="200" height="160" style="margin: 30rpx 0;"></u-input>
					<u-upload :max-size="5 * 1024 * 1024" max-count="4" :auto-upload="false" ref="upload"></u-upload>
				</view>
				<view>
					<cl-cell-item title="小炒肉" :islink="true">
						<view slot="link">
							<text style="margin-right: 20rpx;"><u-icon name="thumb-up"></u-icon>赞</text>
							<text><u-icon name="thumb-down"></u-icon>踩</text>
						</view>
					</cl-cell-item>
				</view>
			</view>
		</view>
		<cl-button-bottom>提交</cl-button-bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 5, 	//店铺总评分星
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/sass/var";

	.cl-evaluate {
		padding: 30rpx;

		.cl-rider-info {
			margin-bottom: 30rpx;
			display: flex;
			align-items: center;

			view {
				flex: 3;
			}

			image {
				height: 100rpx;
				width: 100rpx;
				margin-right: 20rpx;
				float: left;
			}

			.rider__name {
				font-size: 37rpx;
				font-weight: bold;
				color: $--text-color-black;
			}

			.rider__time {
				color: $--text-color-grey;
				display: block;
				font-size: 30rpx;
			}
		}

		.rider-evaluate {
			background-color: $--color-white;
			border-radius: $--border-radius-middle;
			padding: 30rpx;
			display: flex;
			justify-content: center;
			flex-direction: column;

			.rider-title {
				font-size: $--font-size-large;
				text-align: center;
				margin: 30rpx 0;
			}

			.rider-evaluate__chose {
				display: flex;
				justify-content: space-around;
				margin: 40rpx 0;
			}

			.rider-evaluate__content {
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				
				.u-tag {
					margin-bottom: 20rpx;
				}
			}
		}
	}
	
	.shop-evaluate {
		background-color: $--color-white;
		border-radius: $--border-radius-middle;
		padding: 30rpx;
		margin: 30rpx 0;
		display: flex;
		justify-content: center;
		text-align: center;
		flex-direction: column;
		margin-bottom: 150rpx;
		
		.shop__title {
			font-size: $--font-size-large;
			text-align: center;
			margin: 30rpx 0;
		}
		
		.shop-evaluate__other {
			margin: 20rpx 0;
		}
	}
</style>
