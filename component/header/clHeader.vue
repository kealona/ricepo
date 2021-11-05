<template>
	<view class="cl-header">
		<uniIcons @click="back" type="arrowleft" size="22" class="cl-icons flex-wrap"></uniIcons>
		<text class="flex-wrap">{{title}}</text>
		<view class="flex-wrap"></view>
	</view>
</template>

<script>
	import uniIcons from '../../uni_modules/uni-icons/components/uni-icons/uni-icons'

	export default {
		name: 'ClHeader',
		props: {
			title: String
		},
		components: {
			uniIcons
		},
		methods: {
			/**
			 * 返回上一页
			 */
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/sass/var";

	.cl-header {
		background-color: $--background-color-header;
		padding: 40rpx 20rpx;
		color: $--text-color-white;
		display: flex;
		justify-content: center;
		font-size: 38rpx;
	}

	.cl-icons {
		color: $--color-white !important;
		text-align: left !important;
		display: flex;
		align-items: center;
	}
	
	.flex-wrap {
		flex: 1;
		text-align: center;
	}
</style>
