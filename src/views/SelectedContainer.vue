<template>
  <div id="selected">
    <!-- 顶部搜索 -->
    <div class="search" @click="$router.push('/search')">
      <img src="../assets/icons/search.png" />
    </div>
    <!-- 顶部导航 -->
    <van-tabs background="#1989fa" color="#fff" v-model="tabActive" animated swipeable sticky>
      <van-tab title="必读">
        <!-- 必读组件 -->
        <must></must>
      </van-tab>
      <van-tab title="男生">
        <!-- 一般组件 -->
        <normal :type="'boy'"></normal>
      </van-tab>
      <van-tab title="女生">
        <!-- 一般组件 -->
        <normal :type="'girl'"></normal>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import must from "../components/selected/MustRead.vue";
import normal from "../components/selected/NormalRead.vue";
export default {
  data() {
    return {
      tabActive: 0
    };
  },
  components: {
    must,
    normal
  }
};
</script>

<style lang="scss">
#selected {
  padding-bottom: 50px;
  .van-sticky {
    background-color: #1989fa;
  }
  .search {
    position: fixed;
    right: 20px;
    top: 9px;
    z-index: 999;
    img {
      width: 26px;
      display: block;
    }
  }
  .van-tabs__nav {
    width: 80%;
    margin: 0 auto;
  }
  .van-tabs__line {
    background-color: #1989fa;
  }
}
</style>