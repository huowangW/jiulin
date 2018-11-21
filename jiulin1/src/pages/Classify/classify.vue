<template>
	<div class="classify">
		<div class="header">
			<div class="terurn">
				<span class="iconfont">&#xe603;</span>
				<span>返回</span>
			</div>
			<inputSearch></inputSearch>
		</div>
		<div class="main">
			<div class="leftNav">
				<div class="seat"></div>
				<ul>
					<li :key="index" v-for="(item,index) in leftNav" :class="index===active?'on':''" @click="onClick(index)">
						<p>{{item}}</p>
					</li>
				</ul>
			</div>
			<div class="proList">
				<div v-for="(items,index) in proList" :key="index" class="list">
					<ul>
						<li :key="item.id" v-for="item in items">
							<router-link to="/proDetalis">
								<img :src="item.imgUrl">
								<p>{{item.text}}</p>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	import inputSearch from '@/components/input.vue'
	export default {
		name: "classify",
		components: {
			inputSearch
		},
		data() {
			return {
				"active": 0,
				"leftNav": ["LED现代灯", "LED照明灯", "LED壁灯", "LED灯台", "LED射灯", "LED沙发灯", "LED落地灯"],
				"proList": [

					[{
							"id": "01",
							"imgUrl": require('../../images/home/home_like01.png'),
							"text": "LED现代灯"
						},
						{
							"id": "02",
							"imgUrl": require('../../images/home/home_like01.png'),
							"text": "LED现代灯"
						},
						{
							"id": "03",
							"imgUrl": require('../../images/home/home_like01.png'),
							"text": "LED现代灯"
						},
						{
							"id": "04",
							"imgUrl": require('../../images/home/home_like01.png'),
							"text": "LED现代灯"
						},
						{
							"id": "05",
							"imgUrl": require('../../images/home/home_like01.png'),
							"text": "LED现代灯"
						},
						{
							"id": "06",
							"imgUrl": require('../../images/home/home_like01.png'),
							"text": "LED现代灯"
						}
					],
					[{
							"id": "07",
							"imgUrl": require('../../images/home/home_hot04.png'),
							"text": "LED照明灯"
						},
						{
							"id": "08",
							"imgUrl": require('../../images/home/home_hot04.png'),
							"text": "LED照明灯"
						},
						{
							"id": "09",
							"imgUrl": require('../../images/home/home_hot04.png'),
							"text": "LED照明灯"
						},
						{
							"id": "10",
							"imgUrl": require('../../images/home/home_hot04.png'),
							"text": "LED照明灯"
						},
						{
							"id": "11",
							"imgUrl": require('../../images/home/home_hot04.png'),
							"text": "LED照明灯"
						},
						{
							"id": "12",
							"imgUrl": require('../../images/home/home_hot04.png'),
							"text": "LED照明灯"
						}
					],
					[{
							"id": "13",
							"imgUrl": require('../../images/home/home_hot03.png'),
							"text": "LED壁灯"
						},
						{
							"id": "14",
							"imgUrl": require('../../images/home/home_hot03.png'),
							"text": "LED壁灯"
						},
						{
							"id": "15",
							"imgUrl": require('../../images/home/home_hot03.png'),
							"text": "LED壁灯"
						},
						{
							"id": "16",
							"imgUrl": require('../../images/home/home_hot03.png'),
							"text": "LED壁灯"
						},
						{
							"id": "17",
							"imgUrl": require('../../images/home/home_hot03.png'),
							"text": "LED壁灯"
						},
						{
							"id": "18",
							"imgUrl": require('../../images/home/home_hot03.png'),
							"text": "LED壁灯"
						}
					]

				]
			}
		},
		methods: {
			onClick(index) {
				this.active = index
			}
		}
	}
</script>

<style scoped lang="less">
	.header {
		position: fixed;
		height: 88px;
		width: 100%;
		display: flex;
		align-items: center;
		// justify-content: space-between;
		padding: 0 63px 0 20px;
		box-sizing: border-box;
		background: #4383ef;

		.terurn {
			margin-right: 26px;

			span {
				color: #fff;
				font-size: 28px;
			}

			.iconfont {
				font-size: 40px;
			}
		}
	}

	.main {
		margin-bottom: 98px;
		display: flex;
		.leftNav {
			margin-top: 88px;
			.seat{
				width: 196px;
			}
			ul {
				height: 1108px;
				position: fixed;
				top: 88px;
				background: #f1f1f1;
				width: 196px;
				// padding-left: 20px;
				height: 100%;
				li {
					border-left: 4px solid #f1f1f1;
					height: 115px;
					line-height: 115px;

					// width: 100%;
					p {
						font-size: 30px;
						color: #070707;
						margin-left: 20px;
						width: 153px;
						line-height: 115px;
						border-bottom: 2px solid #b2b2b2;
					}
				}

				li.on {
					border-left: 4px solid #eba51e;
					background: #ffffff;

					p {
						border-bottom: none;
					}
				}
			}
		}

		.proList {
			margin-top: 121px;
			ul {
				display: flex;
				flex-wrap: wrap;

				li {
					width: 260px;
					margin-left: 7px;

					img {
						display: block;
						width: 260px;
						height: 248px;
					}

					p {
						font-size: 24px;
						color: #4b4a4a;
						text-align: center;
						line-height: 69px;
					}
				}
			}
		}
	}
</style>
