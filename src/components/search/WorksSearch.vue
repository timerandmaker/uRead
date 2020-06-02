<template>
  <div id="works-search">
    <nav>
      <van-field
        clearable
        size="large"
        left-icon="search"
        v-model="searchValue"
        placeholder="搜索你感兴趣的内容"
      />
      <p @click="$router.back(-1)">取消</p>
    </nav>
    <!-- 热门搜索 -->
    <section class="hot">
      <header>
        <p>热门搜索</p>
        <van-icon color="#666" size="16" name="replay" />
      </header>
      <section class="content">
        <van-tag size="medium" v-for="i in 20" :key="i" round>仙虞计</van-tag>
      </section>
    </section>
    <!-- 搜索历史 -->
    <section class="history">
      <header>
        <p>搜索历史</p>
        <van-icon color="#666" size="16" name="delete" />
      </header>
      <section class="content">
        <van-tag size="medium" v-for="i in 5" :key="i" round>仙虞计</van-tag>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ""
    };
  }
};
</script>

<style lang="less" scoped>
#works-search {
  .van-cell {
    font-size: 16px;
  }
  .van-cell--large {
    padding-bottom: 0;
  }
  nav {
    display: flex;
    p {
      text-align: center;
      width: 50px;
      height: 44px;
      line-height: 44px;
      box-sizing: border-box;
      padding-top: 2px;
      font-size: 14px;
      color: #666;
      margin: 0;
    }
  }
  .hot,
  .history {
    padding: 20px 20px;
    header {
      display: flex;
      justify-content: space-between;
      p {
        margin: 0;
        font-size: 14px;
        color: #666;
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      .van-tag {
        margin: 10px 6px 0 0;
        background-color: #ccc;
        &:nth-child(-n + 3) {
          background-color: #b0e2ff;
          color: #1989fa;
        }
      }
    }
  }
  .history .van-tag {
    color: #fff !important;
    background-color: #ccc !important;
  }
  .recommend {
    padding: 20px 20px;
    header {
      display: flex;
      justify-content: space-between;
      p {
        margin: 0;
        font-size: 14px;
        color: #666;
      }
    }
  }
}
</style>