<template>
	<div class="search">
		<div class="scan">
			<div class="iconfont">&#xe63d;</div>
			<p>扫一扫</p>
		</div>
		<inputSearch></inputSearch>
		<div class="info">
			<div class="iconfont">&#xe601;</div>
			<p>消息</p>
		</div>
	</div>
</template>

<script>
	import inputSearch from './input.vue'
	export default {
		name: "search",
		components: {
			inputSearch
		},
		data(){
			return{
				"val":""
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
	@bg:#4383ef;
	.search{
		width: 100%;
		height: 88px;
		background: @bg;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.scan{
			
			width:74px;
			div{
				width: 37px;
				height: 37px;
				margin: 0 auto;
				line-height: 38px;
				background: #fff;
				font-size: 26px;
				text-align: center;
				color: @bg;
			}
			p{
				font-size: 24px;
				color: #fff;
			}
		}
		.form{
			form{
				position:relative ;
				span{
					position: absolute;
					top: 14px;
					left: 18px;
					font-size: 36px;
					color: #9b9b9b;
				}
				input{
					padding-left: 70px;
					padding-right: 48px;
					font-size: 24px;
					color: #bcbcbc;
					height: 60px;
					width: 357px;
					border-radius: 4px;
				}
				i{
					position: absolute;
					top: 20px;
					right: 22px;
					// margin-right: -9px;
					font-size: 20px;
				}
			}
		}
		.info{
			width: 52px;
			div{
				font-size: 40px;
				color: #fff;
			}
			p{
				line-height: 32px;
				font-size: 24px;
				color: #fff;
			}
		}
	}
</style>
