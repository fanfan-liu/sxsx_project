<template>	
	<div class="m-zhuce">		
		<div class="m-login">
			<header class="yo-header">
				<b>注册</b>
				<b class="regret"><router-link to="/login">〈</router-link></b>
			</header>
			<div class="cys-test cys-first">
				<input class="cys-input" type="text" @keyup="user" v-model="username" placeholder="输入手机号" name="username"/>
				<span v-if="bool">用户名不符合规则</span>
			</div>
			<div class="cys-test">
				<input class="cys-input" type="password" @keyup="pass" v-model="password" placeholder="密码由6-20位字符组成" name="password"/>	
				<span v-if="bol">密码不符合规则</span>
			</div>
			<div class="cys-test">
				<input class="cys-tpyz" type="text" placeholder="请输入图片验证码"/>
				<div class="cys-yzm">1111</div>
			</div>
			<div class="cys-test">
				<input class="cys-shuru" type="text" placeholder="输入验证码"/>
				<div class="cys-huoqu">获取验证码</div>
			</div>
			<div class="cys-test cys-last">
				<input class="cys-input" type="text" placeholder="输入邀请码(没有可跳过)"/>
			</div>
			<div class="yo-btn">
				<button @click="login"><b>注册并登录</b></button>
			</div>
			<div class="cys-xieyi">注册即您已同意<a href="">服务协议</a></div>
		</div>	
	</div>	
</template>
<script >
//import zcrouter from '../components/zcrouter'
var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient;//数据库下的 客户端，创建客户端
var DB_CONN_STR='mongodb://localhost:27017/1042';  //   将 端口 地址 这整理
import Vue from 'vue'
import utilAxios from '../utils/axios'
export default {
  	data(){
	    return {
	      	username: '',
	      	password: '',
	      	bool:false,
	      	bol:false
	    }
  	},
  	methods: {
	  	user:function(){
	  		var tel=/^1[34578]\d{9}$/;
	  		if(!tel.test(this.username)){
	  			this.bool=true
	  		}else{
	  			this.bool=false
	  		}
	  	},
	  	pass:function(){
			var pass=/^[0-9A-Za-z]{6,20}$/;
			if(!pass.test(this.password)){
				this.bol=true
			}else{
				this.bol=false
			}
		},
		login:{
//			var that=this;
//			router.post('/register',function(req,res){   //我们 接受到post  请求后的路由
//			    var username=req.body['username'],
//			        password=req.body['password'];     //  获取表单数据 表单内容
			   var inserData=function(db,callback){     //  自定义数据处理 函数 ， 自定一个回执函数
			    var conn=db.collection('wochu')   //获取当前数据库 我需要的集合   
			    var data=[{username:this.username,password:this.password}];  //   将数据存在变量中
			    conn.insert(data,function(err,result){   // 通过集合的insert（）向集合 添加文档 
				    if(err){   //  err  判断，   返回我的回执参数  result 
				      console.log(err)
				      return
				    }
			    	callback(result)
			  	})
//			}
			MongoClient.connect(DB_CONN_STR,function(err,db){    // 连接数据库连接 服务  一参数  mongodb的 服务地址，回调函数
			    if(err){
			       console.log(err)
			    }else{   //  在 成功中 操作  数据添加
			       	console.log('数据库连接成功')
			        inserData(db,function(result){   //  调用 我自定的 数据操作函数
			          	console.log(result)
			            console.log('注册成功')
			            res.send('注册成功')
			            db.close()
			        })
			    }
			})
		}
	}	
}

</script>
