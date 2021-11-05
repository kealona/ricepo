<template>
	<view style="background-color: #fff;height: 100vh;">
		<u-navbar title="店铺详情" title-size="40" height="70"></u-navbar>
		<view class="cl-shop-header">
			<image src="http://www.cyysncjm.com/skin/images/logo.png"></image>
			<text class="shop-title">茶颜悦色</text>
			<text>
				<u-icon name="star-fill" color="#fdc701"></u-icon>
				5.0
			</text>
			<text class="shop-dilivery">
				配送约30分钟
			</text>
			<view class="shop-collect">
				<u-button plain size="mini" style="display: block;">收藏</u-button>
				<text>1000人收藏</text>
			</view>
		</view>
		<u-cell-group>
			<u-cell-item icon="map" title="湖南省长沙市五一广场太平老街35号处" :arrow="false">
				<u-icon slot="right-icon" name="phone-fill"></u-icon>
			</u-cell-item>
			<u-cell-item title="营业时间" :arrow="false" value="10:00-22:00"></u-cell-item>
			<u-cell-item title="店铺公告" :arrow="false" value="欢迎光临~"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/sass/var";

	.cl-shop-header {
		padding: 30rpx;
		position: relative;

		image {
			height: 150rpx;
			width: 150rpx;
			float: left;
			margin-right: 20rpx;
			border-radius: $--border-radius-middle;
		}

		text {
			font-size: $--font-size-middle;
			color: $--text-color-black;
		}

		.shop-title {
			font-size: $--font-size-large;
			display: block;
			margin-bottom: $--margin-small;
		}

		.shop-dilivery {
			margin-left: $--margin-small;
			color: $--text-color-grey;
		}

		.shop-collect {
			position: absolute;
			top: 30rpx;
			right: 30rpx;
			text-align: center;

			text {
				font-size: $--font-size-small;
				color: $--text-color-grey;
			}

		}
	}
</style>
