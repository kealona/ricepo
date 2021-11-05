<template>
	<view>
		<view class="cl-header">
			<text></text>
			<text>购物车</text>
			<text @click="changeOption">{{option}}</text>
		</view>
		
		<view>
			
		</view>
		
		<!-- 购物车操作栏 开始 -->
		<view class="cl-option" v-if="show">
			<text>全选</text>
			<text>合计：<text class="cl-price">204</text></text>
			<view>
				<u-button type="warning">结算</u-button>
			</view>
		</view>
		<view class="cl-option_another" v-else>
			<view></view>
			<view>
				<u-button type="warning">移入收藏夹</u-button>
			</view>
			<view>
				<u-button type="error">删除</u-button>
			</view>
		</view>
		<!-- 购物车操作栏 结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,	//显示哪个购物车操作栏
				option: '管理',	//购物车操作栏名称
				
			}
		},
		methods: {
			/**
			 * 点击管理切换购物车操作栏
			 */
			changeOption() {
				this.show = !this.show
				if(this.show) {
					this.option = '管理'
				} else {
					this.option = '返回'
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/sass/var";
	
	.cl-header {
		padding: 40rpx;
		display: flex;
		justify-content: center;
		background-color: $--color-white;
		font-size: $--font-size-large;
		align-items: center;
		
		text {
			flex: 1;
		}
		
		text:nth-child(2) {
			text-align: center;
		}
		
		text:nth-child(3) {
			text-align: right;
			font-size: $--font-size-middle;
		}
	}
	
	.cl-option {
		display: flex;
		padding: 30rpx;
		align-items: center;
		background-color: $--color-white;
		position: fixed;
		bottom: 70rpx;
		width: 100%;
		font-size: $--font-size-middle;
		
		text:nth-child(1) {
			flex: 0.5;
		}
		
		text:nth-child(2) {
			flex: 3;
			text-align: right;
		}
		
		view {
			flex: 1;
			padding: 0 50rpx;
		}
	}
	
	.cl-option_another {
		display: flex;
		padding: 30rpx;
		align-items: center;
		background-color: $--color-white;
		position: fixed;
		bottom: 70rpx;
		width: 100%;
		font-size: $--font-size-middle;
		
		view:nth-child(1) {
			flex: 2;
		}
		
		view:nth-child(2) {
			flex: 3;
			margin: 0 20rpx;
		}
		
		view:nth-child(3) {
			flex: 2;
			margin-right: 50rpx;
		}
	}
	
	.cl-price {
		
		&::before {
			content: '￥';
			font-size: $--font-size-small;
		}
	}

</style>
