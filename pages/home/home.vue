<template>
	<view class="status-bar">
		<!-- 顶部导航栏 开始 -->
		<view class="rp-header">
			<view>
				<uniIcons type="bars" color="#fff" size="30" @click="showLeft = true"></uniIcons>
			</view>
			<view class="rp-header-select">
				<text @click="show = true">
					{{receiveContent}}
					<uniIcons type="arrowdown" color="#fff" size="23" style="margin-left: 10rpx;"></uniIcons>
				</text>
			</view>
			<view style="text-align: right;">
				<uniIcons type="map" color="#fff" size="20" style="margin-right: 20rpx;"></uniIcons>
				<uniIcons type="email-filled" color="#fff" size="20"></uniIcons>
			</view>
		</view>
		<!-- 顶部导航栏 结束 -->
		
		<!-- 选择Tab栏 开始 -->
		<view class="rp-tabs">
			<view class="rp-tabs-item" :class="currentTab == 1? 'active-tab' : ''" @click="changeTab(1)">
				<text>新任务</text>
			</view>
			<view class="rp-tabs-item" :class="currentTab == 2? 'active-tab' : ''" @click="changeTab(2)">
				<text>待取货</text>
			</view>
			<view class="rp-tabs-item" :class="currentTab == 3? 'active-tab' : ''" @click="changeTab(3)">
				<text>配送中</text>
			</view>
			<!-- 当前选中tab -->
			<view class="rp-scroll-bar" :style="'left: ' + left + 'rpx'"></view>
		</view>
		<!-- 选择Tab栏 结束 -->
		
		<!-- 选择接单设置 -->
		<u-action-sheet :list="receive" v-model="show" @click="selectReceive"></u-action-sheet>
		
		<!-- 左边操作栏 -->
		<u-popup mode="left" v-model="showLeft">
			<view class="rp-pop-box">
				<view class="rp-pop-user">
					<image src="https://p1.music.126.net/Z9W9hCQaeibiLQSfbV7OTQ==/109951166378377533.jpg?param=140y140"></image>
					<text>小红专业骑手</text>
					<uniIcons type="arrowright"></uniIcons>
				</view>
				<view class="rp-pop-account">
					<u-section title="我的账户" line-color="#ffb31a"></u-section>
					<view class="rp-pop-account-box">
						<view>
							<text class="rp-price">45</text>
							<text>今日预计收入</text>
						</view>
						<view>
							<text class="rp-order_number">20</text>
							<text>今日完成单量</text>
						</view>
					</view>
				</view>
				<view class="rp-pop-list">
					<view class="rp-pop-list-item">
						<text>历史任务</text>
						<uniIcons type="arrowright"></uniIcons>
					</view>
					<view class="rp-pop-list-item">
						<text>我的评价</text>
						<uniIcons type="arrowright"></uniIcons>
					</view>
					<view class="rp-pop-list-item">
						<text>违规中心</text>
						<uniIcons type="arrowright"></uniIcons>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import uniIcons from '../../node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons'
	import uniList from '../../node_modules/@dcloudio/uni-ui/lib/uni-list/uni-list'
	import uniListItem from '../../node_modules/@dcloudio/uni-ui/lib/uni-list-item/uni-list-item'
	
	export default {
		data() {
			return {
				receive: [{
					text: '自动接单'
				}, {
					text: '手动接单'
				}],	//接单设置选项
				show: false,	//是否现实接单设置选项
				receiveContent: '接单设置',	//接单模式
				showLeft: false,	//是否现实左边操作栏
				currentTab: 1,	//当前选中的tab栏
				left: 85,	//选中栏的line位置
			}
		},
		components: {
			uniIcons,
			uniList,
			uniListItem
		},
		methods: {
			/**
			 * 选择接单设置
			 * @param {Object} index 选择的内容index
			 */
			selectReceive(index) {
				this.receiveContent = this.receive[index].text
			},
			/**
			 * 选择任务的状态
			 * @param {Object} index 选中的tab位置
			 */
			changeTab(index) {
				this.currentTab = index
				const { windowWidth } = uni.getSystemInfoSync()
				if(index == 1) {
					this.left = 85
				} else if(index == 2) {
					this.left = 335
				} else {
					this.left = 585
				}
				console.log(this.left)
			}
		}
	}
</script>

<style scoped lang="scss">
	.rp-header {
		background-color: $--background-color-nav;
		padding: $--padding-middle;
		display: flex;
		font-size: $--font-size-large;
		color: $--color-white;
		align-items: center;
		height: 120rpx;
		
		.rp-header-select {
			flex: 1;
		}
		
		view {
			flex: 1;
		}
	}
	
	.rp-tabs {
		background-color: $--background-color-nav;
		display: flex;
		color: $--text-color-grey;
		text-align: center;
		padding: 15rpx 0;
		position: relative;
		
		.rp-tabs-item {
			flex: 1;
		}
		
		.rp-scroll-bar {
			position: absolute;
			bottom: 2rpx;
			background-color: $--color-white;
			width: 80rpx;
			height: 3rpx;
			transition: all .4s ease-in-out;
		}
		
		.active-tab {
			color: $--text-color-white;
		}
	}
	
	.rp-pop-box {
		background-color: #f3f3f3;
		padding: $--padding-large;
		height: 100%;
		width: 500rpx;
		
		.rp-pop-user {
			height: 100rpx;
			display: flex;
			align-items: center;
			
			image {
				height: 100rpx;
				width: 100rpx;
				border-radius: $--border-radius-circle;
				margin-right: $--margin-middle;
				float: left;
			}
			
			text {
				font-size: $--font-size-large;
			}
		}
		
		.rp-pop-account {
			background-color: $--color-white;
			border-radius: $--border-radius-middle;
			padding: $--padding-large;
			margin: $--margin-middle 0;
		}
		
		.rp-pop-account-box {
			display: flex;
			justify-content: center;
			text-align: center;
			
			text {
				display: block;
			}
			
			view {
				flex: 1;
				margin: $--margin-middle 0;
				
				text:nth-child(2) {
					font-size: 25rpx;
					color: $--text-color-grey;
				}
			}
			
			.rp-price {
				font-size: 50rpx;
				font-weight: bold;
				
				 &::after {
					content: '元';
					font-size: 25rpx;
				 }
			}
			
			.rp-order_number {
				font-size: 50rpx;
				font-weight: bold;
				
				 &::after {
					 content: '单';
					 font-size: 25rpx;
				 }
			}
		}
		
		.rp-pop-list {
			background-color: $--color-white;
			border-radius: $--border-radius-middle;
			
			.rp-pop-list-item {
				padding: $--padding-middle;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
</style>
