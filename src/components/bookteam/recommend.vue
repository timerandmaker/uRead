<template>
  <div id="recommend">
    <div class="hot">
      <h1>本圈最热</h1>
      <div class="content">
        <div v-for="i in 8" :key="i" class="content-item">
          <img src="../../assets/images/testBook.jpg" alt="">
          <p>仙虞计</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("recommend");
  }
};
</script>

<style lang="less" scoped>
#recommend{
  padding: 16px;
  .hot{
    h1{
      margin: 10px 0;
      font-size: 18px;
    }
    .content{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .content-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 0 0 25%;
        margin-top: 10px;
        img{
          height: 80px;
          width: 60px;
          display: block;
        }
        p{
          margin: 5px 0;
          font-size: 14px;
          text-align: justify;
          width: 60px;
          color: #666;
        }
      }
    }
  }
}
</style>