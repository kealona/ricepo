<template>
	<view class="cl-tag">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'clTag',
		props: {
			type: {
				type: String,
				default: 'danger'
			},	//标签类型
			size: {
				type: String,
				default: 'normal'
			}	//标签大小
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/sass/var";
	
	.cl-tag {
		display: inline-block;
		padding: $--tag-padding-base;
		margin-right: $--margin-small;
		border: 1px solid $--border-color-second;
		border-radius: $--border-radius-small;
		font-size: $--font-size-small;
		box-sizing: border-box;
	}
</style>
