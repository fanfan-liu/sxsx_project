  
<template lang="html">
<div class="detail">
   <header class="yo-header yo-header-c">
        <h2 class="title"><p>特惠商品大回馈产品</p></h2>
         <a class="regret yo-ico" @click="back"></a>
    </header>
    <!--详情-->
    <div id="listMain">
        <div>特惠商品大回馈产品</div>
         <ul class="infoul">
             <!--<li v-for="info in infolist">-->
                 <router-link v-for="info in infolist" :to="`/classfy/showgood/${info.goodsGuid}`" tag="li">
                 <img :src="info.icon" alt="">
                 <span>{{info.goodsName}}</span>
                 <span>
                 <b>￥{{info.price}}</b>
                 <small>￥{{info.marketPrice}}</small>
                
                  <img src="../../../static/images/card.png"  @click= "Add"/>
                 </span>
                 </router-link>
             <!--</li>-->
             
         </ul>
    </div>
    
</div>
</template>

<script>
import Vue from 'vue';
//   import index from './index.vue'
import utilAxios from '../utils/axios.js'
export default {
    data(){
        return{
          infolist:[],
          icon:'',
          goodsName:''
        }
    },
    methods:{
     back:function () {
         this.$router.go(-1)
     },
     Add:function(){
         alert('添加成功')
     }
    },
    mounted:function(){
        console.log(2)
        let that = this;
         utilAxios.get({
            url:'http://wmall.wochu.cn/client/v1/goods/SearchByTagName?parameters={%27tagname%27:%27%E7%89%B9%E6%83%A0%E5%95%86%E5%93%81%E5%A4%A7%E5%9B%9E%E9%A6%88%27,%27orderId%27:%270%27,%27pageSize%27:6,%27pageIndex%27:1}',
            mathod:"get",
            callback:function(res){
            that.infolist=that.infolist.concat(res.data.data.items);
             console.log(res.data.data.items)
                }
            })
    }
}
</script>

<style lang="css">
</style>






