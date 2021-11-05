<template>
	<view>
		<view class="cl-content-background"></view>
		<view class="cl-content__inner">
			<text>Hi~</text><br>
			<text>欢迎登陆吃了吗外卖</text>
		</view>
		<view class="cl-login-box" v-if="currentPage == 1">
			<view class="cl-login">
				<text class="cl-login__title">登录</text>
				<view class="cl-login-form">
					<view style="display: flex;">
						<uniIcons type="email" size="23" class="uniIcons"></uniIcons>
						<input v-model="login_email" placeholder="请输入邮箱" />
					</view>
					<view style="display: flex;">
						<uniIcons type="locked" size="23" class="uniIcons"></uniIcons>
						<input v-model="login_password" placeholder="请输入密码" type="password" />
					</view>
				</view>
				<view class="cl-login_other">
					<text @click="currentPage = 2">注册</text>
					<text @click="currentPage = 3">忘记密码？</text>
				</view>
				<view class="cl-login-button__submit">
					<button @click="login">登录</button>
				</view>
			</view>
		</view>
		<view v-else-if="currentPage == 2" class="cl-login-box">
			<view class="cl-login">
				<text class="cl-login__title">注册</text>
				<view class="cl-login-form">
					<view style="display: flex;">
						<uniIcons type="email" size="23" class="uniIcons"></uniIcons>
						<input v-model="register_email" placeholder="请输入邮箱" />
					</view>
					<view style="display: flex;">
						<uniIcons type="paperplane" size="23" class="uniIcons"></uniIcons>
						<input v-model="register_code" placeholder="验证码" style="width: 25%;"/>
						<button class="cl-login-button__code">获取验证码</button>
					</view>
					<view style="display: flex;">
						<uniIcons type="locked" size="23" class="uniIcons"></uniIcons>
						<input v-model="register_password" placeholder="请输入密码" type="password" />
					</view>
					<view style="display: flex;">
						<uniIcons type="locked" size="23" class="uniIcons"></uniIcons>
						<input v-model="register_sure" placeholder="请再次输入密码" type="password" />
					</view>
				</view>
				<view class="cl-login_other">
					<text @click="currentPage = 1">登录</text>
					<text @click="currentPage = 3">忘记密码？</text>
				</view>
				<view class="cl-login-button__submit">
					<button @click="register">注册</button>
				</view>
			</view>
		</view>
		<view v-else="currentPage == 3" class="cl-login-box">
			<view class="cl-login">
				<text class="cl-login__title">忘记密码</text>
				<view class="cl-login-form">
					<view style="display: flex;">
						<uniIcons type="email" size="23" class="uniIcons"></uniIcons>
						<input v-model="forget_email" placeholder="请输入邮箱" />
					</view>
					<view style="display: flex;">
						<uniIcons type="paperplane" size="23" class="uniIcons"></uniIcons>
						<input v-model="forget_code" placeholder="验证码" style="width: 25%;"/>
						<button class="cl-login-button__code">获取验证码</button>
					</view>
					<view style="display: flex;">
						<uniIcons type="locked" size="23" class="uniIcons"></uniIcons>
						<input  v-model="forget_password" placeholder="请输入新密码" type="password" />
					</view>
					<view style="display: flex;">
						<uniIcons type="locked" size="23" class="uniIcons"></uniIcons>
						<input v-model="forget_sure" placeholder="请再次输入密码" type="password" />
					</view>
				</view>
				<view class="cl-login_other">
					<text @click="currentPage = 1">登录</text>
					<text @click="currentPage = 2">注册</text>
				</view>
				<view class="cl-login-button__submit">
					<button @click="submit">提交</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '../../uni_modules/uni-icons/components/uni-icons/uni-icons'
	
	
	export default {
		data() {
			return {
				currentPage: 1,	//当前
				login_email: '',
				login_password: '',
				register_email: '',
				register_password: '',
				register_sure: '',
				register_code: '',
				forget_email: '',
				forget_code: '',
				forget_password: '',
				forget_sure: ''
			}
		},
		components: {
			uniIcons
		},
		onLoad() {

		},
		methods: {
			/**
			 * 登录
			 */
			login() {
				
				//校验数据
				if(!this.login_email) {
					this.$toast('请输入邮箱')
					return ;
				} else if(!this.login_password) {
					this.$toast('请输入密码')
					return ;
				}
				console.log('登录')
				//向后端发送登录请求
				uni.reLaunch({
					url: '../home/home'
				})
			},
			/**
			 * 注册
			 */
			register() {
				if(!this.register_email) {
					this.$toast('请输入邮箱')
					return ;
				} else if(!this.register_code) {
					this.$toast('请输入验证码')
					return ;
				} else if(!this.register_password) {
					this.$toast('请输入密码')
					return ;
				} else if(!this.register_sure) {
					this.$toast('请再次输入密码')
					return ;
				}/* else if(){	//验证邮箱有效性
					
				} */
				//后端请求注册
			},
			/**
			 * 忘记密码
			 */
			submit() {
				if(!this.register_email) {
					this.$toast('请输入邮箱')
					return ;
				} else if(!this.register_code) {
					this.$toast('请输入验证码')
					return ;
				} else if(!this.register_password) {
					this.$toast('请输入密码')
					return ;
				} else if(!this.register_sure) {
					this.$toast('请再次输入密码')
					return ;
				}
				//向后端提交忘记密码信息
			}
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cl-content-background {
		background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
		width: 100%;
		height: 450rpx;
		position: absolute;
		top: 0;
	}
	
	.cl-content__inner {
		padding: 70rpx;
		color: #fff;
		font-size: 50rpx;
		font-weight: bold;
	}
	
	.cl-login-box {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	
	.cl-login {
		background-color: #fff;
		border-radius: 20rpx;
		width: 70%;
		padding: 40rpx;
		box-shadow: 0 5rpx 10rpx 0 rgb(32 33 36 / 10%);
		z-index: 10;
	}
	
	.cl-login__title {
		font-size: 40rpx;
		font-weight: bold;
	}
	
	.cl-login-form {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 40rpx;
		flex-wrap: wrap;
	}
	
	.cl-login-form input {
		border-bottom: 1px solid #cbcbcb;
		padding: 10rpx;
		width: 80%;
		margin-bottom: 50rpx;
	}
	
	.uniIcons {
		margin-right: 20rpx;
		color: #f7cd69!important;
		transform: translateY(10rpx);
	}
	
	.cl-login_other {
		display: flex;
		justify-content: space-between;
		color: #9e9e9e;
		margin-top: 25rpx;
	}
	
	.cl-login-button__submit {
		transform: translateY(80rpx);
	}
	
	.cl-login-button__submit button {
		border-radius: 50rpx;
		border: 1px solid transparent;
		background-color: #f6d365;
		/* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */
		color: #fff;
	}
	
	.cl-login-button__code {
		position: absolute;
		right: 200rpx;
	}
	
</style>
