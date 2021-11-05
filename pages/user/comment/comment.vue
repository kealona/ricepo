<template>
	<view>
		<cl-header title="我的评价"></cl-header>
		<view class="cl-comment-page">
			<view class="cl-comment-item">
				<image class="cl-comment-shopImg"
					src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/b353ad63517acdeb7021ee3c66bd77f4_88_88.png">
				</image>
				<view class="cl-comment__content">
					<text>正新鸡排.炸鸡.烧烤</text>
					<text>商家: ⭐⭐⭐⭐⭐  口味:5星 包装:5星</text>
					<text>骑手: 满意</text>
					<u-tag text="沆瀣一气" mode="light" type="info" size="mini"/>
				</view>
				<view class="cl-comment__time">
					2021.11.01
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

	.cl-comment-page {
		padding: 20rpx;
	}

	.cl-comment-item {
		padding: 20rpx;
		background-color: $--color-white;
		border-radius: $--border-radius-middle;
		display: flex;
		align-items: center;

		.cl-comment-shopImg {
			height: 100rpx;
			width: 100rpx;
			border-radius: $--border-radius-middle;
			margin-right: 20rpx;
		}
		
		.cl-comment__content {
			flex: 3;
			
			text {
				display: block;
				color: $--text-color-black;
			}
			
			text:nth-child(1) {
				font-size: 37rpx;
			}
			
			text:nth-child(2), text:nth-child(3) {
				font-size: $--font-size-small;
				white-space: pre;
			}
			
			text:nth-child(3) {
				display: inlin-block;
				margin-right: 20rpx;
			}
			
		}
		
		.cl-comment__time {
			font-size: $--font-size-small;
			color: $--text-color-grey;
		}
	}
</style>
