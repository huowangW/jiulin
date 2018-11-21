<template>
	<div class="addshop">
		<ul>
			<li>
				<div class="iconfont">&#xe605;</div>
				<p>客服</p>
			</li>
			<li>
				<div class="iconfont">&#xe62d;</div>
				<p>收藏</p>
			</li>
			<li>加入购物车</li>
			<li @click="addShop()">
				<router-link to="/confirmOrder">立即购买</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		name: "addshop",
		data() {
			return {
				
			}
		},
		methods:{
			addShop(){
				window.console.log(123)
			}
		}
	}
</script>

<style scoped lang="less">
	.addshop{
		height: 100px;
		border: 1px solid #e2e2e2;
		width: 100%;
		background: #fff;
		ul{
			display:flex;
			align-items: center;
			
			height: inherit;
			li{
				// padding-top: 10px;
			}
			li:nth-child(1){
				width: 152px;
				height: inherit;
				
				border-right: 1px solid #e2e2e2;
				text-align: center;
				color: #808080;
				.iconfont{
					margin-top: 12px;
					font-size: 48px;
				}
				p{
					font-size: 24px;
				}
			}
			li:nth-child(2){
				height: inherit;
				color: #808080;
				width: 173px;
				font-size: 24px;
				text-align: center;
				.iconfont{
					margin-top: 12px;
					font-size: 48px;
				}
			}
			li:nth-child(3){
				width: 212px;
				height: inherit;
				font-size: 32px;
				color: #fff;
				background: #f1eb3a;
				text-align: center;
				line-height: 100px;
			}
			li:nth-child(4){
				width: 212px;
				height: inherit;
				text-align: center;
				line-height: 100px;
				background: #f51d1d;
				a{
					font-size: 32px;
					color: #fff;
				}
			}
		}
	}
</style>
