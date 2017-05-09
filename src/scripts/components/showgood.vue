<template lang="html">
  <div class="showgood">
    <div class="goodcontent">
      <div class="imglist">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in imglist">
            <img :src="item.picUrl" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <div class="yo-ico return"  @click="back">&#xf07d;</div>
      </div>
      <div class="detail">
        <div class="goodtitle">{{goodobj.goodsName}}</div>
        <div class="price">
          <p><span>￥{{goodobj.price}}</span><i>￥{{goodobj.marketPrice}}</i></p>
          <div class="goodnum">
            <span @click="sub">-</span>
            <input type="text" readonly="true" name="" value="1" v-model="number">
            <span @click="add">+</span>
          </div>
        </div>
      </div>
      <div class="pingjia">
        <span>商品评价</span> <span class="yo-ico">&#xf07f;</span>
      </div>
      <div class="content">
        <table>
          <tr>
            <td colspan="2"><b>品名：</b>{{goodobj.goodsName}}</td>
          </tr>
          <tr>
            <td><b>产地：</b>{{goodobj.origin1}}</td>
            <td><b>保质期：</b>{{goodobj.shelfLife}}</td>
          </tr>
          <tr>
            <td><b>存储条件：</b>{{goodobj.storageCondition}}</td>
            <td><b>规格：</b>{{goodobj.specification}}</td>
          </tr>
        </table>
      </div>
      <!-- 猜你喜欢 -->
      <div class="m-boardlist" >
        <h1>
          猜你喜欢
        </h1>
        <ul>
          <router-link tag="li" :to="`/classfy/showgood/${item.goodsGuid}`" v-for="(item,index) in like">
            <img :src="item.picUrl" alt="">
            <div class="like_title">{{item.goodsName}} </div>
            <span class="like_price">￥{{item.price}}</span>
            <img class="addcart" src="../../../static/images/addcart.png" alt="">
          </router-link>
        </ul>
      </div>
      <div class="descriptionDetail" v-html="html"></div>
    </div>
    <div class="addshopcar">
        <router-link tag="div" :to="`/shopcar`" class="yo-ico detailcart">&#xe62a;
        </router-link>
        <div class="btn_add">
          加入购物车
        </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Vue from "vue";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import utilAxios from '../utils/axios';
import 'mint-ui/lib/style.css'
export default {
  data:function(){
    return{
      imglist:[],
      goodobj:{},
      number:1,
      like:[],
      html:""
    }
  },
  methods:{
    back: function () {
      this.$router.go(-1)
    },
    add:function(){
      this.number=this.number+1;
    },
    sub:function(){
      if(this.number>1){
        this.number=this.number-1;
      }else{
        this.number=1;
      }
    }
  },
  mounted:function(){
    let that = this
    let goodsid = that.$route.params.id;
    // console.log('api/client/v1/goods/imgLoopList?parameters={"goodsGuid":"'+goodsid+'"}');
    utilAxios.get({
      url:'api/client/v1/goods/imgLoopList?parameters={"goodsGuid":"'+goodsid+'"}',
      mathod:"get",
      callback:function(res){
        that.imglist=that.imglist.concat(res.data.data);
        // console.log(res.data.data);
        // console.log(that.imglist)
      }
    })
    utilAxios.get({
      url:'api/client/v1/goods/getInfo?parameters={"goodsGuid":"'+goodsid+'"}',
      mathod:"get",
      callback:function(res){
        that.goodobj=res.data.data;
        that.html=res.data.data.descriptionDetail
        // console.log(that.goodobj)
      }
    })
    utilAxios.get({
      url:'api/client/v1/goods/getGoodsRelevantList?parameters={"goodsGuid":"'+goodsid+'"}',
      mathod:"get",
      callback:function(res){
        that.like=that.like.concat(res.data.data.userloving);
        console.log(res.data.data.userloving)
      }
    })
  }
}
</script>

<style lang="scss">

</style>
