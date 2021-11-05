<template>
	<view>
		<view class="cl-header">
			<view class="cl-header__location">
				<view @click="getLocation">
					<uniIcons type="location" size="16" style="color: #fff;"></uniIcons>
					<text>吉首大学张家界校区</text>
					<uniIcons type="arrowdown" size="13" style="color: #fff;margin-left: 10rpx;"></uniIcons>
				</view>
				<view>
					<uniIcons type="more" size="20" style="color: #fff;"></uniIcons>
				</view>
			</view>
			<view class="cl-header__search">
				<u-search shape="round" bg-color="#fff" @search="search" :show-action="false"></u-search>
			</view>

		</view>
		<view class="cl-header__sort">
			<u-grid :col="4">
				<u-grid-item>
					<u-icon name="apple-fill" size="60"></u-icon>
					<view class="grid-text">一级分类1</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="apple-fill" size="60"></u-icon>
					<view class="grid-text">一级分类2</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="apple-fill" size="60"></u-icon>
					<view class="grid-text">一级分类3</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="apple-fill" size="60"></u-icon>
					<view class="grid-text">所有分类</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="apple-fill" size="60"></u-icon>
					<view class="grid-text">所有分类</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="apple-fill" size="60"></u-icon>
					<view class="grid-text">所有分类</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="apple-fill" size="60"></u-icon>
					<view class="grid-text">所有分类</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="apple-fill" size="60"></u-icon>
					<view class="grid-text">所有分类</view>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="cl-content__recommend">
			<view class="cl-content__title">
				<text>口碑店铺</text>
				<text class="cl-content__more">更多<u-icon name="arrow-right" size="30"></u-icon></text>
			</view>
			<view class="cl-content__recommend__list">
				<scroll-view scroll-x="true" style="white-space: nowrap">
					<view class="cl-content__recommend__inner">
						<view v-for="(item, index) in recommendList" @click="jumpShop">
							<image src="http://lorempixel.com/1600/900" class="cl-content__recommend__image"></image>
							<text>{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="cl-content__recommend-shop">
				<view class="cl-content__recommend__shopTitle">
					<view class="shop-header">
						<image src="http://www.szzoe.cn/ueditor/php/upload/image/20210108/1610095966684807.png"></image>
						<text>古茗（解放路形象店）</text>
						<text class="cl-score"><u-icon name="star-fill" class="cl-star" size="27"></u-icon>4.9</text>
					</view>
					<view class="cl-content-shop_tag">
						口碑店铺
					</view>
				</view>
				<view class="cl-shop-subtitle">
					一杯桃气，拯救乏味
				</view>
				<view class="cl-shop-goodList">
					<view class="cl-shop-goodList-item">
						<image src="http://www.tianjianroubing.com/uploads/allimg/210511/1-2105111A9190-L.jpg"></image>
						<text>椰乳芋泥芒芒</text>
						<text class="cl-shop-price">18.0</text>
					</view>
					<view class="cl-shop-goodList-item">
						<image src="http://www.tianjianroubing.com/uploads/allimg/210511/1-2105111A6160-L.jpg"></image>
						<text>杨枝甘露轻盈版</text>
						<text class="cl-shop-price">15.0</text>
					</view>
					<view class="cl-shop-goodList-item">
						<image src="http://www.tianjianroubing.com/uploads/allimg/210511/1-2105111A5230-L.jpg"></image>
						<text>冰咖牛油果</text>
						<text class="cl-shop-price">19.0</text>
					</view>
				</view>
			</view>
		</view>
		<view class="cl-nearby-shop">
			<view class="cl-content__title">
				<text>附近商家</text>
			</view>
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
	import uniIcons from '../../uni_modules/uni-icons/components/uni-icons/uni-icons'

	export default {
		data() {
			return {
				long: '',
				lat: '',
				recommendList: [{
					name: '瑞辛咖啡店',
					url: ''
				}, {
					name: '正新鸡排',
					url: ''
				}, {
					name: 'KFC肯德基炸鸡店',
					url: ''
				}, {
					name: '古茗奶茶店',
					url: ''
				}]
			};
		},
		components: {
			uniIcons
		},

		methods: {
			/**
			 * 获取用户定位
			 */
			getLocation() {
				uni.navigateTo({
					url: '../address/address',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			/**
			 * 获取口碑店铺
			 */
			getRecommendList() {

			},
			/**
			 * 搜索
			 */
			search() {
				console.log('点击搜索')
				uni.navigateTo({
					url: './search/search'
				})
			},
			/**
			 * 跳转到店铺界面
			 */
			jumpShop() {
				uni.navigateTo({
					url: '../shop/shop'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../static/sass/var";

	.cl-header {
		background-color: $--background-color-header;
		padding: $--padding-background;
		color: $--text-color-white;
	}

	.cl-header__location {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10rpx
	}

	.cl-header__search {
		padding: 20rpx 0;
	}

	.cl-content__recommend {
		padding: 20rpx;
	}

	.cl-content__title {
		font-size: $--font-size-large;
		margin-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
	}

	.cl-content__more {
		font-size: $--font-size-middle;
		color: $--text-color-black;
	}

	.cl-content__recommend__inner {
		width: 200%;
		display: flex;
		flex-wrap: nowrap;

		text {
			display: block;
			text-overflow: ellipsis;
			white-space: nowrap;
			word-break: break-all;
			overflow: hidden;
		}

		view {
			width: 240rpx;
			text-overflow: ellipsis;
			white-space: nowrap;
			word-break: break-all;
			overflow: hidden;
			display: flex;
			justify-content: center;
			text-align: center;
			flex-direction: column;
			align-items: center;
		}
	}

	.cl-content__recommend__image {
		width: 200rpx;
		height: 150rpx;
	}

	.cl-content__recommend-shop {
		border-radius: $--border-radius-large;
		overflow: hidden;
		margin-top: 30rpx;
	}

	.cl-content__recommend__shopTitle {
		background-image: url("https://www.gumingnc.com/_nuxt/img/about-product.6b71271.jpg");
		background-size: 800rpx 500rpx;
		background-position: 0 -120rpx;
		height: 150rpx;
		padding: 20rpx;

		.shop-header {
			transform: translateY(70rpx);
			color: $--color-white;
		}

		image {
			height: 120rpx;
			width: 120rpx;
			border-radius: $--border-radius-small;
			box-shadow: $--box-shadow-base;
			float: left;
			margin-right: $--margin-small;
		}
	}

	.cl-content-shop_tag {
		float: right;
		font-size: $--font-size-small;
		color: #ffe083;
		transform: translateY(-230%);
		padding: 5rpx 8rpx;
		background-color: #000;
		border-radius: $--border-radius-base;
	}

	.cl-shop-subtitle {
		font-size: $--font-size-large;
		font-weight: bold;
		padding: 20rpx 20rpx;
		background-color: $--color-white;
	}

	.cl-shop-goodList {
		display: flex;
		background-color: $--color-white;
		padding: 10rpx 20rpx;
	}

	.cl-shop-goodList-item {
		display: flex;
		flex-direction: column;
		width: 33%;
		margin-right: $--margin-small;

		text {
			text-overflow: ellipsis;
			white-space: nowrap;
			word-break: break-all;
			overflow: hidden;
			font-size: $--font-size-middle;
		}

		image {
			height: 200rpx;
			width: 200rpx;
			border-radius: $--border-radius-middle;
		}

		.cl-shop-price {
			color: $--color-danger;
			font-weight: 700;

			&::before {
				content: '￥';
				font-size: $--font-size-small;
			}
		}
	}
	
	.cl-nearby-shop {
		padding: 20rpx;
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
	
	.cl-score {
		display: block;
		font-size: $--font-size-small;
	}
</style>
