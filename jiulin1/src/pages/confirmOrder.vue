<template>
	<div class="confirmOrder">
		<div class="header">
			<div class="bg">
				<div class="main">
					<div onclick="javascript:window.history.back(-1);" class="return">
						<span class="iconfont">&#xe603;</span>
						<span>返回</span>
					</div>
					<div class="title">
						确认订单
					</div>
				</div>
			</div>
		</div>
		<div class="user-info">
			<div class="icon iconfont">&#xe615;</div>
			<div class="address">
				<div><span class="user-main">收货人：刘先生</span><span class="telephone">18967852468</span></div>
				<p>收货地址：广州市海珠区新港东路港乙商务大厦12楼</p>
			</div>
			<div class="right iconfont">&#xe636;</div>
		</div>
		<div class="proinfo">
			<img src="../images/detalis/proinfo.png" alt="">
			<div class="text">
				<p>LED吸顶灯长方形客厅灯餐厅阳台灯饰大气房间卧室灯灯具</p>
				<p class="color">颜色：（白色）</p>
				<div class="num">
					<span class="price"><i>{{empty | money}}</i>{{price | num}}</span>
					<span>x{{num}}</span>
				</div>
			</div>
		</div>
		<div class="main">
			<ul>
				<li>
					<span>售后服务</span>
					<div class="right"><span>全国联保</span><span class="iconfont">&#xe636;</span></div>
				</li>
				<li>
					<span>配送方式</span>
					<div class="right"><span>快递免邮</span><span class="iconfont">&#xe636;</span></div>
				</li>
				<li>
					<span>运费险</span>
					<p>卖家赠送,若确认收货前退货，可获保险赔付</p>
					<div class="right"><span class="iconfont">&#xe636;</span></div>
				</li>
				<li>
					<span>发表类型</span>
					<div class="right"><span>电子发票</span><span class="iconfont">&#xe636;</span></div>
				</li>
				<li>
					<span>发票抬头：<i>刘先生</i></span>
				</li>
			</ul>
			<p class="leav">买家留言：<input type="text" placeholder="请输入您的留言!" /></p>
		</div>
		<div class="sub">
			<button @click="placeOrder()">提交订单</button>
			<p>合计：<span>{{price*num | num | money}}</span></p>
		</div>
		<transition name="fade">
			<div v-if="show" class="paymentDateils">
				<div @click="placeOrder()" class="bg"></div>
				<div class="mainA">
					<div class="title">
						<span @click="placeOrder()" class="iconfont">&#xe61a;</span>
						<h3>付款详情</h3>
						<span class="iconfont doubt">&#xe7c6;</span>
					</div>
					<ul>
						<li><span>支付宝账号</span><span>621****@qq.com</span></li>
						<li><span>付款方式</span>
							<div class="bank"><span>广州天地银行（7136）</span><span class="iconfont">&#xe636;</span></div>
						</li>
						<li><span>需付款</span><span class="price">{{price*num | num}}元</span></li>
					</ul>
					<button type="submit">确认付款</button>
				</div>

			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "confirmOrder",
		data() {
			return {
				"price": 899,
				"num": 1,
				"empty": "",
				"show": false
			}
		},
		filters: {
			num(val) {
				return val.toFixed(2)
			},
			money(val) {
				return "￥" + val
			}
		},
		methods: {
			placeOrder() {
				this.show = !this.show
			}
		}
	}
</script>

<style lang="less" scoped>
	.confirmOrder {
		.header {
			width: 100%;

			.bg {
				width: 100%;
				height: 88px;
				background: #4383ef;
				position: relative;

				.main {
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

				.title {
					width: 164px;
					text-align: center;
					line-height: 88px;
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					margin: auto;
					font-size: 36px;
					color: #fff;
				}
			}
		}

		.user-info {
			height: 168px;
			width: 100%;
			padding: 0 20px;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.icon {
				font-size: 52px;
				color: #414141;
			}

			.address {
				width: 567px;
				font-size: 24px;
				color: #3b3b3b;

				>div {
					display: flex;
					justify-content: space-between;
					margin-bottom: 24px;
				}
			}

			.right {
				font-size: 32px;
				color: #707070;
			}
		}

		.proinfo {
			background: #e2e2e2;
			display: flex;
			padding: 0 20px;
			box-sizing: border-box;

			img {
				display: block;
				margin-right: 30px;
				width: 208px;
				height: 215px;
			}

			.text {
				p {
					line-height: 38px;
					width: 397px;
					font-size: 24px;
					color: #222222;
				}

				.color {
					line-height: 80px;
					color: #545454;
				}

				.num {
					display: flex;
					justify-content: space-between;

					span {
						color: #545454;
						font-size: 36px;

					}

					span.price {
						color: #f31e1e;

						i {
							font-size: 20px;
						}
					}
				}
			}
		}

		.main {
			padding: 0 20px;
			box-sizing: border-box;

			ul {

				li {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 78px;
					font-size: 24px;
					color: #464646;

					p {
						color: #949494;
					}
				}
			}

			.leav {
				width: 710px;
				height: 300px;
				margin: 0 auto;

				input {
					width: 100%;
				}
			}
		}

		.sub {
			width: 100%;
			height: 98px;
			position: absolute;
			bottom: 0;
			display: flex;
			align-items: center;
			flex-direction: row-reverse;

			p {
				width: 264px;
				font-size: 28px;
				color: #464545;

				span {
					color: #f81a1a;
				}
			}

			button {
				width: 225px;
				height: 100%;
				background: #4383ef;
				color: #fff;
			}
		}

		.paymentDateils {
			height: 100%;
			width: 100%;
			// position: absolute;
			background: #fff;

			.bg {
				height: inherit;
				width: 100%;
				position: absolute;
				top: 0;
				background: #000000;
				opacity: 0.5;
			}

			.mainA {
				height: 850px;
				width: 100%;
				background: #fff;
				position: fixed;
				bottom: 0;
				padding: 0 20px;
				box-sizing: border-box;
			}

			.title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 119px;
				border-bottom: 1px solid #dddddd;

				span {
					font-size: 40px;
					color: #707070;
				}

				.doubt {
					color: #26b3e7;
				}

				h3 {
					font-size: 40px;
					color: #222121;
				}
			}

			ul {
				li {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 84px;
					width: 100%;
					border-bottom: 1px solid #dddddd;
					font-size: 28px;
					color: #515050;

					.price {
						color: #e41515;
					}
				}
			}

			button {
				height: 80px;
				width: 100%;
				color: #fff;
				background: #4383ef;
				margin-top: 325px;
				font-size: 36px;
			}
		}

		.fade-enter-active,
		.fade-leave-active {
			transition: opacity .8s;
		}

		.fade-enter,
		.fade-leave-to {
			opacity: 0;
		}
	}
</style>
