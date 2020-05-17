<template>
  <div class="normal">
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="i in 4" :key="i">
        <img src="../../assets/images/testBack.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 分类、排名导航 -->
    <div class="navbar">
      <div class="type">
        <img src="../../assets/icons/type.png" alt />
        <p>分类</p>
      </div>
      <div class="rank">
        <img src="../../assets/icons/rank.png" alt />
        <p>排名</p>
      </div>
    </div>
    <!-- 畅读精选 -->
    <div class="select">
      <h3>畅读精选</h3>
      <div>
        <p>更多</p>
        <van-icon name="arrow" />
      </div>
    </div>
    <bookmin></bookmin>
  </div>
</template>

<script>
import bookmin from "../../components/selected/BookMin.vue";
export default {
  data() {
    return {};
  },
  props: [
    //接收父组件传值，决定此组件渲染男女种类,param: (boy or girl)
    "type"
  ],
  components: {
    bookmin
  }
};
</script>

<style lang="scss" scoped>
.normal {
  .my-swipe {
    .van-swipe-item {
      background-color: #39a9ed;
      img {
        width: 100%;
        height: 150px;
        display: block;
      }
    }
  }
  .navbar {
    display: flex;
    margin-top: 10px;
    padding-bottom: 10px;
    .type,
    .rank {
      text-align: center;
      height: 60px;
      padding: 10px 0 5px;
      box-shadow: 0px 0px 10px #ccc;
      p {
        font-size: 14px;
        margin: 1px 0;
      }
      img{
        width: 36px;
        height: 36px;
      }
    }
    .type:active,
    .rank:active {
      transform: translateY(5px);
      box-shadow: 0 0 3px #ccc;
    }
    .type {
      flex: 1;
      margin-right: 10px;
    }
    .rank {
      flex: 1;
    }
  }
  .select {
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding-top: 10px;
    h3 {
      font-size: 20px;
      padding-left: 10px;
      margin: 0;
      line-height: 40px;
    }
    div {
      display: flex;
      align-items: center;
      color: grey;
      padding-right: 10px;
    }
  }
}
</style>