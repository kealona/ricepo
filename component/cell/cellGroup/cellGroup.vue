<template>
	<view class="cl-cell-group">
		<slot></slot>
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
	
	.cl-cell-group {
		background-color: $--color-white;
		flex-direction: row;
		-moz-box-orient: horizontal;
		-webkit-box-orient: horizontal;
		box-orient: horizontal;
		position: relative;
	}
</style>
