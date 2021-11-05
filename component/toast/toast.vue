<template>
	<transition name="cl-fade" @after-leave="handleMessageBox">
		<view v-if="visible" class="cl-content">
			<span>{{message}}</span>
		</view>
	</transition>
</template>

<script>
	export default {
		name: 'Toast',
		data() {
			return {
				visible: true,
				message: ''
			}
		},
		mounted() {
			this.startTimer()
		},
		methods: {
			/**
			 * 设置消息提示持续存在的时间
			 */
			startTimer() {
				setTimeout(() => {
					this.close()
				}, 1000 * 2)
			},
			/**
			 * 关闭消息提示
			 */
			close() {
				this.visible = !this.visible
			},
			/**
			 * 动画执行完毕，销毁组件
			 */
			handleMessageBox() {
				//避免重复渲染组件导致性能变差
				this.$destroy()
			}
		}
	}
</script>

<style scoped>
	.cl-content {
		padding: 15rpx 30rpx;
		bottom: 40rpx;
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		transition: opacity 0.3s, transform .4s, bottom 0.4s;
		overflow: hidden;
		display: flex;
		align-items: center;
		border: 1px solid #ececec;
		border-radius: 25rpx;
		font-size: 25rpx;
		box-shadow: 0 10rpx 20rpx 0 rgb(32 33 36 / 6%);
	}
	
	.cl-fade-leave-to {
		transform: translateY(-40rpx);
		opacity: 0;
	}
	
	.cl-fade-enter {
		opacity: 0;
		transform: translateY(-40rpx);
	}
	
	.cl-fade-enter-active,
	.cl-fade-leave-active {
		transition: all 1000ms, opacity 800ms cubic-bezier(0.23, 1, 0.32, 1)
	}
</style>
