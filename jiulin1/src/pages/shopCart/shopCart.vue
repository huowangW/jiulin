<template>
	<div class="shopart">
		<div class="header">
			<div class="bg">
				<div class="main">
					<div onclick="javascript:window.history.back(-1);" class="return">
						<span class="iconfont">&#xe603;</span>
						<span>返回</span>
					</div>
					<div class="search">
						购物车
					</div>
					<button class="submit" type="submit">编辑</button>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="fullSub">
				<div>满减</div>
				<p>已享“满100元减1元”</p>
			</div>
		</div>
		<div class="shopartList">
			<ul>
				<li>
					<div class="checked">
						<label>
							<div class="iconfont">&#xe640;</div>
							<input type="checkbox" checked="checked" />
						</label>
					</div>
					<img src="../../images/home/home_like02.png" alt="">
					<div class="info">
						<p>LED吸顶灯长方形客厅灯餐厅阳台灯饰大气房间卧室灯灯具</p>
						<div class="color"><span>颜色：</span><span>(白色)</span></div>
					</div>
					<div class="num">
						<span>{{price | point |money}}</span>
						<div class="add_reduce">
							<span class="add iconfont">&#xe632;</span>
							<input type="number" v-model="num" />
							<span class="reduce iconfont">&#xe633;</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>

<script>
	export default {
		name: "shopCart",
		data(){
			return{
				"price":899,
				"num":1
			}
		},
		filters:{
			point(val){
				return val.toFixed(2)
			},
			money(val){
				return "￥"+val
			}
		}
	}
</script>

<style scoped lang="less">
	.shopart{
		.header{
		.bg {
			width: 100%;
			height: 88px;
			background: #4383ef;
			.main {
				width: 750px;
				height: inherit;
				padding: 0 20px;
				box-sizing: border-box;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.return {
				width: 104px;
				display: flex;
				align-items: center;
				font-size: 28px;
				color: #fff;

				.iconfont {
					font-size: 40px;
				}
			}

			.search {
				font-size: 36px;
				color: #fff;
			}
			.submit{
				width: 88px;
				text-align: center;
				font-size: 28px;
				color: #fff;
				background: none;
			}
		}
		}
		.content{
			.fullSub{
				height: 122px;
				display: flex;
				align-items: center;
				padding: 0 20px;
				box-sizing: border-box;
				>div{
					width: 99px;
					height: 53px;
					line-height: 53px;
					text-align: center;
					background: #4383ef;
					font-size: 26px;
					color: #fff;
					border-radius: 20px;
					margin-right: 22px;
				}
				p{
					font-size: 24px;
					color: #545454;
				}
			}
		}
		.shopartList{
			width: 100%;
			padding: 0 20px;
			box-sizing: border-box;
			ul{
				li{
					display: flex;
					justify-content: space-between;
					align-items: center;
					img{
						display: block;
						width: 208px;
						height: 215px;
					}
				}
			}
		}
		
	}
</style>