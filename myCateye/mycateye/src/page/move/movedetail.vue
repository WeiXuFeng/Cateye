<template>
  <div id="move_title">
    <div class="Viewlayer">
      <!--View layer 这是视图层 -->
      <div class="content">
        <ul>
          <li class="file" v-for="(item,index) in list" :key="index">
            
            <div class="img"><img :src="item.img" alt=""></div>
            <div class="some">
              <p>{{item.nm}}</p>
              <p>观众评<b>{{item.sc}}</b></p>
              <p>主演:{{item.star}}</p>
              <p>{{item.showInfo}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import bs from 'better-scroll'
import {gitrecommend} from '../../api.js'
export default {
  data(){
    return {list:[],abc:[]}
  },
  methods:{

    getmoveimg(data){
      for (let index = 0; index < data.length; index++) {
        let  {img} =data[index]
      console.log(img);
       let  img2=img.split("/")[2]
       let  img4=img.split("/")[4]
       let  img5=img.split("/")[5]
       let image=`https://${img2}/${img4}/${img5}`
       data[index].img=image

        
      }
      return data
    },
    initBs(){
      new bs('.Viewlayer')
    }
 },
created(){
  gitrecommend()
  .then(data=>{
    this.abc=data
    let list= this.getmoveimg(data.movieList);
     this.list=list
  })
},
mounted(){
  this.initBs();
},

}
</script>

<style lang='less'>
@import url(../../style/index.less);
#move_title{
  .Viewlayer{
     width:100%;
    height: 500px;
    .content{
      .file{
        margin:0 0 0 15px;
        color:#666666;
       width: 100%; 
           .img{
             margin-top:12px;
              padding:5px;
             display: inline-block;
             img{
              width:64px;
              height:90px;
                        
             }        
        }
        .some{
          display: inline-block;
          vertical-align: top;
          margin-top:12px;
          .w(195);  
          padding: 0 14px 12px 0;
          height: 90px;
          font-size: 13px;
          :nth-child(1){
            font-size: 17px;
            color:#333;
            font-weight: 700;
          }
          :nth-child(2){
            b{
              font-weight: 700;
              color: #faaf00;
              font-size: 15px;
            }
          }
          :nth-child(3){
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-top:6px;
          }
          :nth-child(4){
            margin-top:6px;
          }
        }
      }
    } 
  }
}
</style>