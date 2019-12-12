<template>
  <div class="all">
    <div class="look">
      <div class="Hrow">
        <p class="sizeone">最近最受期待</p>
        <ul class="rowmove">
          <li class="express" v-for="(item,index) in list" :key="index">
            <div class="img">
              <img :src="item.img" alt />
              <div class="whit"></div>
              <span>
                <b>{{item.wish}}</b>人想看
              </span>
            </div>
            <div class="bottom">
              <h3>{{item.nm}}</h3>
              <h4>{{item.comingTitle}}</h4>
            </div>
          </li>
        </ul>
      </div>
      <div class="Hcol">
        <div class="go">
          <ol>
            <li class="allTo" v-for="(items,index) in from" :key="index" v-on:click="jump(items.id)">
              <div class="img">
                <img :src="items.img" alt />
              </div>
              <div class="specific">
                <p>{{items.nm}}</p>
                <p>
                  <span>{{items.wish}}</span>人想看
                </p>
                <p>
                  主演:
                  <span>{{items.star}}</span>
                </p>
                <p>
                  <span>{{items.rt}}</span>上映
                </p>
              </div>
              <div class="yushou">
                <p>预售</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { gitExpect, future } from "../../api.js";

export default {
  data() {
    return { list: [], from: [] };
  },
  methods: {
    // horizontal 对数据中的img进行操作
    horizontal(data) {
      for (var i = 0; i < data.length; i++) {
        let { img } = data[i];
        var abc = img.replace(/w\.h\//g, "");
        data[i].img = abc;
      }
      return data;
    },
    froms(data1) {
      // console.log(data1);
      for (var a = 0; a < data1.length; a++) {
        let { img } = data1[a];
        var c = img.replace(/w\.h\//g, "");
        data1[a].img = c;
      }
      return data1;
    },
    jump(id){
     this.$router.push({path:'/move/detail/soon/details',query:{id:id}})
    }
  },
  created() {
    gitExpect().then(data => {
      
      let list = this.horizontal(data.coming);
      this.list = list;
      // console.log(this.list)
    });
    future().then(data1 => {
      let atricle = this.froms(data1.coming);
      this.from = atricle;
    });
  }
};
</script>

<style lang='less'>
@import url(../../style/index.less);
.all {
  width: 100%;
  height: 500px;
  .look {
    width: 100%;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;
    // .Hrow 是横排
    .Hrow {
      width: 100%;
      .h(200);
      color: #777;
      font-size: 14px;
      padding: 12px 12px 12px 15px;
      border: 1px solid #ccc;
      border-left: none;
      border-right: none;
      margin-bottom: 10px;
      overflow: hidden;
      .sizeone {
        font-size: 14px;
        margin: 0;
        color: #333;
      }
      margin-bottom: 12px;
      .rowmove {
        overflow: scroll;
        white-space: nowrap;
        width: 100%;
        height: 100%;
        .express {
          // 每个li的css
          .w(85);
          .h(156);
          margin-right: 15px;
          display: inline-block;
          position: relative;
          .img {
            // 图片的外盒子
            .w(85);
            .h(115);
            position: relative;
            img {
              // 图片
              .w(85);
              .h(115);
              z-index: 6;
            }
            span {
              position: absolute;
              left: 4px;
              bottom: 2px;
              color: #faaf00;
              font-size: 11px;
              font-weight: 600;
            }
            .whit {
              position: absolute;
              width: 100%;
              height: 30px;
              background-image: linear-gradient(
                -180deg,
                rgba(77, 77, 77, 0),
                #000;
              );
              bottom: 0px;
            }
          }
          .bottom {
            display: block !important;
            overflow: hidden;
            h3 {
              height: 15px;
              width: 100%;
              color: #333;
              margin-bottom: 3px;
              font-size: 13px;
              display: block;
              white-space: nowrap;
            }
            h4 {
              height: 15px;
              width: 100%;
              display: block;
              font-size: 12px;
              color: #999;
              white-space: nowrap;
              font-weight: normal;
            }
          }
        }
      }
    }
    // 下半部分
    .Hcol {
      width: 100%;
      height: auto;
      position: relative;
      // go 是数据层
      .go {
        width: 100%;
        height: 100%;
        position: relative;
        .allTo {
          // allto 是li 每一个allto是一个li  li中分成三个,  横排布局,
          //  li  是渲染的数据样式  三个内容为 .img .specific  .yushou
          margin-left: 15px;
          height: 90px;
          max-height: 90px;
          position: relative;
          font-size: 12px;
          padding: 12px 0 12px 0;
          white-space: nowrap;
          .img {
            //img 是图片
            width: 64px;
            height: 90px;
            float: left;
            margin-right: 15px;
            img {
              width: 64px;
              height: 90px;
            }
          }
          .specific {
            float: left;
            p:nth-child(1) {
              font-size: 17px;
              color: #333;
              font-weight: 700;
              padding-right: 5px;
              flex-shrink: 1;
            }
            p:nth-child(2){
              font-size:13px;
              color:#666;
              
              span{
                font-weight: 700;
                color: #faaf00;
                font-size: 15px;
              }
            }
            p:nth-child(3){
              .w(190);
              font-size:13px;
              color:#666;
              margin-top:6px;
              .l_h(15);
               text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            p:nth-child(4){
              font-size:13px;
              color:#666;
              margin-top:6px;
              .l_h(15)
            }

          }
          .yushou{
            float:left;
            font-size:12px;
           height: 100%;
            width: 50px;
            position: absolute;
            right: 30px;
            
            p{
              margin-top:65%;
              background-color: #3c9fe6;
              width: 47px;
              height: 27px;
              text-align: center;
              border-radius: 4px;
              color:#fff;
              line-height: 28px;
              font-size:12px;
            }
          }
        }
      }
    }
  }
}
</style>