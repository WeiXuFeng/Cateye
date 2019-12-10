<template>
  <div id="app">
    <div class="centent">
      <router-view></router-view>
    </div>
      
      <all class="bottom"></all>
  </div>
</template>
<script>
import all from '../src/components/all.vue'
export default {
  components:{
  all,
  }
}
</script>
<style lang="less">
@import url('./style/index.less');

#app{
  width:100%;
  height: 100%;
    display:flex;
    flex-direction:column;
    overflow: hidden;
  .centent{
            height: 100%;
            width:100%;
            flex-grow: 1;
          }  
  
  .bottom{
    width:100%;
    display: flex;
    height:48px;
    width:100%;
    border-top: .5px solid #d8d8d8;
  }
  i{
    // color:#696969;
    font-size:25px;
  }
}
</style>
