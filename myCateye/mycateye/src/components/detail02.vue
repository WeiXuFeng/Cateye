<template>
  <div class="det02_all" ref="bgcolor">
     <div class="all_next">
        <div class="header">
           <div class="img"><img :src="first.img" alt=""></div>
           <div class="content">
               <p>{{first.nm}}</p>
               <p>{{first.enm}}</p>
               <p>{{first.cat}}</p>
               <p>{{first.star}}</p>
               <p>{{first.pubDesc}}/{{first.episodeDur}}分钟</p>
               <p>
                   <span> <i class="fa fa-heart-o"></i><b>想看</b></span>
                   <span><i class="fa fa-star-o"></i><b>看过</b></span>
               </p>
           </div>
        
        </div>
        <div class="wantTo">
            <div><span>{{first.scoreLabel }}</span><span>{{first.sc}}</span>
            </div>
            <div class="jianjie">
                <p>简介</p>
                <div>{{first.dra}}</div>
            </div>
        </div>

    </div>  
  </div>
</template>

<script>
import {imgdetail} from '../api.js'
export default {
    data(){
        return {first:[]}
    },
    methods:{
        after(list){
            let {img} =list;
            var c=img.replace(/w\.h\//g, "")
            list.img=c;
            return list
        }
    },
    created(){
        var id = this.$route.query.id;
        imgdetail(id).then(data => {
       let abcd= this.after(data.detailMovie)
       console.log(data)
        this.first=abcd;
        this.$refs.bgcolor.style.background=data.detailMovie.backgroundColor; 
    })
},
}
</script>

<style lang='less'>
@import url(../style/index.less);
    .det02_all{
        
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        // background:yellow;
        font-size:12px;
        color:#fff;
        .all_next{
            width: 100%;
            height:100%;
            .header{
               width: 100%;
               .h(125);
               overflow: hidden;
                display: flex;
                justify-content: flex-start;
               padding:19px 14px;
               .img{
                   float: left;
                   .w(90);
                   .h(125);
                    img{
                        .w(90);
                        .h(125);
                    }
               }
               .content{
                   flex-grow: 1;
                    margin-left: .24rem;
                    display: flex;
                    flex-flow: column;
                    justify-content: space-between;
                    overflow: hidden;
                   p:nth-child(1){
                       text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        font-weight: 700;
                        font-size:18px;
                   }
                   p:nth-child(2){
                       font-size:10px;
                       opacity: 0.6;
                       text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                   }
                    p:nth-child(3){
                       font-size:10px;
                       opacity: 0.6;
                       text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                   }
                    p:nth-child(4){
                       font-size:10px;
                       opacity: 0.6;
                       text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                   }
                   p:nth-child(5){
                       font-size:10px;
                       opacity: 0.6;
                       text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                   }
                   p:nth-child(6){
                       .w(230);
                       .h(29);
                    span{
                        .w(100);
                        .h(30);
                        text-align: center;
                        background: hsla(0,0%,100%,.35);
                        box-shadow: 0 0.02rem 0.08rem 0 rgba(0,0,0,.1);
                        border-radius: .08rem;
                        font-size: .28rem;
                        color: #fff;
                        display: inline-block;
                        margin:0 5px 0 5px;
                    }
                   }
               }
            }
            .wantTo{
                .w(331);
                height: auto;
                padding: 0 14px;
                .jianjie{
                    width:100%;
                    .h(70);
                    overflow: hidden;
                    white-space:nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>