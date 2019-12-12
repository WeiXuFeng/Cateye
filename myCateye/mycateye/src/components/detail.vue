<template>
  <div id="detail">
    <div id="detailstyle">
      <div class="header">
        <i class="fa fa-chevron-left" v-on:click="back"></i>
        <span>{{second.nm}}</span>
      </div>
      <div class="body">
        <div class="bg">
          <img :src="second.img" alt />
        </div>
        <!-- bg 是背景图,  bgs是具体的内容-->
        <div class="bgs">
          <div class="bigimg">
            <img :src="second.img" alt />
          </div>
          <div class="content">
            <p>{{second.nm}}</p>
            <p>{{second.enm}}</p>
            <p v-if="second.sc?true:false">{{second.scoreLabel}}{{second.sc}}</p>
            <p v-else>暂未评分</p>
            <p>{{second.cat}}</p>
            <p>{{second.src}}/{{episodeDur}}</p>
            <p>{{second.pubDesc}}</p>
          </div>
          <div class="three"><i class="fa fa-angle-right"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imgdetail } from "../api.js";
export default {
  data() {
    // return {list:this.$route.query,}
    return { second: [] };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    image(data5) {
      let { img } = data5;
      var c = img.replace(/w\.h\//g, "");
      data5.img = c;
      //  console.log(data5.img)
      return data5;
    }
  },
  created() {
    var id = this.$route.query.id;
    imgdetail(id).then(data => {
      var abc = this.image(data.detailMovie);
      console.log(abc);
      this.second = abc;
      //    console.log(this.second)
    });
  }
};
</script>

<style lang='less'>
@import url(../style/index.less);
#detail {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  #detailstyle {
    width: 100%;
    height: 100%;
    .header {
      font-size: @f-b;
      width: 100%;
      .h(50);
      position: relative;
      background: #e54847;
      border-bottom: 1px solid #e54847;
      .l_h(50);
      i {
        margin: 0 15px 0 15px;
        color: #fff;
      }
      span {
        .w(255);
        .h(50);
        display: inline-block;
        text-align: center;
        color: #fff;
      }
    }
    .body {
      width: 100%;
      .h(188);
      position: relative;
      .bg {
        filter: blur(15px);
        width: 100%;
        .h(188);
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
        }
      }
      .bgs {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        padding: 19px 30px 19px 15px;
        .content {
          float: left;
          color: #fff;
          font-size: @f-b;
          margin-left:12px;
          p:nth-child(1) {
            font-size: 20px;
            margin-top: 2px;
            font-weight: 700;
            overflow: hidden;
          }
          p:nth-child(2) {
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: 0.8;
          }
          p:nth-child(3) {
            font-size: 18px;
            font-weight: 700;
            color: #fc0;
            margin-top: 11px;
          }
          p:nth-child(5) {
            margin-top: 10px;
            font-size: 12px;
          }
          p:nth-child(6) {
            margin-top: 10px;
            font-size: 12px;
          }
        }
        .bigimg {
          float: left;
          .w(110);
          .h(150);
          img {
            .w(110);
            .h(150);
          }
        }
        .three{
          position: absolute;
            width: 10px;
            right: 15px;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
        }
      }
    }
  }
}
</style>     