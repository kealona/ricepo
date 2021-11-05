<template>
	<view class="cl-cell-item" @touchstart="drawStart" 
	@touchmove="drawMove" @touched="drawEnd"
	:style="'right: '+ right +'rpx'">
		<view class="cl-cell-item__tile">
			<slot name="title">
				<text>{{title}}</text>
			</slot>
		</view>
		<view class="cl-cell-item__content">
			<slot name="content">
				<text>{{content}}</text>
			</slot>
		</view>
		<view class="cl-cell-item__link" v-if="islink">
			<slot name="link">
				<uniIcons type="arrowright" size="20" class="cl-cell-item__link"></uniIcons>
			</slot>
		</view>
		<!-- <view class="cl-cell-item-edit">
			<slot name="edit">
				<text>编辑</text>
			</slot>
		</view>
		<view class="cl-cell-item-remove">
			<slot name="remove">
				<text>删除</text>
			</slot>
		</view> -->
	</view>
</template>

<script>
	import uniIcons from '../../../uni_modules/uni-icons/components/uni-icons/uni-icons'
	
	export default {
		data() {
			return {
				right: 0,	//单元格滑动距离
				startX: 0
			}
		},
		components: {
			uniIcons
		},
		props: {
			title: String,
			content: String,
			islink: {
				type: Boolean,
				default: false
			}//是否链接
		},
		methods: {
			/**
			 * 开始触摸滑动
			 */
			drawStart(e) {
				let touch = e.touches[0]
				this.startX = touch.clientX
			},
			/**
			 * 触摸滑动
			 * @param {Object} e
			 */
			drawMove(e) {
				let touch = e.touches[0]
				const WIDTH = 260
				let distX = this.startX - touch.clientX
				if(distX >= 100) {
					if(distX > WIDTH) {
						distX = WIDTH
					}
					this.right = distX
				} else {
					this.right = 0
				}
			},
			drawEnd(e) {
				if(right >= 260 / 2) {
					this.right = 260
				} else {
					this.right = 0
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/sass/var";
	
	.cl-cell-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
		width: 100%;
		padding: 20rpx 30rpx;
		color: $--text-color-base;
		text-align: left;
		/* border-bottom: 1px solid $--border-color-bottom; */
		position: relative;
	}

	.cl-cell-item__tile {
		
	}
	
	.cl-cell-item__content {
		flex: 1;
		color: $--text-color-grey;
	}
	
	.cl-cell-item__link {
		color: $--text-color-grey !important;
	}
	
	.cl-cell-item-edit, .cl-cell-item-remove {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		height: 100%;
		color: $--text-color-white;
		width: 130rpx;
	}
	
	.cl-cell-item-edit {
		background-color: $--color-warning;
		right: -130rpx;
	}
	
	.cl-cell-item-remove {
		background-color: $--color-danger;
		right: -260rpx;
	}
</style>
