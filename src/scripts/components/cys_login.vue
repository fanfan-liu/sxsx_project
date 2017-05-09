<template>
	<div class="m-login">
		<header class="yo-header title">
			<b>登录</b>
			<router-link to="/" class="regret" tag="span">返回</router-link>
		</header>
		<section class="yo-list">
			<div class="item">
				<input type="text" placeholder="账号"/>
			</div>
			<div class="item">
				<input type="password" placeholder="密码"/>
			</div>
			<div class="yo-btn">
				<button><b><router-link to="/denglu">登录</router-link></b></button>
			</div>
				<div class="cys-huiyuan"><router-link to="/register">会员注册</router-link></div>
				<b class="cys-zhaohui"><router-link to="/zhaohui">找回密码</router-link></b>
		</section>
	</div>
</template>
<script >

</script>
