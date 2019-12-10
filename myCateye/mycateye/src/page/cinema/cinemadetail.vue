<template>
  <div>
     <div class="screen">
       <div class="city"><router-link>北京</router-link></div>
       <!--class=city是地址-->
       <div class="switch">
         <router-link>正在热映</router-link>
         <router-link>即将热映</router-link>
       </div>
       <!--class='switch是正在热映,和即将上映-->
       <div class="sear">
         <router-link>
           <i class="fa fa-sun-o"></i>
         </router-link>
       </div>
       <!--class=sear是搜索-->
     </div>
     <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
@import url(../style/index.less);


</style>