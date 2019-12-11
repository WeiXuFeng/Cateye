<template>
  <div>
    <div class="all_first">
      <router-link to="/move" class="routers" active-class="select">
        <div class="first">
          <i class="fa fa-weibo" ></i>
          <div>电影</div>
        </div>
      </router-link>
      <router-link to="/cinema" class="routers" active-class="select">
        <div class="first">
            <i class="fa fa-github-square"></i>
            <div>电影院</div>
        </div>
      </router-link>
      <router-link to="/user/sign" class="routers" active-class="select">
        <div class="first">
          <i class="fa fa-user-o"></i>
          <div>我的</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import move from "./move.vue";
import cinema from "./cinema.vue";
import user from "./user.vue";
export default {
  components: {
    move,
    cinema,
    user
  }
};
</script>

<style lang='less'>
.all_first {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  background: #fff;
  border-top:1px solid #ccc;
  .routers {
    width: 33%;
  }
  .first {
    display: flex;
    flex-direction: column;
    font-size: 0.5rem;
  }
  .screen{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.select{
    color:#f03d37;
    .first{
        i{
            color: #f03d37;
        }
    }
}
}
</style>