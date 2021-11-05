<template>
	<view>
		<view class="cl-header__title">
			<text>我的订单</text>
		</view>
		<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="true"
			swiperWidth="750" active-color="#ffc041" class="scroll-box" height="100" font-size="35" bar-width="100">
		</u-tabs-swiper>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish"
			style="padding: 20rpx;" class="swiper">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y class="swiper-item-view">
					<view>
						<view class="cl-order-item" @click="jumpDetail">
							<view class="cl-order-item__shop">
								<text>正新鸡排.炸鸡.烧烤<u-icon name="arrow-right"></u-icon></text>
								<text>交易成功</text>
							</view>
							<view class="cl-order-item__content">
								<image src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/b353ad63517acdeb7021ee3c66bd77f4_88_88.png"></image>
								<view class="content_name">
									<text>鸡排中份</text>
									<text>加辣;加孜然</text>
								</view>
								<view class="content_number">
									<text>15.5</text>
									<text>×1</text>
								</view>
							</view>
							<view class="cl-content_total">
								<text>共1件商品，实付￥15.0</text>
							</view>
							<view class="cl-content_operation">
								<u-button size="medium" :plain="true">再来一单</u-button>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y class="swiper-item-view">
					待评价
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y class="swiper-item-view">
					退款
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
					name: '全部订单'
				}, {
					name: '待评价'
				}, {
					name: '退款'
				}], //tab内容页面
				current: 0, //tab当前页码
				swiperCurrent: 0
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
			},
			jumpDetail() {
				uni.navigateTo({
					url: './detail/detail'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/sass/var";
	
	.cl-header__title {
		padding: 30rpx;
		display: flex;
		justify-content: center;
		font-size: $--font-size-large;
		background-color: $--color-white;
	}
	
	.swiper {
		
		padding: 20rpx;
		height: 77vh;
	}
	
	.cl-order-item {
		background-color: $--color-white;
		border-radius: $--border-radius-middle;
		padding: 20rpx;
		
		image {
			height: 150rpx;
			width: 150rpx;
			border-radius: $--border-radius-small;
			margin-right: 20rpx
		}
		
		.cl-order-item__shop {
			display: flex;
			justify-content: space-around;
			
			text:nth-child(1) {
				text-align: left;
				flex: 2;
				font-size: 37rpx;
			}
			
			text:nth-child(2) {
				text-align: right;
				flex: 1;
				font-size: 37rpx;
				color: $--text-color-grey;
			}
		}
		
		.cl-order-item__content {
			display: flex;
			justify-content: space-between;
			
			.content_name {
				flex: 3;
				text-align: left;
				color: $--text-color-black;
				
				text {
					display: block;
				}
				
				text:nth-child(1) {
					font-size: 38rpx;
					margin-bottom: 20rpx;
				}
				text:nth-child(2) {
					font-size: $--font-size-middle
				}
			}
			.content_number {
				text-align: right;
				font-size: $--font-size-middle;
				
				text {
					display: block;
					color: $--text-color-grey;
				}
				
				text:nth-child(1) {
					color: $--color-danger;
					
					&::before {
						content: '￥';
						font-size: $--font-size-small;
					}
				}
			}
		}
		
		.cl-content_total {
			text-align: right;
			color: $--text-color-black;
			margin: $--margin-small 0;
		}
		
		.cl-content_operation {
			text-align: right;
		}
	}
</style>
