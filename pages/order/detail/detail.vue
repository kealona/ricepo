<template>
	<view>
		<cl-header title="订单详情"></cl-header>

		<!-- 订单状态及操作 开始 -->
		<view class="cl-order-detail__option">
			<view class="detail__state">
				<u-icon name="checkbox-mark" style="flex:1;text-align: center"></u-icon>
				<view class="content-box">
					<text class="state">订单已完成</text>
					<text class="content">非常感谢！欢迎下次光临</text>
				</view>
			</view>
			<view class="detail__option">
				<u-button size="medium" plain shape="circle" style="width: 220rpx;padding: 0 20rpx;">
					<u-icon name="chat"></u-icon>马上评价
				</u-button>
				<u-button size="medium" plain shape="circle" style="width: 220rpx;padding: 0 20rpx;">
					<u-icon name="order"></u-icon>再来一单
				</u-button>
				<u-button size="medium" plain shape="circle" style="width: 220rpx;padding: 0 20rpx;">
					<u-icon name="phone"></u-icon>联系卖家
				</u-button>
			</view>
		</view>
		<!-- 订单状态及操作 结束 -->

		<!-- 订单配送信息 开始 -->
		<view class="cl-dilivery">
			<u-section title="配送信息" :right="false" line-color="#fdc701" font-size="38"></u-section>
			<view class="cl-dilivery-info">
				<cl-cell-group class="info-box">
					<cl-cell-item title="配送地址">
						<view slot="content" class="address-info">
							<text>谭杰 17369366870</text>
							<text>吉首大学张家界校区-南门 门口</text>
						</view>
					</cl-cell-item>
					<cl-cell-item title="外卖员">
						<text slot="content" class="item-content">小红</text>
					</cl-cell-item>
					<cl-cell-item title="送达时间">
						<text slot="content" class="item-content">12:00</text>
					</cl-cell-item>
				</cl-cell-group>
			</view>
		</view>
		<!-- 订单配送信息 结束 -->

		<!-- 订单信息 开始 -->
		<view class="cl-order-info">
			<u-section title="订单信息" :right="false" line-color="#fdc701" font-size="38"></u-section>
			<view class="cl-order-box">
				<view class="cl-order-item__shop">
					<text>正新鸡排.炸鸡.烧烤<u-icon name="arrow-right"></u-icon></text>
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
					<cl-cell-item title="优惠">
						<text slot="content" class="item-content">￥2</text>
					</cl-cell-item>
				</view>
				<view class="cl-content_total">
					<text>已优惠￥2 共计￥15.0</text>
				</view>
			</view>
		</view>
		<!-- 订单信息 结束 -->

		<u-button plain style="margin: 30rpx;">联系商家</u-button>

		<!-- 订单其他信息 开始 -->
		<view class="cl-order-otherInfo">
			<view>
				<cl-cell-item title="订单编号" content="820882088654649" :islink="true">
					<u-button slot="link" size="mini">复制</u-button>
				</cl-cell-item>
				<cl-cell-item title="订单时间" content="2021-10-12 10:30"></cl-cell-item>
			</view>
		</view>
		<!-- 订单其他信息 结束 -->
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

	.cl-order-detail__option {
		background-color: $--color-base;
		padding: 20rpx;
		margin-bottom: 30rpx;

		.detail__state {
			background-color: $--color-white;
			border-radius: 120rpx;
			height: 140rpx;
			padding: 35rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.content-box {
				flex: 5
			}

			.state,
			.content {
				display: block;
				color: $--text-color-base;
			}

			.state {
				font-size: $--font-size-large;
			}

			.content {
				font-size: $--font-size-middle;
			}


		}
	}

	.detail__option {
		display: flex;
		justify-content: space-around;
		margin-top: 30rpx;
	}

	.cl-dilivery-info {
		padding: 30rpx;
		border-radius: $--border-radius-middle;
		overflow: hidden;
		transform: translate(0, 0);

		.address-info {
			text {
				display: block;
				text-align: right;
				white-space: pre;
			}

			text:nth-child(1) {
				font-size: $--font-size-middle;
				margin-bottom: $--margin-small;
			}

			text:nth-child(2) {
				font-size: 35rpx;
			}
		}

		.info-box {
			border-radius: $--border-radius-middle;
			padding: 10rpx;
		}

	}

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

	.cl-order-otherInfo {
		padding: 30rpx;

		view {
			background-color: $--color-white;
			border-radius: $--border-radius-middle;
		}
	}
</style>
