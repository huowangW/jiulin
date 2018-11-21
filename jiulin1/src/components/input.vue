<template>
		<div class="inputSearch">
			<form>
				<span @click="searchClick()" class="iconfont">&#xe623;</span>
				<input @click="searchClick()" v-model="val" type="text" placeholder="输入你想要的商品" />
				<i @click="val=null" class="iconfont">&#xe613;</i>
			</form>
		</div>
</template>

<script>
	export default {
		name: "inputSearch",
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

<style scoped lang="less">
	.inputSearch{
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
</style>
