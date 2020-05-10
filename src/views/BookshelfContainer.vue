<template>
  <div id="bookshelf">
    <div class="search" @click="$router.push('/search')">
      <img src="../assets/icons/search.png" alt="">
    </div>
    <van-tabs v-model="tabActionIndex" sticky animated swipeable :border="false">
      <van-tab title="书架">
        <Book></Book>
      </van-tab>
      <van-tab title="关注">
        <h1>关注内容</h1>
        <h1>关注内容</h1>
        <h1>关注内容</h1>
        <h1>关注内容</h1>
        <h1>关注内容</h1>
        <h1>关注内容</h1>
        <h1>关注内容</h1>
        <h1>关注内容</h1>
        <h1>关注内容</h1>
        <h1>关注内容</h1>
        <h1>关注内容</h1>
      </van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
import Book from '../components/bookshelf/Book.vue'
export default {
  data() {
    return {
      tabActionIndex: 0
      
    };
  },
  methods: {
    
  },
  components: {
    Book
  }
};
</script>

<style lang="scss">
#bookshelf {
  .search{
    position: fixed;
    right: 20px;
    top: 10px;
    z-index: 99;
    img{
      width: 24px;
      height: 24px;
      display: block;
    }
  }
  .search:active{
    box-shadow: 0 0 10px #ccc;
  }
  .van-sticky{
    background-color: #fff;
    z-index: 9;
    border-bottom: 1px solid #eee;
  }
  .van-tabs__nav {
    width: 60%;
    margin: 0 auto;
  }
  .van-tab--active {
    transition: all 0.3s ease;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>