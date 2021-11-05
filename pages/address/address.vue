<template>
	<view>
		<cl-header title="收货地址"></cl-header>
		<view>
			<cl-cell-group>
				<cl-cell-item :islink="true">
					<div slot="title">
						<view>
							<clTag>默认</clTag>
							<text>刘菲</text>
							<text class="cl-address__margin">女士</text>
							<text class="cl-address__margin">18944997995</text>
						</view>
						<text class="cl-address">吉首大学张家界校区-南门 门口</text>
					</div>
					<div slot="link">
						<uniIcons type="compose" size="21" class="cl-icons"></uniIcons>
					</div>
				</cl-cell-item>
				<cl-cell-item>
					<div slot="title">
						<view>
							<text>刘菲</text>
							<text class="cl-address__margin">女士</text>
							<text class="cl-address__margin">18944997995</text>
						</view>
						<text class="cl-address">吉首大学张家界校区-南门 门口</text>
					</div>
				</cl-cell-item>
			</cl-cell-group>

		</view>
		<cl-button-bottom @click.native="createAddress">新建地址</cl-button-bottom>
	</view>
</template>

<script>
	import clTag from '../../component/tag/tag.vue'
	import uniIcons from '../../uni_modules/uni-icons/components/uni-icons/uni-icons'

	export default {
		data() {
			return {

			};
		},
		components: {
			clTag,
			uniIcons
		},
		methods: {
			createAddress() {
				uni.navigateTo({
					url: './createAddress/createAddress'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../static/sass/var";

	.cl-address {
		color: $--text-color-black !important;
		font-size: 37rpx;
	}

	.cl-address__margin {
		margin-left: 20rpx;
	}
	
	.cl-icons {
		color: $--text-color-grey !important;
	}
</style>
