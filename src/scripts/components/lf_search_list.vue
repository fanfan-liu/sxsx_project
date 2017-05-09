<template lang="html">
<div class="lf_searchbox lf_searchlist">
  <div class="yo-header lf_search_top">
    <div class="title"><span class="yo-ico">&#xf067;</span><input type="text" placeholder="请输入要查询的商品" name="" value="" v-model="data" v-on:keyup.13="search"></div>
    <span class="regret yo-ico" @click="back"></span>
    <!-- <span class="affirm">搜索</span> -->
    <router-link to="/shopcar" tag="span" class="affirm yo-ico">&#xe62a;</router-link>
  </div>
  <div class="lf_showList">
    <p>我厨为您找到"{{keyword}}"的相关结果{{count}}个</p>
    <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <ul>
      <li v-for="(item,index) in list">
        <dl>
            <router-link :to="`/classfy/showgood/${item.goodsGuid}`" tag="dt">
            <img :src="item.picUrl" alt=""></router-link>
          <dd>
            <router-link :to="`/classfy/showgood/${item.goodsGuid}`" tag="div">{{item.goodsName}}</router-link>
            <div class="description">{{item.description}}</div>
            <div><i>￥{{item.price}}</i><span>￥{{item.marketPrice}}</span></div>
            <img src="../../../static/images/addcart.png" class="addcart" alt="">
          </dd>
        </dl>
      </li>
    </ul>
    </mt-loadmore>
  </div>

</div>
</template>

<script>
import Vue from 'vue';
import utilAxios from '../utils/axios';
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
export default {
  data(){
    return{
      data:"",
      list:[],
      count:0,
      pageCount:0,
      index:1,
      keyword:"",
      allLoaded: false
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    search:function(){
        let that = this;
        that.keyword=that.data;
      utilAxios.get({
        url:'api/client/v1/goods/SearchByKeyword?parameters={"orderId":0,"pageIndex":1,"pageSize":20,"keyword":"'+that.data+'"}',
        mathod:"get",
        callback:function(res){
          that.list=[];
          that.list=that.list.concat(res.data.data.items);
          that.count=res.data.data.pagination.count;
          console.log(res.data.data.items)
          console.log(res.data.data.pagination.count)
          console.log(that.list)
        }
      })
    },
    loadBottom:function() {
      let that = this;
      that.index=that.index+1;
      // var pageCount=that.pageCount;
      utilAxios.get({
        url:'api/client/v1/goods/SearchByKeyword?parameters={"orderId":0,"pageIndex":'+that.index+',"pageSize":20,"keyword":"'+that.keyword+'"}',
        mathod:"get",
        callback:function(res){
          if(that.index < that.pageCount){
            that.list=that.list.concat(res.data.data.items);
            // that.allLoaded = true;// 若数据已全部获取完毕
          } else {
            that.allLoaded = true
          }
          that.$refs.loadmore.onBottomLoaded();
        }
      })
    }
  },
  mounted:function(){
    let that = this
    let type = that.$route.params.data;
    that.keyword=type;
    // console.log(type);
    utilAxios.get({
      url:'api/client/v1/goods/SearchByKeyword?parameters={"orderId":0,"pageIndex":1,"pageSize":20,"keyword":"'+type+'"}',
      mathod:"get",
      callback:function(res){
        that.list=that.list.concat(res.data.data.items);
        that.count=res.data.data.pagination.count;
        that.pageCount=res.data.data.pagination.pageCount;
        // console.log(res.data.data.items)
        console.log(that.pageCount)
      }
    })
  }
}
</script>

<style lang="css">
</style>
