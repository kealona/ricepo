<template>
	<view>
		<!-- 店铺海报背景图 开始 -->
		<view class="cl-shop-background">
			<image src="http://www.cyysncjm.com/skin/images/inban.jpg"></image>
			<view class="cl-header">
				<u-icon name="arrow-left" size="37" style="margin-right: 20rpx"></u-icon>
				<u-search :show-action="false"></u-search>
			</view>
		</view>
		<!-- 店铺海报背景图 结束 -->

		<!-- 店铺信息 开始 -->
		<view>
			<view class="cl-shop-info">
				<view class="cl-shop-info__header" @click="jumpShopDetail">
					<image src="http://www.cyysncjm.com/skin/images/logo.png"></image>
					<text class="shop-title">
						茶颜悦色（五一广场店）
					</text>
					<text class="shop-star">
						<u-icon name="star-fill" color="#fdc701"></u-icon>5.0
					</text>
					<text style="font-size: 25rpx;">月售 3500 配送约40分钟</text>
					<u-button plain size="mini" class="shop-collect">收藏</u-button>
				</view>
				<view class="cl-shop-info__label">
					<text>店铺公告：茶颜悦色以茶饮和甜品为主打，根据港粤台的饮品创意奶茶店</text>
				</view>
			</view>
		</view>
		<!-- 店铺信息 结束 -->

		<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="true"
			swiperWidth="750" active-color="#ffc041" class="scroll-box" height="100" font-size="35" bar-width="100">
		</u-tabs-swiper>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish"
			class="swiper-item">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y class="swiper-item-view">
					<!-- 店铺商品信息 开始 -->
					<view class="cl-shop-content">
						<view class="cl-shop-product">
							<!-- 左侧一级分类 开始 -->
							<view class="cl-shop-product__left">
								<swiper-item scroll-y class="shop-sort">
									<view class="sort-item" v-for="(item, index) in sortList" :key="index">
										<view :class="currentIndex === index? 'avtive-sort' : ''"
											@click="selectClassTap(index)">
											<text>{{item.sortName}}</text>
										</view>
									</view>
								</swiper-item>
							</view>
							<!-- 左侧一级分类 结束 -->
							<view class="cl-shop-product__right">
								<!-- 右侧商品列表 开始 -->
								<view>
									<scroll-view class="shop-list" scroll-with-animation scroll-y
										:scroll-top="scrollTop" @scroll="rightScroll" style="height: 100%;">
										<view class="product-list">
											<view class="sort-name">
												<text>🔥热销</text>
											</view>
											<view class="product-item" @click="openProContent">
												<view class="product-info">
													<view class="product-image">
														<image
															src="http://www.024yyt.com/uploads/allimg/200918/1-20091QH426413.jpg">
														</image>
														<u-tag type="error" class="isRecommend" size="mini" text="精选"
															mode="dark"></u-tag>
													</view>
													<view class="product-content">
														<text>幽兰拿铁</text>
														<text>月售3500 赞20</text>
														<text>
															￥17
															<u-tag type="error" text="9.6折" size="mini"
																style="margin-left: 10rpx"></u-tag>
														</text>
													</view>
													<view class="product-option">
														<u-button type="warning" size="mini" class="option-button"
															style="padding: 0 15rpx;">选规格</u-button>
													</view>
												</view>
											</view>
										</view>
									</scroll-view>

								</view>
								<!-- 右侧商品列表 结束 -->


							</view>

						</view>

					</view>
					<!-- 店铺商品信息 结束 -->
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item" style="height: 100%;">
				<scroll-view scroll-y class="swiper-item-view" style="height: 100%;">
					<view class="cl-shop-evaluate">
						<view class="cl-shop-evaluate__left">
							<text>5.0</text>
							<tetx>店铺评分</tetx>
						</view>
						<view class="cl-shop-evaluate__right">
							<view>
								<text>口味</text>
								<u-rate style="margin: 0 15rpx" current="5" active-color="#fdc701"></u-rate>
								<text>5.0</text>
							</view>
							<view>
								<text>包装</text>
								<u-rate style="margin: 0 15rpx" current="5" active-color="#fdc701"></u-rate>
								<text>5.0</text>
							</view>
						</view>
					</view>

					<view class="cl-evaluate-tags">
						<u-tag class="cl-tags" type="warning" plain text="全部评论(100)"></u-tag>
						<u-tag class="cl-tags" type="warning" plain text="好评(90)"></u-tag>
						<u-tag class="cl-tags" type="warning" plain text="有图评论(45)"></u-tag>
						<u-tag class="cl-tags" type="warning" plain text="差评(5)"></u-tag>
						<u-tag class="cl-tags" type="warning" plain text="推荐(77)"></u-tag>
					</view>

					<view class="cl-evaluate-content">
						<view class="cl-evaluate-item">
							<view class="evaluate-header">
								<image src="../../static/logo.png"></image>
								<text>宰相肚里贼能装</text>
								<text>
									<u-rate current="5" active-color="#fdc701" style="margin-right: 20rpx;"></u-rate>
									30分钟送达
								</text>
								<text class="cl-time">2021.10.25</text>
							</view>
							<view class="evaluate-content">
								<u-read-more ref="uReadMore">
									<u-parse :html="content" @load="parseLoaded"></u-parse>
								</u-read-more>
								<view class="evaluate-image">
									<iamge src="http://www.cyysncjm.com/uploads/allimg/200115/1-2001151340340-L.jpg">
									</iamge>
									<image src="http://www.cyysncjm.com/uploads/allimg/200115/1-200115133T50-L.jpg">
									</image>
									<image src="http://www.cyysncjm.com/uploads/allimg/200115/1-200115133Q10-L.jpg">
									</image>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>

		<u-modal v-model="showProduct" :content="content" :show-title="false" :show-confirm-button="false"
			:mask-close-able="true">
			<view slot="default" class="product-detail-box">
				<text class="product-title">
					幽兰拿铁
				</text>
				<view>
					<swiper-item scroll-y style="height: 100%;">
						<swiper-view style="height: 100%;">
							<image class="product-detail-image"
								src="http://www.024yyt.com/uploads/allimg/200918/1-20091QH426413.jpg"></image>
							<text class="product-detail-sale">月售3500 赞20</text>
							<text class="product-detail-desc">幽兰拿铁
								红茶倒入杯中,再加雀巢牛奶,然后将安佳淡奶油打发成奶油泡沫,有三个层次,一层茶一层奶一层奶油,层层分明,将碧根果碾碎,洒上最上面,拌匀趁热喝,奶香浓郁</text>
						</swiper-view>
					</swiper-item>
				</view>

				<view class="confirm-box">
					<!-- <button>选择规格</button> -->
					<!-- <u-button type="warning" size="mini" class="option-button" style="padding: 0 15rpx;">选规格</u-button> -->
				</view>
			</view>
		</u-modal>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				sortList: [{
					sortName: '🔥热销'
				}, {
					sortName: '招牌系列'
				}, {
					sortName: '奶味'
				}, {
					sortName: '茶味'
				}], //左侧分类栏的数据
				currentIndex: 0, //当前选中的侧边栏分类位置 
				list: [{
					name: '点菜'
				}, {
					name: '评价'
				}], //tab内容页面
				current: 0, //tab当前页码
				swiperCurrent: 0,
				tabs: [1, 2],
				content: '茶颜悦色老品牌，真的很好喝！',
				showProduct: false, //是否显示商品详情模态框

			}
		},
		methods: {
			/**
			 * 左侧一级分类列表点击事件
			 * @param {Object} index 点击位置
			 */
			selectClassTap(index) {
				this.currentIndex = index
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			scrollTop() {

			},
			/**
			 * 打开商品详情模态框
			 */
			openProContent() {
				this.showProduct = true
			},
			/**
			 * 跳转到商品详情界面
			 */
			jumpShopDetail() {
				uni.navigateTo({
					url: './detail/detail'
				})
			}
		},
		watch: {
			currentIndex(newValue, oldValue) {
				let query = uni.createSelectorQuery()
				query.select('.sort-item').fields({
					size: true,
					scrollOffset: true
				}, res => {

				}).exec()
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/sass/var";

	.cl-header {
		display: flex;
		padding: 30rpx;
	}

	.cl-shop-background {
		width: 100%;
		/* background-image: url("http://www.cyysncjm.com/skin/images/inban.jpg"); */
		height: 200rpx;
		/* background-size: cover;
		background-position: center;
		background-repeat: no-repeat; */
		z-index: -1;

		image {
			width: 100%;
			height: 300rpx;
			position: absolute;
			top: 0;
		}
	}

	.cl-shop-info {
		background-color: $--color-white;
		border-radius: $--border-radius-middle;
		margin-left: 30rpx;
		margin-right: 30rpx;
		padding: 30rpx;
		transform: translateY(-50rpx);
		height: 220rpx;

	}

	.cl-shop-info__header {
		height: 160rpx;

		image {
			height: 150rpx;
			width: 150rpx;
			float: left;
			border-radius: $--border-radius-middle;
		}

		.shop-title {
			font-size: 36rpx;
			display: block;
			margin-bottom: 20rpx;
			color: $--text-color-black;
		}

		.shop-star {
			margin-right: $--margin-small;
			color: $--text-color-black;
			font-size: $--font-size-small;
		}

		.shop-collect {
			float: right;
			transform: translateY(-60rpx);
		}


	}

	.cl-shop-info__label {
		width: 100%;
		font-size: $--font-size-small;
	}

	.cl-shop-product {
		display: flex;

		.cl-shop-product__left {
			flex: 1;
		}

		.cl-shop-product__right {
			flex: 3
		}
	}

	.shop-sort {
		position: static !important;
		background-color: $--color-white;
	}

	.sort-item {
		text-align: center;
		padding: 18rpx 0;
		border-left: 10rpx solid #fff;
		box-sizing: border-box;
	}

	.avtive-sort {
		color: $--color-base;
		border-left: 10rpx solid $--color-base;
	}

	.cl-shop-evaluate {
		display: flex;
		padding: 40rpx;
		color: $--text-color-black;

		.cl-shop-evaluate__left {
			flex: 1;
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			align-items: center;
		}

		.cl-shop-evaluate__right {
			flex: 2;
		}
	}

	.swiper-item {
		background-color: $--color-white;
		height: 55vh;
	}

	.cl-evaluate-tags {
		padding: 20rpx;
		/* display: flex;
		justify-content: space-around;
		flex-wrap: wrap; */

		.cl-tags {
			margin-right: $--margin-small;
			margin-bottom: $--margin-small;
		}
	}

	.cl-evaluate-item {
		padding: 30rpx;
		border-bottom: 1px solid $--border-color-bottom;

		.evaluate-header {
			position: relative;
			height: 100rpx;

			image {
				float: left;
				height: 100rpx;
				width: 100rpx;
				margin-right: 20rpx;
			}

			text {
				display: block;
				width: auto;
				color: $--text-color-black;
			}

			text:nth-child(3) {
				color: $--text-color-grey;
				font-size: $--font-size-small;
				margin-top: $--margin-small;
			}

			.cl-time {
				position: absolute;
				right: 0rpx;
				top: 0;
				color: $--text-color-grey;
				font-size: 28rpx;
			}
		}
	}

	.evaluate-image {
		image {
			height: 200rpx;
			width: 200rpx;
			margin-right: 20rpx;
		}

	}

	.product-info {
		display: flex;

		image {
			height: 150rpx;
			width: 150rpx;
		}

		.product-image {
			position: relative;
			margin-right: 20rpx;

			.isRecommend {
				position: absolute;
				top: 0;
				left: 0;
			}
		}

		.product-content {
			flex: 3;

			text {
				display: block;
				color: $--text-color-black;
			}

			text:nth-child(1) {
				font-size: $--font-size-large;
			}

			text:nth-child(2) {
				font-size: $--font-size-small;
			}

			text:nth-child(3) {
				font-size: $--font-size-large;
				color: $--color-danger;
			}
		}
	}

	.sort-name {
		margin: 20rpx 0;
		font-size: $--font-size-large;
		color: $--text-color-black;
	}

	.product-option {
		flex: 1;
		position: relative;

		.option-button {
			position: absolute;
			right: 0;
			bottom: 0;
			transform: translateX(-20rpx);
		}
	}

	.product-detail-box {
		padding: 30rpx;
		color: $--text-color-black;
		height: 700rpx;

		.product-title {
			font-size: $--font-size-middle;
			display: block;
			margin-bottom: 30rpx;
		}

		.product-detail-image {
			width: 550rpx;
			height: 550rpx;
			border-radius: $--border-radius-small;
		}

		.product-detail-sale {
			font-size: $--font-size-small;
			color: $--text-color-grey;
			display: block;
			white-space: pre;
		}

		.product-detail-desc {
			font-size: $--font-size-small;
			margin-bottom: 100rpx;
		}


	}

	.confirm-box {
		background-color: $--color-white;
		position: absolute;
		bottom: 0;
		right: 20rpx;
	}
</style>
