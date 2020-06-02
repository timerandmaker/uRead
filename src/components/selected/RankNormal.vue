<template>
  <div id="rank-normal">
    <p class="total">作品玄幻类排行</p>
    <div class="content">
      <div class="item" v-for="i in 16" :key="i">
        <img src="../../assets/images/testBook.jpg" alt />
        <div class="right">
          <p class="name">{{i}}.仙虞计</p>
          <p class="item-total">这里是小说介绍</p>
        </div>
        <van-icon color="#666" size="18" name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#rank-normal {
  padding: 10px;
  height: 100%;
  .total {
    font-size: 12px;
    margin: 10px 0;
    color: #666;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    .item {
      flex: 0 0 100%;
      display: flex;
      padding: 10px 0;
      border-bottom: 0.8px solid #eee;
      &:active {
        background-color: #eee;
      }
      &:last-child {
        border-bottom: none;
      }
      img {
        width: 40px;
        height: 60px;
        display: block;
        border-radius: 5px;
        box-shadow: 0 0 5px #ccc;
        margin-left: 20px;
      }
      .right {
        .name {
          font-size: 16px;
          margin: 10px 30px;
        }
        .item-total {
          margin: 0 30px;
          font-size: 12px;
          color: #666;
        }
      }
      .van-icon{
        display: flex;
        align-self: center;
        position: absolute;
        right: 20px;
      }
    }
  }
}
</style>