<template>
	<view class="cl-refund">
		<view class="cl-refund-box">
			<view class="cl-refund-head"></view>
			<view class="cl-refund-state">
				<text>商家拒绝退款</text>
				<text>餐已开始制作</text>
			</view>
			<u-divider :use-slot="false" half-width="100%"></u-divider>
			<cl-cell-item title="退款金额" :islink="true">
				<text slot="link" class="refund-number">222.5</text>
			</cl-cell-item>
			<u-divider :use-slot="false" half-width="100%"></u-divider>
			<view class="cl-refund-info">
				<text class="refund_title">退款信息</text>
				<view class="refund">
					<image src="https://img0.baidu.com/it/u=953568446,661039057&fm=26&fmt=auto"></image>
					<view class="refund-name">
						<text>牛肉拌饭外卖特价</text>
						<text>加香菜;小菜  ×8</text>
					</view>
					<text class="refund-number">200</text>
				</view>
			</view>
			<cl-cell-item title="退款原因" :islink="true">
				<text slot="link">出餐太慢</text>
			</cl-cell-item>
			<cl-cell-item title="订单号码" :islink="true">
				<text slot="link">24343028042968287</text>
			</cl-cell-item>
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
	
	.cl-refund {
		padding: 20rpx;
	}
	
	.cl-refund-box {
		background-color: $--color-white;
		padding: 30rpx;
		border-radius: $--border-radius-middle;
		overflow: hidden;
		
		.cl-refund-head {
			background-color: $--color-base;
			padding: 10rpx;
			margin: -30rpx;
		}
		
		.cl-refund-state {
			padding: 70rpx 30rpx 40rpx 25rpx;
			text {
				display: block;
			}
			
			text:nth-child(1) {
				font-size: 45rpx;
				font-weight: bold;
			}
			text:nth-child(2) {
				color: $--text-color-grey;
			}
		}
		
		.refund-number {
			 &::before {
				 content: '￥';
				 font-size: $--font-size-small;
			 }
		}
		
		.cl-refund-info {
			margin: 30rpx 0;
			
			.refund_title {
				font-size: $--font-size-large;
				font-weight: bold;
				display: block;
			}
			
			.refund {
				margin: 20rpx 0;
				display: flex;
				
				image {
					height: 150rpx;
					width: 150rpx;
					margin-right: 20rpx;
				}
				
				.refund-name {
					flex: 3;
					
					text {
						display: block;
					}
					
					text:nth-child(1) {
						font-size: 37rpx;
						margin-bottom: 20rpx;
					}
					
					text:nth-child(2) {
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>
