<template>
	<div class="home">
		<search class="search"></search>

		<banner class="banner"></banner>

		<div class="main">
			<div class="list">
				<ul>
					<li>
						<img src="../../images/home/home.png">
						<span>拍卖</span>
					</li>
					<li>
						<img src="../../images/home/home1.png">
						<span>拍卖</span>
					</li>
					<li>
						<img src="../../images/home/home2.png">
						<span>拍卖</span>
					</li>
					<li>
						<img src="../../images/home/home3.png">
						<span>拍卖</span>
					</li>
					<li>
						<img src="../../images/home/home4.png">
						<span>拍卖</span>
					</li>
					<li>
						<img src="../../images/home/home5.png">
						<span>拍卖ddd</span>
					</li>
					<li>
						<img src="../../images/home/home6.png">
						<span>拍卖</span>
					</li>
					<li>
						<img src="../../images/home/home7.png">
						<span>拍卖ddd</span>
					</li>
				</ul>
			</div>
		</div>
		<commodityList></commodityList>
		<MenuBar></MenuBar>
	</div>

</template>

<script>
	import search from '@/components/search.vue'
	import banner from './components/banner.vue'
	import commodityList from './components/commodityList.vue'
	// import { XHeader } from 'vux'
	export default {
		name: "home",
		components: {
			search,
			banner,
			commodityList
		}
	}
</script>

<style lang="less" scoped>
	.home{
		padding-bottom: 108px;
	}
	.banner {
		padding-top: 88px;
		width: 750px;
		margin: 0 auto;
		height: 320px;
		margin-bottom: 33px;
	}

	.search {
		position: fixed;
		height: 88px;
		z-index: 8;
	}

	.main {
		ul {
			width: 100%;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			border-bottom: 20px solid #4383ef;
			li {
				margin-bottom: 40px;
				width: 174px;
				text-align: center;
				img {
					display: block;
					margin: 0 auto;
					width: 109px;
					height: 109px;
					margin-bottom: 18px;
				}
				span{
					font-size: 26px;
					color: #414040;
				}
			}
		}
	}
</style>
