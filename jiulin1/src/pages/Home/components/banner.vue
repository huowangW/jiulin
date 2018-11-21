<template>
	<div class="banner">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide class="swiper-slide" v-for="item of imgList" :key="item.id">
				<router-link to="/proList">
					<img :src="item.url" class="image-item">
				</router-link>
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: "banner",
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				imgList: [{
					id: 1,
					url: require('@/images/home/banner01.jpg')
				}, {
					id: 2,
					url: require('@/images/home/banner02.jpg')
				}, {
					id: 3,
					url: require('@/images/home/banner03.jpg')
				}],
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
					autoplay: {
						stopOnLastSlide: true,
						delay: 1500,
						disableOnInteraction: false
					},
					loop: true
				},
				swiperSlides: [1, 2, 3]
			}
		}

	}

	// 	var mySwiper = new Swiper ('.swiper-container', {
	// 			
	// 		}
</script>

<style scoped>
	.banner {
		width: 750px;
		height: 320px;
	}


	.banner .swiper-slide .image-item {
		width: 750px;
		height: 320px;
	}
	.swiper-pagination-bullet{
		
	}
	.banner>>>.swiper-pagination-bullet {
		margin: 0 16px;
		width: 16px;
		height: 16px;
		border: 2px solid #cfbb99;
		background: #fff;
		opacity: 1;
	}
	.banner >>> .swiper-pagination-bullet-active{
		width: 16px;
		height: 16px;
		background: #cfbb99;
		display: inline-block;
	}
</style>
