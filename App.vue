<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/theme.scss";
	/*每个页面公共css */
	/* body {
		margin: 0;
		overflow-x: hidden;
		height: 100%;
		width: 100%;
	} */
	
	page {
		background-color: #f6f6f6;
	}
</style>
