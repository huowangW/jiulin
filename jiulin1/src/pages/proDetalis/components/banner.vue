<template>
	<div class="proBanner">
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
		name: "proBanner",
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				imgList: [{
					id: 1,
					url: require('../../../images/proList/pro_details_banner.png')
				}, {
					id: 2,
					url: require('../../../images/proList/pro_details_banner.png')
				}, {
					id: 3,
					url: require('../../../images/proList/pro_details_banner.png')
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
</script>

<style scoped>
	.proBanner {
			width: 750px;
			height: 465px;
		}
	
	
		.proBanner .swiper-slide .image-item {
			width: 750px;
			height: 465px;
		}
		.swiper-pagination-bullet{
			
		}
		.proBanner>>>.swiper-pagination-bullet {
			margin: 0 16px;
			width: 16px;
			height: 16px;
			border: 2px solid #fff;
			background: #b3afa4;
			opacity: 1;
		}
		.proBanner >>> .swiper-pagination-bullet-active{
			width: 16px;
			height: 16px;
			background: #fff;
			display: inline-block;
		}
</style>
