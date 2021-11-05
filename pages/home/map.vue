<template>
	<map :latitude="lat" :longitude="lot" :markers="markes"></map>
</template>

<script>
	export default {
		name: 'Map',
		data () {
			return {
				lat: '',	//纬度
				lot: '',	//经度
				markes: ''	//标记
			}
		},
		onShow() {
			uni.getLocation({
				type: 'wgs84',
				success: (res) => {
					console.log('当前位置经度=' + res.longitude)
					console.log('当前位置纬度=' + res.latitude)
					this.lot = res.longitude
					this.lat = res.latitude
				},
				fail: (err) => {
					console.log('获取位置失败')
					console.log(err)
					this.long = '获取失败'
				}
			})
		},
		methods: {
			/**
			 * 获取用户当前定位
			 */
			getLocation() {
				uni.getLocation({
					type: 'wgs84',
					success: (res) => {
						console.log('当前位置经度=' + res.longitude)
						console.log('当前位置纬度=' + res.latitude)
						this.long = res.longitude
						this.lat = res.latitude
					},
					fail: (err) => {
						console.log('获取位置失败')
						console.log(err)
						this.long = '获取失败'
					}
				})
			}
		}
	}
</script>

<style>
</style>
