<template>
	<div class="commodityList">
		<div class="flashSale">
			<div class="timeLimit">
				<h1>
					<img src="../../../images/home/clock.png">
					<div class="text"><span>限时抢购</span></div>
				</h1>
				<p>汇全网尖货&nbsp;抢半价</p>
				<div class="time">
					<div class="hour">{{hour | addZero}} </div><span>:</span>
					<div class="minute">{{minute}} </div><span>:</span>
					<div class="sccond">{{sccond}}</div>
				</div>
				<div class="imgPrice">
					<router-link to="/proList">
						<img :src="imgUrl">
						<div class="price">
							<div>
								<span>{{price | element}}</span>
								<p>限量抢</p>
							</div>
						</div>
					</router-link>
				</div>
			</div>
			<div class="right">
				<ul>
					<li v-for="item in timeLimit" :key="item.id">
						<router-link to="/proList">
							<h3>{{item.title}}</h3>
							<p>{{item.text}}</p>
							<div class="img">
								<img :src="item.imgUrl" alt="">
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!-- 新品推荐 -->
		<div class="newProduct">
			<div class="titles">
				<div class="bgs"></div>
				<div class="mains">
					<div class="poss">
						<div class="texts">New</div>
						<h2 class="h2s">新品上市</h2>
						<div class="iconfonts iconfont">&#xe6cf;</div>
					</div>
				</div>
			</div>
			<div class="price">
				<ul>
					<li v-for="item in newProduct" :key="item.id">
						<router-link to="/proList">
							<div class="img">
								<img :src="item.imgUrl" alt="">
								<div class="new">NEW</div>
							</div>
							<p>{{item.title}}</p>
							<p>{{item.text}}</p>
							<div class="info">
								<span class="price">{{item.price | elementA}}</span>
								<span class="shopart"><img src="../../../images/home/shop.png" alt=""></span>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="hotComm">
			<div class="titles">
				<div class="bgs"></div>
				<div class="mains">
					<div class="poss">
						<div class="texts">Hot</div>
						<h2 class="h2s">火热爆款</h2>
						<div class="iconfonts"><img src="../../../images/home/Hotlogo.png" alt=""></div>
					</div>
				</div>
			</div>
			<div class="main">
				<ul>
					<li>
						<router-link to="/proList">
							<img :src="Hot_img" alt="">
							<div class="info">
								<p>美式</p>
								<p>{{HotTitle}}</p>
								<div class="price">
									<p>{{hotPrice | elementA}}</p>
									<p>火爆价</p>
								</div>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="proList">
							<img :src="Hot_img1" alt="">
							<p>{{HotTitle}}</p>
							<p>大气灯具</p>
							<div class="num">
								<span>{{hotPrice1 | elementA}}</span>
								<img src="../../../images/home/shop.png" alt="">
							</div>	
						</router-link>
						
					</li>
				</ul>
				<ol>
					<li v-for="(item,index) in hotCommList" :key="index">
						<router-link to="/proList">
							<img :src="item.imgUrl" alt="">
							<p>{{item.title}}</p>
							<div class="num">
								<span>{{item.price | elementA}}</span>
								<img src="../../../images/home/shop.png" alt="">
							</div>
						</router-link>
					</li>
				</ol>
			</div>
		</div>
		<div class="proLike">
			<div class="titles">
				<div class="bgs"></div>
				<div class="mains">
					<div class="poss">
						<div class="texts">like</div>
						<h2 class="h2s">火热爆款</h2>
						<div class="iconfonts iconfont">&#xe712;</div>
					</div>
				</div>
			</div>
			<div class="main">
				<ul>
					<li>
						<!-- <img src="" alt=""> -->
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mane: "commodityList",
		data() {
			return {
				"imgUrl": require('../../../images/home/flash_sale02.png'),
				"Hot_img":require('../../../images/home/home_hot01.png'),
				"Hot_img1":require('../../../images/home/home_hot02.png'),
				"HotTitle":"创意吸顶灯具",
				"price":288,
				"itme":"",
				"hour":1,
				"minute":25,
				"sccond":46,
				"hotPrice":999,
				"hotPrice1":399,
				"timeLimit": [{
						"id": "01",
						"imgUrl": require('../../../images/home/flash_sale01.png'),
						"title": "每日精选100款",
						"text": "品质生活指南"
					},
					{
						"id": "02",
						"imgUrl": require('../../../images/home/flash_sale03.png'),
						"title": "免费好礼",
						"text": "老白余额充值"
					}
				],
				"newProduct": [{
						"id": "01",
						"imgUrl": require('../../../images/home/new_pro01.png'),
						"title": "奥朵灯饰水晶",
						"text": "大气灯具",
						"price": 288
					},
					{
						"id": "02",
						"imgUrl": require('../../../images/home/new_pro02.png'),
						"title": "奥朵灯饰水晶",
						"text": "大气灯具",
						"price": 288
					},
					{
						"id": "03",
						"imgUrl": require('../../../images/home/new_pro03.png'),
						"title": "奥朵灯饰水晶",
						"text": "大气灯具",
						"price": 288
					},
					{
						"id": "04",
						"imgUrl": require('../../../images/home/new_pro04.png'),
						"title": "奥朵灯饰水晶",
						"text": "大气灯具",
						"price": 288
					},
					{
						"id": "05",
						"imgUrl": require('../../../images/home/new_pro05.png'),
						"title": "奥朵灯饰水晶",
						"text": "大气灯具",
						"price": 288
					},
					{
						"id": "06",
						"imgUrl": require('../../../images/home/new_pro06.png'),
						"title": "奥朵灯饰水晶",
						"text": "大气灯具",
						"price": 288
					}
				],
				"hotCommList":[{
					"imgUrl":require('../../../images/home/home_hot03.png'),
					"title":"北奥创意个性灯饰",
					"price":399
				},
				{
					"imgUrl":require('../../../images/home/home_hot04.png'),
					"title":"北奥创意个性灯饰",
					"price":399
				}]
			}
		},
		methods:{
			Countdown(){
				// var that = this
				this.itme = setInterval(function(){
// 					if(that.sccond>0){
// 						let newSccond = that.sccond-1
// 						that.sccond = newSccond
// 					}else if(that.sccond>!0){
// 						that.sccond = 60
// 					}else if(that.sccond = 60){
// 						let newMinute = that.minute-1
// 						that.minute = newMinute
// 					}
// 					if(that.minute<!0){
// 						let newHour = that.hour-1
// 						that.hour = newHour
// 					}
					
				},1000)
				
			}
		},
		filters:{
			addZero(val){
				return "0"+val
			},
			element(val){
				return val+"元"
			},
			elementA(val){
				return "￥"+val
			}
		},
		mounted:function(){
			this.Countdown()
// 			if(this.hour=0){
// 				clearInterval(this.itme)
// 			}
		}
	}
</script>

<style lang="less" scoped>
	.commodityList {
		.flashSale {
			display: flex;
			justify-content: space-around;
			margin-bottom: 54px;
			border-bottom: 20px solid #4383ef;

			.timeLimit {
				width: 376px;
				border-right: 1px solid #c8c8c8;

				h1 {
					// display: flex;
					height: 70px;
					display: table-cell;
					vertical-align: bottom;

					img {
						float: left;
						display: block;
						height: 43px;
						width: 42px;
						margin: 0 20px;
					}

					.text {
						float: left;
						height: 43px;
						position: relative;
						font-size: 34px;
						color: #da2626;

						span {
							display: block;
							width: 150px;
							position: absolute;
							bottom: 0;
						}
					}
				}

				>p {
					line-height: 68px;
					font-size: 24px;
					color: #888888;
					padding-left: 24px;
				}

				.time {
					display: flex;
					color: #fff;
					margin-bottom: 23px;

					span {
						font-size: 30px;
						color: #000000;
					}

					>div {
						border-radius: 10px;
						width: 62px;
						text-align: center;
						line-height: 43px;
						height: 43px;
						font-size: 30px;
						margin: 0 10px;
						background: #000000;
					}
				}

				.imgPrice {
					a {
						display: flex;
					}

					img {
						width: 196px;
						height: 204px;
						display: block;
					}

					.price {
						width: 107px;
						height: 107px;
						border-radius: 50%;
						background: #ed4d4d;
						font-size: 20px;
						color: #fff;
						display: flex;
						justify-content: center;
						align-items: center;

						div {
							text-align: center;
						}
					}
				}
			}

			.right {
				ul {
					li {
						width: 374px;
						height: 217px;
						padding-left: 7px;

						p {
							font-size: 24px;
						}

						a {
							h3 {
								font-size: 28px;
								color: #000000;
								line-height: 60px;
							}
						}
					}

					li:nth-child(1) {
						border-bottom: 1px solid #c8c8c8;

						p {
							color: #4383ef;
						}

						.img {
							width: 100%;
							position: relative;
						}

						img {
							position: absolute;
							right: 20px;
							top: -40px;
							display: block;
							width: 197px;
							height: 164px;
						}
					}

					li:nth-child(2) {
						p {
							color: #c2bbbb;
						}

						.img {
							img {
								display: block;
								margin: 0 auto;
								width: 269px;
								height: 132px;
							}
						}
					}
				}
			}
		}

		.titles {
			position: relative;
			margin-bottom: 55px;
		}

		.bgs {
			width: 100%;
			height: 51px;
			background: #eba51e;
		}

		.mains {
			width: 321px;
			height: 86px;
			background: #f7e26b;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: -14px;
			margin: auto;
		}

		.poss {
			height: inherit;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}

		.texts {
			margin-top: -56px;
			width: 56px;
			height: 41px;
			line-height: 41px;
			color: #fff;
			text-align: center;
			font-size: 24px;
			background: #4383ef;
		}

		.h2s {
			font-size: 36px;
			color: #000000;
		}

		.iconfonts {
			color: #fff;
			font-size: 50px;
		}

		.newProduct {
			.titles {
				.titles;

				.bgs {
					.bgs;
				}

				.mains {
					.mains;

					.poss {
						.poss;
					}

					.texts {
						.texts;
					}

					.h2s {
						.h2s;
					}

					.iconfonts {
						.iconfonts;
					}
				}
			}

			.price {
				ul {
					// margin-bottom: 100px;
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;

					li {
						padding-top: 1px;
						margin-bottom: 40px;
						width: 222px;
						box-shadow: 0px 0px 7px #c4c4c4;

						.img {
							position: relative;

							img {
								display: block;
								width: 218px;
								margin: 0 auto;
								height: 156px;
							}

							.new {
								position: absolute;
								top: 0;
								left: 0;
							}
						}

						p {
							padding-left: 12px;
							font-size: 24px;
							color: #000000;
							line-height: 34px;
						}

						.info {
							height: 70px;
							display: flex;
							justify-content: space-around;
							align-items: center;

							.shopart {
								img {
									display: block;
									width: 34px;
									height: 30px;
								}

							}

							.price {
								font-size: 36px;
								color: #e21212;
							}
						}
					}
				}
			}
		}

		.hotComm {
			@bg:#ed4d4d;
			.titles {
				.mains {
					.texts {
						background: @bg;
					}
					.iconfonts {
						img{
							width: 42px;
							height: 48px;
						}
					}
				}
			}
			.main{
				ul{
					justify-content: space-around;
					display:flex;
					
					li{
						height: 320px;
						margin-bottom: 22px;
						border: 1px solid #c8c8c8;
					}
					li:nth-child(1){
						a{
							display: block;
							display: flex;
						}
						width: 465px;
						img{
							margin-top: -13px;
							display: block;
							width: 288px;
							height: 288px;
						}
						.info{
							width: 174px;
							padding-top: 60px;
							p{
								font-size: 24px;
								color: #000000;
								line-height: 42px;
								text-align: center;
							}
							.price{
								width: 137px;
								height: 97px;
								line-height: 97px;
								background: @bg;
								margin: 0 auto;
								border-radius: 10px;
								p{
									font-size: 36px;
									color: #fff;
								}
								p{
									font-size: 24px;
									color: #fff;
								}
							}
						}
					}
					li:nth-child(2){
						width: 220px;
						// padding-top: 28px;
						a{
							display: block;
							>img{
								display: block;
								margin-bottom: 28px;
								width: 207px;
								height: 116px;
								margin: 28px auto 40px auto;
								// margin-bottom: 40px;
							}
						}
						
						.num{
							display: flex;
							justify-content: space-around;
							height: 56px;
							align-items: center;
							span{
								font-size: 36px;
								color: #fc0000;
							}
							img{
								width: 34px;
								height: 30px;
							}
						}
						p{
							line-height: 36px;
							font-size: 24px;
							padding-left: 10px;
							color: #000000;
						}
					}
				}
				ol{
					display: flex;
					justify-content: space-around;
					margin-bottom: 56px;
					li{
						width: 340px;
						a{
							>img{
								display: block;
								width: 341px;
								height: 241px;
								margin: 0 auto;
							}
							p{
								line-height: 50px;
								font-size: 24px;
								color: #000000;
								text-align: center;
							}
							.num{
								display: flex;
								justify-content: space-around;
								img{
									width: 34px;
									height: 30px;
								}
								span{
									font-size: 36px;
									color: #fc0000;
								}
							}
						}
					}
				}
			}
		}
		.proLike{
			.titles{
				.mains{
					.poss{
						.texts{
							background: #e843bb;
						}
					}
				}
			}
		}
	}
</style>
