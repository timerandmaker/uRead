<template>
  <div id="content">
    <keep-alive exclude="mine">
      <router-view></router-view>
    </keep-alive>
    <!-- 底部tabbar导航栏 -->
    <van-tabbar v-model="active" :route="true">
      <van-tabbar-item to="/bookshelf" :icon="active==0?'column':'newspaper-o'">书架</van-tabbar-item>
      <van-tabbar-item to="/selected" :icon="active==1?'gem':'gem-o'">精选</van-tabbar-item>
      <van-tabbar-item to="/find" :icon="active==2?'eye':'closed-eye'">发现</van-tabbar-item>
      <van-tabbar-item to="/mine" :icon="active==3?'smile':'smile-o'">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    //重置因为页面刷新，icon无法正常切换问题
    resetIcon() {
      const path = this.$route.path;
      switch (path) {
        case "/bookshelf":
          this.active = 0;
          break;
        case "/selected":
          this.active = 1;
          break;
        case "/find":
          this.active = 2;
          break;
        case "/mine":
          this.active = 3;
          break;
      }
    }
  },
  created() {
    this.resetIcon();
  }
};
</script>

<style lang="scss" scoped>
#content {
  height: 100%;
}
</style>