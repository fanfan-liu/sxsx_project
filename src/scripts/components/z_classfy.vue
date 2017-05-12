<template>
<div class="m-index">
	<header>
	 <router-link to="/classfy/search">
		<mt-search  cancel-text="取消"	placeholder="支持首字母搜索">
   </mt-search>
	</router-link> 
	</header>
	<article>
		<!--左边  -->
	  <div id="wrapper-nav">
			<ul class="wr_ul">
				<li><p>推荐</p></li>
			 <li v-for="(item,index)  in items" :key="index" @click="tab(index)">
				<!--<p  :class='{active:activeIndex === index}'> {{item.message}}</p>-->
				<p> {{item.message}}</p>
			 </li>
			</ul>
	  </div>
		<!-- 右边 -->
	  <section id="wrapper">
			<!--第一页-->
		<ul>
			<li v-for="(item,index) in itemlist" class="mine">
			<router-link to="/z_detail" >
				<p>{{item.name}}</p>
				<ul class="class-item">
					<li v-for="(item1,index1) in item.children">
						<img :src="item1.imgUrl" alt=""/>
						<div>{{item1.name}}</div>
					</li>
				</ul>
				</router-link>
			</li>
			
		</ul>
		
	<ul class="elseList" >
	<div>{{activeIndex}}</div>
			<li v-for="(ulItem,index) in ulItemList.slice((activeIndex)*8,(activeIndex)*8+8)">
		    <img :src="ulItem.checkicon"/>
			<div>{{ulItem.name}}</div>
		   
		 </li>
	</ul>
   </section>
	</article>
</div>
</template>
<script>
// import $ from 'jquery'
import Vue from 'vue'
 import { Search } from 'mint-ui';
 import 'mint-ui/lib/style.css';
 Vue.component(Search.name, Search);
 
import utilAxios from '../utils/axios.js'

 
	export default{ //module.exports
 data(){
	return {
		items:[
	 
		{message:'中餐名菜'},
		{message:'家常菜'},
		{message:'环球美味'},
		{message:'健康熟制'},
		{message:'儿童专区'},
		{message:'蔬菜'},
			{message:'水果'},
		{message:'肉禽蛋'},
		{message:'水产海鲜'},
		{message:'乳饮速食'},
		{message:'粮油副食'}
		],
    itemlist:[],
     name:'',
     ulItemList:[],
	 activeIndex:""
	}
  },
  methods:{
	 tab: function(index){
         this.activeIndex = index;
		  console.log(index)
          }

  },
	mounted:function(){ //生命周期函数 相当于 new Vue({})
	// console.log(0)
	let that = this;
	 
	//  utilAxios.get({
	// 	 url:'api/client/v1/goods/imgLoopList?parameters={"goodsGuid":"'+goodsid+'"}',
	// 	 mathod:"get",
	// 	 callback:function(res){
	// 		 that.imglist=that.imglist.concat(res.data.data);
	// 		 // console.log(res.data.data);
	// 		 // console.log(that.imglist)
	// 	 }
	//  }),


    utilAxios.get({
    url:'/api/client/v1/goods/GetCategoryRecommendList',
    mathod:"get",
    callback:function(res){
       that.itemlist=that.itemlist.concat(res.data.data);
		that.name = res.data.name
	// console.log(res.data.data)
        }
    }),

    utilAxios.get({
	  url:'/api/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D',
		mathod:'get',
		callback:function(res){
		  that.ulItemList = that.ulItemList.concat(res.data.data);
	 console.log( that.ulItemList[0])
		}
	})

	}
	}

</script>
