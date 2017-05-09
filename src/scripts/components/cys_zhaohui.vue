<template>
	<div class="m-zhuce">		
		<div class="m-login">
			<header class="yo-header">
				<b>找回密码</b>
				<b class="regret"><router-link to="/login">〈</router-link></b>
			</header>
			<div class="cys-test cys-first">
				<input class="cys-input" type="text" placeholder="输入手机号"/>
			</div>
			<div class="cys-test">
				<input class="cys-shuru" type="text" placeholder="输入验证码"/>
				<div class="cys-huoqu">获取验证码</div>
			</div>
			<div class="yo-btn">
				<button><b>下一步</b></button>
			</div>
		</div>	
	</div>	
</template>
<script>
	export default {		
	}
</script>