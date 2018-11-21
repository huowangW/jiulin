<template>
	<div class="proDetalis">
		<div class="header">
			<span onclick="javascript:window.history.back(-1);" class="iconfont return">&#xe603;</span>
			<div class="baby">
				<span>宝贝</span>
				<span class="iconfont">&#xe615;</span>
			</div>
			<span class="evaluate">评价</span>
			<span>详情</span>
			<span class="iconfont shopart">&#xe619;</span>
			<div class="more"><span class="iconfont">&#xe67a;</span></div>
		</div>
		
		<proBanner></proBanner>
		<div class="title">
			<div class="text">
				<img src="../../images/detalis/thunder.png" alt="">
				<p>温馨客厅灯圆形创意大气led吸顶灯简约现卧室灯具大厅1.2米</p>
			</div>
			<div class="share">
				<span class="iconfont">&#xe65b;</span>
				<p>分享有礼</p>
			</div>
		</div>
		<div class="info">
			<div class="price">
				<span>$569-2198</span>
				<p class="purchase">抢购价</p>
			</div>
			<p class="original_price">原价：<span>$5999.00</span></p>
			<ul>
				<li>快递：<span>0.00</span></li>
				<li>月销量：<span>8888</span>件</li>
				<li>库存：<span>3010</span>件</li>
			</ul>
		</div>
		<div class="Distribution">
			<div class="Distribution-item">
				<div>
					<p>送 至：<span>广东省广州市海珠区</span></p>
					<p><span class="stock">现货</span> 18：00前完成下单，预计明天到达</p>
				</div>
				<div class="iconfont">&#xe636;</div>
			</div>
			<ul>
				<li><div class="iconfont">&#xe640;</div><span>七天退货</span></li>
				<li><div class="iconfont">&#xe640;</div><span>货到付款</span></li>
				<li><div class="iconfont">&#xe640;</div><span>保修一年</span></li>
				<li><div class="iconfont">&#xe640;</div><span>极速发货</span></li>
			</ul>
			<div class="colors">
				<span>颜色</span><div class="white on">白色</div><div class="black">黑色</div>
			</div>
			<div class="num">
				<span>数量</span>
				<div class="add-reduce">
					<div class="iconfont reduce">&#xe633;</div><input type="text" value="1" /><div class="iconfont add">&#xe632;</div>
				</div>
			</div>
		</div>
		<div class="comment">
			<div class="comment-title">
				<div class="left"><span>评论</span><span class="good">好评99%</span></div>
				<div class="right"><span>共15123 条评价</span><span class="iconfont">&#xe636;</span></div>
			</div>
			<div class="comment-list">
				<ul>
					<li>亮度很好(213)</li>
					<li>外观漂亮(213)</li>
					<li>服务很好(213)</li>
					<li>物流不错(213)</li>
					<li>价格实惠(213)</li>
					<li>节能省电(213)</li>
				</ul>
				<ol>
					<li v-for="(item,index) in evaluateList" :key="index">
						<div class="title">
							<div>
								<span class="user-main">{{item.userMain}}</span>
								<span class="iconfont">&#xe60c;</span>
								<span class="iconfont">&#xe60c;</span>
								<span class="iconfont">&#xe60c;</span>
								<span class="iconfont">&#xe60c;</span>
								<span class="iconfont">&#xe60c;</span>
							</div>
							<div class="time">
								<span>{{item.itme}}</span>
							</div>
						</div>
						<p>{{item.content}}</p>
						<div class="Model">
							<span>颜色：<i>{{item.color}}</i></span>
							<span class="Reply">回复</span>
						</div>
					</li>
				</ol>
			</div>
			<div class="moreComments">查看更多评论</div>
		</div>
		<div class="proMenu">
			<ul>
				<li v-for="(item,index) in proMenuList" :key="item.id" @click="onBool(index)" :class="index===cative?'on':''">
					<router-link :to="item.url">{{item.title}}</router-link>
				</li>
			</ul>
			<div class="tab-com">
				<router-view></router-view>
			</div>
		</div>
		<addShop class="addShop"></addShop>
		
	</div>
</template>

<script>
	import proBanner from '@/pages/proDetalis/components/banner.vue'
	import addShop from '@/pages/proDetalis/components/addshop.vue'
	export default {
		components:{
			proBanner,
			addShop
		},
		name: "proDetalis",
		data(){
			return{
				"proMenuList":[{
					"id":"01",
					"title":"产品介绍",
					"url":"/proDetalis/productDisplay"
				},{
					"id":"02",
					"title":"规格参数",
					"url":"/proDetalis/priceParameter"
				},{
					"id":"03",
					"title":"售后保障",
					"url":"/proDetalis/AfterSale"
				}],
				"cative":0,
				"show":"productDisplay",
				"evaluateList":[{
					"userMain":"到**会猪",
					"itme":"2016-04-12",
					"content":"质量非常不错，拥有了他,就好像拥有了全世界！站在巅峰的感觉真是不错",
					"color":"白色"
				},
				{
					"userMain":"到**会猪",
					"itme":"2016-04-12",
					"content":"质量非常不错，拥有了他,就好像拥有了全世界！站在巅峰的感觉真是不错",
					"color":"黑色"
				},
				{
					"userMain":"到**会猪",
					"itme":"2016-04-12",
					"content":"质量非常不错，拥有了他,就好像拥有了全世界！站在巅峰的感觉真是不错",
					"color":"黑色"
				}]
			}
		},
		methods:{
			onBool(i){
				this.cative = i
			}
		}
	}
</script>

<style lang="less" scoped>
	.proDetalis{
		padding-bottom: 100px;
		.header{
			height: 88px;
			width: 100%;
			background: #4383ef;
			display: flex;
			justify-content: space-around;
			align-items: center;
			span{
				color: #fff;
				font-size: 28px;
			}
			.return{
				font-size: 44px;
				color: #fff;
			}
			.baby{
				font-size: 28px;
				.iconfont{
					font-size: 30px;
				}
			}
			.shopart{
				font-size: 40px;
			}
			.more{
				span{
					display: block;
					font-size: 50px;
					color: #fff;
					transform:rotate(90deg)
				}
			}
		}
		.title{
			
			display: flex;
			justify-content: space-between;
			padding: 0 20px;
			box-sizing: border-box;
			.text{
				
				width:528px;
				img{
					float: left;
					display: block;
					width: 34px;
					height: 56px;
				}
				p{
					margin-top: 12px;
					font-size: 26px;
					color: #000000;
					line-height: 46px;
				}
			}
			.share{
				text-align: center;
				margin-top: 33px;
				span{
					
					font-size: 58px;
					color: #d81e06;
				}
				p{
					margin-top: 6px;
					line-height: 30px;
					color: #777777;
					font-size: 24px;
				}
			}
		}
		.info{
			padding-left: 20px;
			border-bottom: 2px solid #e2e2e2;
			.price{
				height: 70px;
				line-height: 70px;
				color: #f41b1b;
				display: flex;
				align-items: center;
				font-size: 36px;
				.purchase{
					width: 75px;
					height: 26px;
					line-height: 26px;
					text-align: center;
					font-size: 24px;
					border: 1px solid #f41b1b;
					// border-radius: 3px;
					margin-left: 46px;
				}
			}
			.original_price{
				font-size: 24px;
				color: #504e4e;
				line-height: 50px;
			}
			ul{
				display: flex;
				justify-content: space-between;
				height: 84px;
				line-height: 84px;
				padding-right: 20px;
				li{
					font-size: 24px;
					color: #504e4e;
					span{
						color: #d81e06;
					}
				}
			}
		}
		.Distribution{
			width: 710px;
			margin: 0 auto;
			.Distribution-item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				p{
					line-height: 70px;
					font-size: 24px;
					color: #504e4e;
					.stock{
						color: #dc3520;
					}
				}
				.iconfont{
					font-size: 40px;
					color: #9c9b9b;
				}
			}
			ul{
				display: flex;
				justify-content: space-between;
				align-items: center;
				li{
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 136px;
					div{
						width: 32px;
						height: 32px;
						line-height: 32px;
						text-align: center;
						background: #d81e06;
						color: #fff;
						font-size: 16px;
						border-radius: 50%;
					}
				}
			}
			.colors{
				width: 266px;
				height: 120px;
				font-size: 24px;
				color: #504e4e;
				display: flex;
				justify-content: space-between;
				align-items: center;
				div{
					width: 75px;
					height: 56px;
					line-height: 56px;
					text-align: center;
					border: 1px solid #e2e2e2;
				}
				div.on{
					border: 1px solid #d81e06;
				}
			}
			.num{
				
				display: flex;
				align-items: center;
				font-size: 24px;
				color: #504e4e;
				.add-reduce{
					margin-left: 24px;
					position: relative;
					.reduce{
						width: 50px;
						height: 44px;
						line-height: 43px;
						text-align: center;
						background: #e2e2e2;
						font-size: 18px;
						position: absolute;
						top: 0;
						left: 0;
					}
					.add{
						width: 50px;
						height: 44px;
						line-height: 43px;
						text-align: center;
						background: #e2e2e2;
						font-size: 18px;
						position: absolute;
						top: 0;
						right: 0;
					}
					input{
						border: 1px solid #d0cfcf;
						width: 81px;
						height: 45px;
						padding: 0 51px;
						text-align: center;
					}
				}
			}
		}
		.comment{
			width: 710px;
			margin: 0 auto;
			.comment-title{
				font-size: 24px;
				color: #504e4e;
				border-top: 1px solid #e2e2e2;
				border-bottom: 1px solid #e2e2e2;
				margin: 30px 0;
				height: 51px;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					letter-spacing: 18px;
					.good{
						color: #ef2525;
						letter-spacing: 2px;
					}
				}
				.right{
					width: 244px;
					display: flex;
					justify-content: space-between;
				}
			}
			.comment-list{
				ul{
					display: flex;
					flex-wrap: wrap;
					
					li{
						margin-left: 40px;
						margin-bottom: 20px;
						width: 175px;
						height: 50px;
						line-height: 50px;
						text-align: center;
						background: #f1f1f1;
						color: #5c5a5a;
						font-size: 24px;
					}
				}
				ol{
					li{
						border-bottom: 1px solid #e2e2e2;
						.title{
							height: 62px;
							line-height: 62px;
							width: 100%;
							font-size: 28px;
							color: #2b2b2b;
							.user-main{
								margin-right: 24px;
							}
							.iconfont{
								font-size: 28px;
								color: #e21d13;
							}
						}
						p{
							width: 530px;
							font-size: 24px;
							color: #1e1d1d;
							line-height: 44px;
						}
						.Model{
							display: flex;
							justify-content: space-between;
							height: 74px;
							line-height: 74px;
							span{
								font-size: 24px;
								color: #8f8c8c;
							}
							.Reply{
								font-size: 28px;
								color: #0d59f2;
							}
						}
					}
				}
				
			}
			.moreComments{
				height: 60px;
				line-height: 60px;
				font-size: 28px;
				width: 100%;
				color: #474747;
				text-align: center;
			}
		}
		.proMenu{
			ul{
				display: flex;
				justify-content: space-around;
				align-items: center;
				height: 60px;
				border-top: 1px solid #e2e2e2;
				border-bottom: 1px solid #e2e2e2;
				li{
					width: 272px;
					height: inherit;
					line-height: 60px;
					text-align: center;
				}
				li.on{
					a{
						color: #f63131;
					}
				}
				li:nth-child(2){
					border-left: 1px solid #c1c0c0;
					border-right: 1px solid #c1c0c0;
				}
			}
		}
		.addShop{
			position: fixed;
			bottom: 0;
		}
	}
</style>
