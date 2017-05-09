<template>
	<div class="m-zhuce">
		<div class="m-login">
			<header class="yo-header">
				<b>个人资料</b>
				<b class="regret yo-ico" @click="back">&#xf07d;</b>
			</header>
			<section>
				<div class="cys-item1">
					<p class="cys-p-left">我的头像</p>
					<img  class="cys-touxiang" src="../../assets/cys-tou.png"/>
					<p class="cys-p-right">〉</p>
				</div>
				<div class="item">
					<p class="cys-p-left">我的昵称</p>
					<p class="cys-p-right">〉</p>
				</div>
				<div class="item">
					<p class="cys-p-left">出生日期</p>
					<p class="cys-p-right">〉</p>
				</div>
				<div class="item">
					<p class="cys-p-left">性别</p>
					<p class="cys-p-right"><router-link to="/date">〉</router-link></p>
				</div>
				<div class="cys-item5">
					<p class="cys-p-left">收货地址</p>
					<p class="cys-p-right">〉</p>
				</div>
			</section>
		</div>
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
<style>
</style>
