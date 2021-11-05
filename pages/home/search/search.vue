<template>
	<view class="cl-search_page">
		<u-search shape="round" bg-color="#fff" :show-action="false"></u-search>
		<view class="cl-nearby-shop">
			<view class="cl-nearby-shop__list">
				<view class="cl-nearshop-item">
					<image src="https://t15.baidu.com/it/u=4067396794,3745882589&fm=224&app=112&f=JPEG?w=500&h=500&s=3A106E86C51243CE301EE6690300107B"></image>
					<text class="cl-nearshop__title">正新鸡排.炸鸡.烧烤</text>
					<text class="cl-nearshop__sale">
						<u-icon name="star-fill" class="cl-star" size="27"></u-icon>
						4.7
						<text class="sale-number">月售 1000</text>
					</text>
					<text class="cl-nearby-shop__cost">
						起送￥18   配送费￥2
					</text>
					<text class="cl-nearshop__time">
						60分钟 2.1km
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

	.cl-search_page {
		padding: 20rpx;
	}
	
	.cl-nearby-shop {
		margin-top: 30rpx;
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
			transform: translateY(-120%);
			color: $--text-color-black;
		}
		.sale-number {
			margin-left: 20rpx;
		}
		
		.cl-nearby-shop__cost {
			font-size: $--font-size-small;
			color: $--text-color-black;
			white-space: pre;
		}
	}
	
	.cl-star {
		color: $--color-yellow;
		transform: translateY(-2rpx);
	}
</style>
