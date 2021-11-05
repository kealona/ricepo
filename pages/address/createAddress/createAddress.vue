<template>
	<view>
		<cl-header title="新建收货地址"></cl-header>
		<u-form :model="form" ref="form" class="cl-form" label-width="120">
			<u-form-item label="姓名">
				<u-input v-model="form.name" placeholder="请输入姓名"></u-input>
			</u-form-item>
			<u-form-item label="性别">
				<u-input v-model="form.sex" type="select" placeholder="请选择性别" @click="show = true"></u-input>
			</u-form-item>
			<u-form-item label="电话">
				<u-input v-model="form.phone" placeholder="请输入电话号码"></u-input>
			</u-form-item>
			<u-form-item label="地区">
				<u-input v-model="form.distict" placeholder="请选择地区"></u-input>
			</u-form-item>
			<u-form-item label="详细地址">
				<u-input v-model="form.address" placeholder="请输入详细地址"></u-input>
			</u-form-item>
		</u-form>
		<u-action-sheet :list="actionSexList" v-model="show" @click="selectSex"></u-action-sheet>
		<cl-button-bottom @click.native="submit">保存</cl-button-bottom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {},	//新收货地址的信息表单
				actionSexList: [{
					text: '男'
				}, {
					text: '女'
				}],		//选择性别
				show: false, 	//是否显示选择框
			};
		},
		methods: {
			/**
			 * 选择型别
			 * @param {Object} index 选中第几项
			 */
			selectSex(index) {
				this.form.sex = this.actionSexList[index].text
			},
			/**
			 * 提交新建收货地址表单
			 */
			submit() {
				
			}
		}
	}
</script>

<style lang="scss">
	.cl-form {
		padding: 0 20rpx !important;
	}
</style>
