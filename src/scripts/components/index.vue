<template lang="html">
  <div class="lf_index">
    <section>
      <router-view></router-view>
    </section>
    <nav>
      <ul>
        <router-link tag="li" to="/index" class="yo-ico"  active-class="active">
          <span><i>&#xe501;</i><b>首页</b></span>
        </router-link>
        <router-link tag="li" to="/fenlei" class="yo-ico"  active-class="active">
          <span><i>&#xe600;</i><b>分类</b></span>
        </router-link>
        <router-link tag="li" to="/shopcar" class="yo-ico"  active-class="active">
          <span><i>&#xe62a;</i><b>购物车</b></span>
        </router-link>
        <router-link tag="li" to="/user" class="yo-ico"  active-class="active">
          <span><i>&#xe6a3;</i><b>我的</b></span>
        </router-link>

      </ul>
    </nav>
  </div>
</template>

<script>

</script>
