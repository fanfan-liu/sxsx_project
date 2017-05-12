<template>
	<div class="m-login">
		<header class="yo-header title">
			<b>登录</b>
			<router-link to="/" class="regret">返回</router-link>
		</header>
		<section class="yo-list">
			<div class="item">
				<input type="text" placeholder="账号" @keyup="user" v-model="username"/>
			</div>
			<div class="item">
				<input type="password" placeholder="密码" v-model="password"/>
			</div>
			<div class="yo-btn">
				<button @click="denglu"><b>登录</b></button>
			</div>
				<div class="cys-huiyuan"><router-link to="/register">会员注册</router-link></div>
				<b class="cys-zhaohui"><router-link to="/zhaohui">找回密码</router-link></b>
		</section>
	</div>
</template>
<script >
import Vue from 'vue'
import utilAxios from '../utils/axios'
export default {
  data(){
    return {
      username: '',
      password: '',
      storeName: ''
    }
  },
  methods: {
  	user:function(){
  		var tel='/^1[34578]\d{9}$/';
  		if(!tel.test(this.username)){
  			this.bool=true
  		}else{
  			this.bool=false
  		}
  	},
    denglu: function () {
      let that = this
      utilAxios.post({
        url: '/nodejs/users/login',
        method: 'post',
        data: `username=${this.username}&password=${this.password}`,
        callback: function (res) {
          if (res.data.username) {
            that.hideModal()
            localStorage.setItem('username', res.data.username)
            that.storeName = res.data.username
          }
        }
      })
    }
  }
}
</script>
