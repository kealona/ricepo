<template>
	<view class="cl-search">
		<u-navbar height="70">
			<u-search slot="" :show-action="false"></u-search>
		</u-navbar>
		<view class="cl-nearby-shop">
			<view class="cl-nearby-shop__list">
				<view class="cl-nearshop-item">
					<image src="https://t15.baidu.com/it/u=4067396794,3745882589&fm=224&app=112&f=JPEG?w=500&h=500&s=3A106E86C51243CE301EE6690300107B"></image>
					<text class="cl-nearshop__title">茶颜悦色</text>
					<text class="cl-nearshop__sale">
						<text class="sale-number">月售 1500   赞 20</text>
					</text>
					<text class="cl-nearby-shop__cost">
						￥18
					</text>
					<text class="cl-nearshop__time">
						<u-button type="warning" size="mini" class="option-button"
							style="padding: 0 15rpx;">选规格</u-button>
					</text>
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
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/sass/var";
	
	.cl-search {
		padding: 30rpx;
	}
	
	.cl-nearshop-item {
		padding: 26rpx;
		background-color: $--color-white;
		border-radius: $--border-radius-middle;
		height: 155rpx;
		
		image {
			height: 150rpx;
			width: 150rpx;
			float: left;
			margin-right: $--margin-small;
		}
		
		.cl-nearshop__title {
			font-size: 37rpx;
			font-weight: bold;
			display: block;
		}
	
		.cl-nearshop__sale {
			display: block;
			font-size: $--font-size-small;
			color: $--text-color-black;
			margin: 10rpx 0;
		}
		
		.cl-nearshop__time {
			font-size: $--font-size-small;
			float: right;
			color: $--text-color-black;
		}
		
		.cl-nearby-shop__cost {
			font-size: $--font-size-middle;
			color: $--color-danger;
			white-space: pre;
		}
	}
</style>
