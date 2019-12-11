<template>
  <div id="tem_move">
    <div class="headers">
      猫眼电影</div>
    <div class="screen">
      <div class="city">
        <router-link to=''>北京</router-link>
      </div>
      <!--class=city是地址-->
      <div class="switch">
        <router-link to='/move/detail' active-class="sel"><span>正在热映</span></router-link>
        <router-link to='/move/soon' active-class="sel"><span>即将热映</span></router-link>
      </div>
      <!--class='switch是正在热映,和即将上映-->
      <div class="sear">
        <router-link to=''>
          <i class="fa fa-sun-o"></i>
        </router-link>
      </div>
      <!--class=sear是搜索-->
    </div>
    <div class="view">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
@import url(../style/index.less);
#tem_move {
  .headers {
    width: 100%;
    .h(51);
    background: #e54847;
    text-align: center;
    font-size: @f-b;
    color: white;
    .l_h(50);
    
}
// .screen 下一共分为三部分
.screen{
      width:100%;
      height:44px;
      font-size: @f-c;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background:#fff;

      // .switch 是正在热映和即将上映
      .switch{
        .w(251);
        height:100%;
        display: flex;
        flex-direction: row;
        text-align: center;
        .l_h(44);
        
        a{
          display: inline-block;
          width:50%;
          color:#666;
          font-weight: 700;
        }
      }
      // sear 是放大镜的样式
      .sear{
        padding: 10px 15px 10px 10px;
        i{
          color:#e54847;
        }
        
      }
      // city 是地理位置
      .city{
        padding: 0 0 0 15px;
        color:#666666;
      }
}

.sel{
            color:#e54847;
            border-bottom: 2px solid #e54847;
            span{
              color:#e54847;
            }
        }
.view{
  overflow: hidden;
  width:100%;
  flex-grow: 1;
}
  }
  
</style>