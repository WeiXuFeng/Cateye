<template>
  <div id="tem_cinema">
      <div class="headers">影院</div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
@import url(../style/index.less);
#tem_cinema{
    display: flex;
    justify-content: center;
    .headers{
      width:100%;
      .h(51);
      background: #e54847;
      text-align: center;
      font-size:@f-b;
      color:white;
      .l_h(50);
    }
}
</style>