<template>
	<view>
		<cl-header title="我的卡券"></cl-header>
		<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="true"
			swiperWidth="750" active-color="#ffc041" class="scroll-box" height="100" font-size="35" bar-width="100">
		</u-tabs-swiper>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish"
			style="padding: 20rpx;" class="swiper-item">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y class="swiper-item-view">
					<view class="cl-card">
						<view class="cl-card__left">
							<text class="cl-price">15</text>
							<text class="cl-coupon">折扣券</text>
						</view>
						<view class="cl-card__right">
							<view>
								<text>下午茶优惠券</text>
								<text>仅可购买下午茶类商品</text>
								<text>2021.10.10-2021-11.10</text>
							</view>
							<view>
								<u-button type="warning" shape="circle" size="mini">去使用</u-button>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y class="swiper-item-view">
					历史红包
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '可用红包(1)'
				}, {
					name: '历史红包(2)'
				}], //tab内容页面
				current: 0, //tab当前页码
				swiperCurrent: 0,
				tabs: [1, 2]
			}
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/sass/var";

	.swiper-item,
	.swiper-item-view {
		height: 85vh !important;
	}

	.cl-card {
		display: flex;
		/* background-color: $--color-white; */
		/* border-radius: $--border-radius-middle; */
		height: 200rpx;
		overflow: hidden;

		.cl-card__left {
			flex: 1;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			position: relative;
			background: radial-gradient(circle at right top, transparent 20rpx, #f2c435 0) top left / 230rpx 51% no-repeat,
				radial-gradient(circle at right bottom, transparent 20rpx, #f2c435 0) bottom left / 230rpx 51% no-repeat;

			.cl-price {
				color: $--text-color-white;
				font-size: 50rpx;
				display: block;

				&::before {
					content: '￥';
					font-size: $--font-size-small;
				}
			}

			.cl-coupon {
				color: $--text-color-white;
				font-size: $--font-size-middle;
			}

			/* &::after {
				content: '';
				position: absolute;
				height: 100%;
				width: 5rpx;
				top: 0;
				right: -5rpx;
				background-image: linear-gradient(to bottom, #eee 5rpx, transparent 5rpx, transparent),
					radial-gradient(10rpx circle at 5rpx 10rpx, transparent 5rpx, #eeeeee 5rpx);
				background-size: 5rpx 15rpx;
			} */
		}

		.cl-card__right {
			flex: 2;
			background-color: $--color-white;
			border-radius: $--border-radius-middle;
			display: flex;
			padding: 20rpx;
			align-items: center;
			
			view:nth-child(2) {
				flex: 1;
				text-align: right;
			}
			
			text {
				display: block;
			}
			
			text:first-child {
				font-size: $--font-size-large;
				color: $--text-color-black;
				margin-bottom: $--margin-small;
			}
			
			text:nth-child(2) {
				font-size: 27rpx;
				color: $--text-color-grey;
				margin-bottom: 30rpx;
			}
			
			text:nth-child(3) {
				font-size: 27rpx;
				color: $--text-color-grey;
			}
		}
	}
</style>
