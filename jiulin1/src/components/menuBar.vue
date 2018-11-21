<template>
	<div class="menuBar">
		<ul>
			<li @click="onClick(index)" :key="item.id" v-for="(item,index) of menuList" >
				<router-link :to='item.Href'>
					<div :class="index===on?'on':null">
						<div class="shadow"></div>
						<div>
							<img :src="item.imgUrl" />
							<span>{{item.Text}}</span>
						</div>
					</div>
				</router-link>
			</li>
			
		</ul>
	</div>
</template>

<script>
	export default {
		name: "menuBar",
		data(){
			return{
				"on":0,
				menuList:[{
					"id":0,
					"Href":"/",
					"imgUrl":require('../images/home/menuBar01.png'),
					"Text":"首页"
				},
				{
					"id":1,
					"Href":"/classify",
					"imgUrl":require('../images/home/menuBar02.png'),
					"Text":"分类"
				},
				{
					"id":2,
					"Href":"/order",
					"imgUrl":require('../images/home/menuBar03.png'),
					"Text":"订单"
				},
				{
					"id":3,
					"Href":"/user",
					"imgUrl":require('../images/home/menuBar04.png'),
					"Text":"我"
				},
				{
					"id":4,
					"Href":"/shopCart",
					"imgUrl":require('../images/home/menuBar05.png'),
					"Text":"购物车"
				}]
			}
		},
		methods:{
			onClick(q){
				
				this.on=q
				// window.console.log(123)
			}
		}
	}
</script>

<style lang="less" scoped>
	@bg:#4383ef;
	.menuBar {
		height: 98px;
		width: 100%;
		position: fixed;
		bottom: 0;
		background: @bg;
		ul {
			height: inherit;
			display: flex;
			justify-content: space-around;
			align-items: center;
			li {
				height: inherit;
				text-align: center;
				width: 100px;
				position: relative;
				/*line-height: 98px;*/
				div {
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
				}
				.on {
					/*position: relative;*/
					height: 106px;
					background: #eba51e;
					.shadow {
						width: 0;
						height: 0;
						border-width: 8px 7px 0px 0;
						border-style: solid;
						border-color: transparent #989897 transparent transparent;
						/*background: #989897;*/
						position: absolute;
						left: -6px;
						top: 1px;
					}
				}
				img {
					display: block;
					height: 50px;
					margin: 0 auto;
				}
				span {
					font-size: 26px;
					color: #fff;
					line-height: 36px;
				}
			}
			/*li.on{
				background: #eba51e;
				height: 106px;
			}*/
		}
	}
</style>