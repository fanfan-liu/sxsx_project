<template lang="html">
  <div class="lf_searchbox">
    <div class="yo-header lf_search_top">
      <div class="title"><span class="yo-ico">&#xf067;</span><input type="text" placeholder="请输入要查询的商品" name="" value="" v-model="data"></div>
      <span class="regret yo-ico" @click="back"></span>
      <!-- <span class="affirm">搜索</span> -->
      <router-link :to="`/classfy/searchlist/${data}`" tag="span" class="affirm yo-ico">搜索</router-link>
    </div>
    <h2 class="hot_search">热门搜索</h2>
    <div class="hot_list">
      <!-- <span v-for="(item,index) in hotList">{{item.name}}</span> -->

  <router-link :to="`/classfy/searchlist/${item.name }`" tag="span" v-for="(item,index) in hotList">{{item.name}}</router-link>


    </div>
    <h2 class="hot_search">历史搜索</h2>
    <div class="history_list">
      <ul>
        <li>鱼</li>
      </ul>
    </div>
    <div class="clear_history">
      <input type="button" name="clear" value="清除搜索历史">
    </div>
  </div>
</template>

<script>
import utilAxios from '../utils/axios';
export default {
  data(){
    return{
        hotList:[],
        data:''
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  },
  mounted:function(){
    let that=this;
    utilAxios.get({
      url:'http://api5.wochu.cn/client/v1/goods/SearchByTag',
      mathod:"get",
      callback:function(res){
        that.hotList=that.hotList.concat(res.data.data);
        console.log(res.data.data)
      }
    })
  }
}
</script>

<style lang="scss">

</style>
