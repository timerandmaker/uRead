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
  name: "bookshelf",
  data() {
    return {
      tabActionIndex: 0,
      isLoading: false,
      scrollTop1: document.documentElement.scrollTop
    };
  },
  methods: {
    // 记录滑动位置
    setScrollTop() {
      const MarginTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      sessionStorage.setItem("bookshelf-marginTop", MarginTop);
    },
    // 获取上次滑动位置
    getScrollTop() {
      if (sessionStorage.getItem("bookshelf-marginTop")) {
        window.scrollTo(
          0,
          parseInt(sessionStorage.getItem("bookshelf-marginTop"))
        );
      }
    },
    // 下拉刷新
    onRefresh() {
      this.isLoading = false;
    }
  },
  watch: {
    scrollTop1(new1, old1) {
      console.log(new1, old1);
    }
  },
  components: {
    Book,
    Follow
  },
  beforeRouteEnter(to, from, next) {
    // 进入时查看是否有记录位置
    next(vm => vm.getScrollTop());
  },
  beforeRouteLeave(to, from, next) {
    // 离开时记录位置
    this.setScrollTop();
    next();
  },
  mounted() {
    window.addEventListener("beforeunload", this.setScrollTop);
  },
  destroyed() {
    console.log("bookshelf组件被销毁");
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