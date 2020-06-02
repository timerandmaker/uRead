<template>
  <div id="classify-normal">
    <p class="total">共123456789部</p>
    <div class="content">
      <div class="item" v-for="i in 16" :key="i">
        <img src="../../assets/images/testBook.jpg" alt />
        <div class="right">
          <p class="name">玄幻</p>
          <p class="item-total">789部</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#classify-normal {
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
      flex: 0 0 50%;
      display: flex;
      padding: 10px 0;
      img {
        width: 40px;
        height: 60px;
        display: block;
        border-radius: 5px;
        box-shadow: 0 0 5px #ccc;
      }
      .right {
        .name {
          font-size: 14px;
          margin: 10px;
        }
        .item-total {
          margin: 0 10px;
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>