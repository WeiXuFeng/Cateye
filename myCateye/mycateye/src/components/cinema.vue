<template>
  <div id="tem_cinema">
      <div class="look">
        <ul class="items">
          <li v-for="(item,index) in address" :key="index" class="specific">
            <p>{{item.nm}}</p>
            <p>{{item.addr}}</p>
            <span>{{item.sellPrice}}起</span>
            <p>{{item.distance}}</p>
            <p>
              <span v-if="item.hallType?true:false">{{item.hallType}}</span>
              <span>{{item.tag.vipTag}}</span>
            </p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {address} from '../api.js'
import axios from '../unit/axios'
export default {
data(){
  return {address:[]}
},
methods:{

},
created(){
  address()
  .then(data=>{
    this.address=data.cinemas
    console.log(this.address)
  })
}
}
</script>

<style lang='less'>
@import url(../style/index.less);
#tem_cinema{
    display: flex;
    justify-content: center;
    .look{
      width: 100%;
      height: 100%;
      .items{
        font-size:16px;
        width:100%;
        height: auto;
        overflow: scroll;
        
        .specific{
          padding: 13px 15px 13px 13px ;
          overflow: hidden;
        }
      }
    }
}
</style>