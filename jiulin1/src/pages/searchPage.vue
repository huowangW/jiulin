<template>
	<div class="searchPage">
		<div class="header">
			<div class="bg">
				<div class="main">
					<div onclick="javascript:window.history.back(-1);" class="return">
						<span class="iconfont">&#xe603;</span>
						<span>返回</span>
					</div>
					<div class="search">
						<form>
							<span class="iconfont">&#xe623;</span>
							<input v-model="val" type="text" placeholder="输入你想要的商品" />
							<i @click="val=null" class="iconfont">&#xe613;</i>
						</form>
					</div>
					<button class="submit" type="submit">搜索</button>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="HotSearch">
				<p>热门搜索</p>
				<ul>
					<li @click="search($event)" v-for="(item,index) in HotSearch" :key="index">
						{{item}}
					</li>
				</ul>
			</div>
			<div class="RecentSearch">
				<p><span>最近搜索</span><span @click="Delete()" class="iconfont">&#xe618;</span></p>
				<ul>
					<li @click="search($event)" v-for="(item,index) in RecentSearch" :key="index">
						{{item}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	// import searchPage from '@/pages/searchPage.vue'
	export default {
		name: "searchPage",
		data(){
			return{
				"val":"",
				"HotSearch":["LED创意灯","LED书房灯","LED简约灯","LED方形灯","LED圆形灯","LED远程灯","LED床头灯"],
				"RecentSearch":["LED圆柱灯","LED街边灯","LED线型灯"]
			}
		},
		methods: {
			Delete() {
				this.RecentSearch = ""
			},
			search(e){
				this.val = e.target.innerText
			}
		}
	}
</script>

<style scoped lang="less">
	.header {

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
				// justify-content: space-between;
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
				width: 538px;
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
						width: 400px;
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
			.submit{
				width: 88px;
				text-align: center;
				font-size: 24px;
				color: #fff;
				background: none;
			}
		}

	}
	.content{
		width: 750px;
		padding: 0 20px;
		box-sizing: border-box;
		.HotSearch{
			p{
				font-size: 28px;
				color: #323232;
				line-height: 70px;
			}
			ul{
				
				display: flex;
				flex-wrap: wrap;
				li{
					margin-right: 12px;
					width: 130px;
					height: 38px;
					line-height: 38px;
					text-align: center;
					background: #f1f1f1;
					font-size: 24px;
					color: #949494;
					margin-bottom: 23px;
				}
			}
		}
		.RecentSearch{
			p{
				font-size: 28px;
				color: #323232;
				line-height: 70px;
				display: flex;
				justify-content: space-between;
			}
			ul{
				
				display: flex;
				flex-wrap: wrap;
				li{
					margin-right: 12px;
					width: 130px;
					height: 38px;
					line-height: 38px;
					text-align: center;
					background: #f1f1f1;
					font-size: 24px;
					color: #949494;
					margin-bottom: 23px;
				}
			}
		}
	}
</style>
