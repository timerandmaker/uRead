<template>
  <div id="bookshelf">
    <!-- 顶部搜索 -->
    <div class="search" @click="$router.push('/search')">
      <img src="../assets/icons/search.png" alt />
    </div>
    <!-- 顶部tabs切换 -->
    <van-tabs
      color="#fff"
      background="#1989fa"
      v-model="tabActionIndex"
      sticky
      animated
      swipeable
      :border="false"
    >
      <!-- 左书架 -->
      <van-tab title="书架">
        <!-- 书籍展示模块 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <Book></Book>
        </van-pull-refresh>
      </van-tab>
      <!-- 右关注 -->
      <van-tab title="关注">
        <!-- 作者关注模块 -->
        <Follow></Follow>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Book from "../components/bookshelf/Book.vue";
import Follow from "../components/bookshelf/Follow.vue";
export default {
  data() {
    return {
      tabActionIndex: 0,
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      this.isLoading = false;
    }
  },
  components: {
    Book,
    Follow
  }
};
</script>

<style lang="scss">
#bookshelf {
  padding-bottom: 50px;
  .search {
    position: fixed;
    right: 20px;
    top: 9px;
    z-index: 99;
    img {
      width: 26px;
      display: block;
    }
  }
  .search:active {
    box-shadow: 0 0 10px #ccc;
  }
  .van-sticky {
    background-color: #1989fa;
    z-index: 9;
    border-bottom: 1px solid #eee;
  }
  .van-tabs__nav {
    width: 60%;
    margin: 0 auto;
  }
  .van-pull-refresh {
    width: 100%;
  }
}
</style>