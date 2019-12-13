<template>
  <div class="det02_all" ref="bgcolor">
     <div class="all_next">
        <div class="header">

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
               padding:19px 14px;
            }
        }
    }
</style>