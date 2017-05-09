<template>
	<div class="m-login">
		<header class="yo-header">
			<b>设置</b>
			<b class="regret c_return yo-ico" @click="back">&#xf07d;</b>
		</header>
		<section>
			<div class="item">
				<p class="cys-p-left">个人资料</p>
				<p class="cys-p-right">〉</p>
			</div>
			<div class="item">
				<p class="cys-p-left">账户安全</p>
				<p class="cys-p-right">〉</p>
			</div>
			<div class="item cys-item-center">
				<p class="cys-p-left">客服电话</p>
				<p class="cys-p-right">〉</p>
			</div>
			<div class="item cys-item-last">退出账户</div>
		</section>
	</div>
</template>
<script>
export default {
methods: {
	back: function () {
		this.$router.go(-1)
	}
}
}
</script>
<style long="scss">
.c_return{
	color:#000 !important;
}
</style>
