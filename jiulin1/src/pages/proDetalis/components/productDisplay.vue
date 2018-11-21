<template>
	<div class="productDisplay">
		<p>产品展示页</p>
		<img src="../../../images/detalis/pro_details01.png" alt="">
		<p>场景实拍</p>
		<img src="../../../images/detalis/pro_details02.png" alt="">
	</div>
</template>

<script>
	export default {
		name: "productDisplay",
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped lang="less">
	.productDisplay{
		p{
			height: 76px;
			line-height: 76px;
			width: 100%;
			background: #f5e424;
			text-align: center;
			font-size: 36px;
			color: #000000;
		}
		img{
			display: block;
			width: 750px;
		}
	}
</style>
