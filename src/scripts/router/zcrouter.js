var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient;//数据库下的 客户端，创建客户端
var DB_CONN_STR='mongodb://localhost:27017/1042';  //   将 端口 地址 这整理
router.post('/register',function(req,res){   //我们 接受到post  请求后的路由
    var username=req.body['username'],
        password=req.body['password'];     //  获取表单数据 表单内容
    var inserData=function(db,callback){     //  自定义数据处理 函数 ， 自定一个回执函数
    var conn=db.collection('wochu')   //获取当前数据库 我需要的集合   
    var data=[{username:username,password:password}];  //   将数据存在变量中
    conn.insert(data,function(err,result){   // 通过集合的insert（）向集合 添加文档 
	    if(err){   //  err  判断，   返回我的回执参数  result 
	      console.log(err)
	      return
	    }
    	callback(result)
  	})
}
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
module.exports = router;




