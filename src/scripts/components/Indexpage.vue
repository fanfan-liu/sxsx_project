<template lang="html">
  <div class="box">
      <div class="yo-header index_top">
        <h2 class="title">请填写地址<span class="yo-ico address">&#xf2ae;</span></h2>
        <span class="regret logo"><img src="../../../static/images/wc-logo.png" alt=""></span>
        <router-link to="/classfy/search" tag="span" class="affirm yo-ico">&#xf067;</router-link>
      </div>
      <div class="indexContent">
        <!-- 轮播图 -->
        <div class="lf_board">
          <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item,index) in dataSource" :key="index"><img :src="item.picUrl" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
        <!--本周特惠、超值团购、充值好礼、邀请好友  -->
        <div class="lf_board1">
          <ul>
            <li v-for="(item,index) in dataSource1">
              <img :src="item.imgUrl" alt="">
            </li>
          </ul>
        </div>
        <!-- 广告图片 -->
        <indexlist></indexlist>
      </div>

    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
import 'mint-ui/lib/style.css'
Vue.component(SwipeItem.name, SwipeItem);

import indexlist from './lf_indexList.vue';
Vue.component("indexlist",indexlist);
import utilAxios from '../utils/axios';
export default {
  data(){
    return{
        dataSource:[],
        dataSource1:[]
    }
  },
  mounted:function(){
    let that=this;
    utilAxios.get({
      url:'/api/client/v1/app/layoutamend?parameters={"version":"10.0.0","source":"H"}',
      mathod:"get",
      callback:function(res){
        that.dataSource=that.dataSource.concat(res.data.data.carousel);
        that.dataSource1=that.dataSource1.concat(res.data.data.recommendedContent[0].items);
      }
    })
  }
}
</script>

<style lang="css">
</style>
