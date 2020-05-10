<template>
  <div class="content">
    <van-tabbar v-model="active" :route="true">
      <van-tabbar-item to="/bookshelf" :icon="active==0?'column':'newspaper-o'">书架</van-tabbar-item>
      <van-tabbar-item to="/selected" :icon="active==1?'gem':'gem-o'">精选</van-tabbar-item>
      <van-tabbar-item to="/find" :icon="active==2?'eye':'closed-eye'">发现</van-tabbar-item>
      <van-tabbar-item to="/mine" :icon="active==3?'smile':'smile-o'">我的</van-tabbar-item>
    </van-tabbar>
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
    data() {
    return {
      active: 0,
    };
  }
};
</script>

<style lang="scss" scoped>

</style>