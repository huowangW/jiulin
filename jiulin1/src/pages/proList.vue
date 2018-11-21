<template>
	<div class="proList">
		<div class="pos">
			<div class="header">
				<div class="bg">
					<div class="main">
						<div onclick="javascript:window.history.back(-1);" class="return">
							<span class="iconfont">&#xe603;</span>
							<span>返回</span>
						</div>
						<div class="search">
							<form>
								<span @click="searchClick()" class="iconfont">&#xe623;</span>
								<input @click="searchClick()" v-model="val" type="text" placeholder="输入你想要的商品" />
								<i @click="val=null" class="iconfont">&#xe613;</i>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="menu">
				<ul>
					<li>
						<span>综合排序</span>
						<span class="iconfont">&#xe614;</span>
					</li>
					<li class="on">
						<span>销量优先</span>
					</li>
					<li>
						<span>信用优先</span>
					</li>
					<li>
						<span>筛选</span>
						<span class="iconfont">&#xe66c;</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="list">
			<ul>
				<li v-for="item in proList" :key="item.id">
					<router-link to="/proDetalis">
						<img :src="item.imgUrl" alt="">
					
						<p>{{item.title}}</p>
						<p>{{item.text}}</p>
						<div class="price">
							<span>{{item.price}}</span>
							<div>加入购物车</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "search",
		data(){
			return{
				"val":"",
				"proList":[{
					"id":"01",
					"imgUrl":require('../images/home/home_like02.png'),
					"title":"17小夜灯LED顶上轮廓室床头",
					"text":"麋鹿猫创意梦幻灯饰",
					"price":360
				},
				{
					"id":"02",
					"imgUrl":require('../images/home/home_like01.png'),
					"title":"17小夜灯LED顶上轮廓室床头",
					"text":"麋鹿猫创意梦幻灯饰",
					"price":360
				},
				{
					"id":"03",
					"imgUrl":require('../images/proList/pro_list03.png'),
					"title":"17小夜灯LED顶上轮廓室床头",
					"text":"麋鹿猫创意梦幻灯饰",
					"price":360
				},
				{
					"id":"04",
					"imgUrl":require('../images/proList/pro_list04.png'),
					"title":"17小夜灯LED顶上轮廓室床头",
					"text":"麋鹿猫创意梦幻灯饰",
					"price":360
				},
				{
					"id":"05",
					"imgUrl":require('../images/home/home_hot03.png'),
					"title":"17小夜灯LED顶上轮廓室床头",
					"text":"麋鹿猫创意梦幻灯饰",
					"price":360
				},
				{
					"id":"06",
					"imgUrl":require('../images/home/home_hot04.png'),
					"title":"17小夜灯LED顶上轮廓室床头",
					"text":"麋鹿猫创意梦幻灯饰",
					"price":360
				}]
			}
		},
		methods:{
			searchClick(){
				this.$router.push('searchPage')
			}
		}
	}
</script>

<style lang="less" scoped>
	.proList {
		.pos{
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			// height: 173px;
		}
		.header {
			width: 100%;
			.bg {
				width: 100%;
				height: 88px;
				background: #4383ef;
				.main{
					width: inherit;
					height: inherit;
					margin: 0 auto;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.return {
					margin-left: 20px;
					display: flex;
					align-items: center;
					font-size: 28px;
					color: #fff;

					.iconfont {
						font-size: 40px;
					}
				}

				.search {
					margin-right: 70px;
					form {

						position: relative;

						span {
							position: absolute;
							top: 14px;
							left: 18px;
							font-size: 36px;
							color: #9b9b9b;
						}

						input {
							padding-left: 70px;
							padding-right: 48px;
							font-size: 24px;
							color: #bcbcbc;
							height: 60px;
							width: 357px;
							border-radius: 4px;
						}

						i {
							position: absolute;
							top: 20px;
							right: 22px;
							// margin-right: -9px;
							font-size: 20px;
						}

					}
				}
			}
		}
		.menu{
			ul{
				background: #fff;
				height:85px;
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				li{
					font-size: 30px;
					color: #4d4d4d;
				}
				li.on{
					color: #eba51e;
				}
			}
		}
		.list{
			padding-top: 173px;
			ul{
				display:flex;
				justify-content: space-around;
				flex-wrap: wrap;
				li{
					margin-bottom: 33px;
					width: 340px;
					img{
						display: block;
						width: 340px;
						height: 340px;
					}
					p{
						text-indent: 8px;
						font-size: 24px;
						color: #3b3b3b;
						line-height: 38px;
					}
					.price{
						margin-top: 10px;
						display: flex;
						justify-content: space-between;
						span{
							text-indent: 8px;
							font-size: 36px;
							color: #fd2727;
						}
						>div{
							font-size: 24px;
							color: #fff;
							text-align: center;
							line-height: 31px;
							height: 31px;
							width: 156px;
							background: #eba51e;
						}
					}
				}
			}
		}
	}
</style>
