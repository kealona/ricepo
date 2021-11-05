<template>
	<view class="cl-button__bottom">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'ClButtonBottom'
	}
</script>

<style scoped lang="scss">
	@import "../../../static/sass/var";
	
	.cl-button__bottom {
		background-color: $--color-base;
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		padding: 40rpx 0;
		color: $--text-color-white;
		font-size: 35rpx;
	}
</style>
