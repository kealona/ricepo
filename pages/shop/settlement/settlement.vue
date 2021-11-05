<template>
	<view>
		<cl-header title="结算"></cl-header>

		<!-- 订单信息 开始 -->
		<view class="cl-order-info">
			<view class="cl-order-box">
				<view class="cl-order-item__shop">
					<text>正新鸡排.炸鸡.烧烤</text>
				</view>
				<view class="cl-order-item__content">
					<image
						src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/b353ad63517acdeb7021ee3c66bd77f4_88_88.png">
					</image>
					<view class="content_name">
						<text>鸡排中份</text>
						<text>加辣;加孜然</text>
					</view>
					<view class="content_number">
						<text>15.5</text>
						<text>×1</text>
					</view>
				</view>
				<view>
					<cl-cell-item title="打包费">
						<text slot="content" class="item-content">￥2</text>
					</cl-cell-item>
					<cl-cell-item title="配送费">
						<text slot="content" class="item-content">￥2</text>
					</cl-cell-item>
				</view>
				<view class="cl-content_total">
					<text>共计￥15.0</text>
				</view>
			</view>
		</view>
		<!-- 订单信息 结束 -->

		<!-- 选择配送地址 开始 -->
		<view class="cl-delivery">
			<u-section title="配送地址" sub-title="添加" :show-line="false" font-size="40"></u-section>

				<swiper-view style="margin: 30rpx 0;white-space: nowrap;" scroll-x="true">
					<view class="address">
						<view class="address-item">
							<view class="content">
								<text>吉首大学张家界校区-南门 门口</text>
								<text>谭杰 17369396870</text>
							</view>
							<view class="option">
								<u-icon name="checkmark" color="#19be6b" style="display: block;"></u-icon>
								<u-icon name="edit-pen-fill" style="display: block;"></u-icon>
							</view>
						</view>
						<view class="address-item">
							<view class="content">
								<text>吉首大学张家界校区-南门 门口</text>
								<text>谭杰 17369396870</text>
							</view>
							<view class="option">
								<u-icon name="edit-pen-fill" style="display: block;"></u-icon>
							</view>
						</view>
					</view>
				</swiper-view>


		</view>
		<!-- 选择配送地址 结束 -->
		
		<!-- 其他信息 开始 -->
		<view class="cl-other-info">
			<u-cell-group>
				<u-cell-item title="备注"></u-cell-item>
				<u-cell-item title="餐具数量" @click="showSelectList = true" :value="tableware"></u-cell-item>
			</u-cell-group>
			<u-select v-model="showSelectList" :list="list" @confirm="confiemTableware"></u-select>
		</view>
		<!-- 其他信息 结束 -->
		
		<cl-button-bottom>去支付</cl-button-bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					value: 0,
					label: '无需餐具'
				}, {
					value: 1,
					label: '1份'
				}, {
					value: 2,
					label: '2份'
				}, {
					value: 3,
					label: '3份'
				}, {
					value: 4,
					label: '4份'
				}, {
					value: 5,
					label: '5份'
				}],		//餐具数量选择框
				showSelectList: false,	//是否先hi是餐具数量的选择框
				tableware: '无需餐具'
			}
		},
		methods: {
			/**
			 * 确认餐具数量
			 * @param {Object} e
			 */
			confiemTableware(e) {
				let tableware = e[0].label
				this.tableware = tableware
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/sass/var";

	.item-content {
		display: block;
		text-align: right !important;
	}

	.cl-order-box {
		background-color: $--color-white;
		border-radius: $--border-radius-middle;
		padding: 20rpx;
		margin: 30rpx;

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
	}

	.cl-delivery {
		padding: 30rpx;
	}

	.address-item {
		display: flex;
		background-color: $--color-white;
		width: 350rpx;
		padding: 30rpx;
		margin: 30rpx 30rpx 30rpx 0rpx;
		border-radius: $--border-radius-middle;

		.content {
			text {
				display: block;
				white-space: pre;
			}
		}
	}

	.address {
		display: flex;
	}
	
	.cl-other-info {
		padding: 30rpx;
		border-radius: $--border-radius-middle;
		overflow: hidden;
	}
</style>
