<template lang="html">
  <div class="goodlist">
  <ul>
    <li v-for="(item,index) in adImgs"><a href="#">
      <img :src="item.items[0].imgUrl" v-if="item.items.length==1" alt="">
      <ul v-else="item.items.lenght>1">
        <li v-for="(item1,index1) in item.items">
            <a href="#"><img :src="item1.imgUrl" alt=""></a>
            <p>{{item1.goodsName}}</p>
            <p>{{item1.marketPrice}}</p>
            <p>￥{{item1.price}}</p>
            <img class="addcart" src="../../../static/images/addcart.png" alt="">
        </li>
      </ul>
    </a></li>
  </ul>
  </div>
</template>

<script>
import utilAxios from '../utils/axios';
export default {
  data(){
    return{
        adImgs:[]
    }
  },
  mounted:function(){
    let that=this;
    utilAxios.get({
      url:'api/client/v1/actsamend?parameters={"version":"20.0.0","source":"H"}',
      mathod:"get",
      callback:function(res){
        that.adImgs=that.adImgs.concat(res.data.data.acts);
        console.log(res.data.data.acts)
      }
    })
  }
}
</script>

<style lang="css">
</style>
