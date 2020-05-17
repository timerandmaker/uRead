<template>
  <div class="mustRead">
    <!-- 顶部必读推荐 -->
    <div class="top" :style="{background: 'url('+ bookBackground +')'}">
      <el-carousel type="card" height="200px" arrow="never" indicator-position="none">
        <el-carousel-item v-for="item in 6" :key="item">
          <img src="../../assets/images/testBook.jpg" />
        </el-carousel-item>
      </el-carousel>
      <div class="detail">
        <van-row class="header">
          <van-col span="16">
            <h3>仙虞计</h3>
          </van-col>
          <van-col span="8">
            <van-tag type="primary">休闲</van-tag>
            <van-tag type="primary">修仙</van-tag>
          </van-col>
        </van-row>
        <p class="book-intro">作品简介和介绍</p>
        <div class="book-content">
          <p>这里是作品简介的介的介的介的介的这里是作品简介的这里是作品简介的这里是作品简介的这里是作品简介的这里是作品简介的这里是作品简介的</p>
        </div>
        <van-button size="small" round type="info">立即阅读</van-button>
      </div>
    </div>
    <!-- 排名 -->
    <div class="rank">
      <van-swipe indicator-color="#1989FA" :loop="false" :width="300">
        <van-swipe-item>
          <!-- 男生小说榜 -->
          <div class="card">
            <div class="title boy">男生小说榜</div>
            <van-row :class="i==1?'':'border-top'" v-for="i in 3" :key="i">
              <van-col span="7">
                <img src="../../assets/images/testBook.jpg" alt />
              </van-col>
              <van-col span="12">
                <h3>1. 仙虞计</h3>
                <van-tag type="primary">修仙</van-tag>
              </van-col>
              <van-col span="5">
                <div class="go-read">
                  <van-button color="#1989fa" plain size="mini">去阅读</van-button>
                </div>
              </van-col>
            </van-row>
          </div>
        </van-swipe-item>

        <van-swipe-item>
          <!-- 女生小说榜 -->
          <div class="card">
            <div class="title girl">女生小说榜</div>
            <van-row :class="i==1?'':'border-top'" v-for="i in 3" :key="i">
              <van-col span="7">
                <img src="../../assets/images/testBook.jpg" alt />
              </van-col>
              <van-col span="12">
                <h3>1. 仙虞计</h3>
                <van-tag type="primary">修仙</van-tag>
              </van-col>
              <van-col span="5">
                <div class="go-read">
                  <van-button color="#1989fa" plain size="mini">去阅读</van-button>
                </div>
              </van-col>
            </van-row>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookBackground: require("@/assets/images/testBook.jpg")
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  z-index: 1;
  height: 300px;
  .van-button {
    float: right;
  }
}
.top:after {
  content: "";
  background: inherit;
  position: absolute;
  top: 0;
  width: 100%;
  height: 110%;
  z-index: 2;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(5px);
}
.el-carousel {
  z-index: 99;
  padding-top: 20px;
  height: 200px;
  .el-carousel__item--card {
    background-color: rgba(0, 0, 0, 0);
    img {
      display: block;
      height: 190px;
      margin: 0 auto;
      box-shadow: 0 0 10px #000;
    }
  }
}
.detail {
  position: absolute;
  z-index: 9;
  background-color: #fff;
  width: 350px;
  height: 200px;
  left: 0;
  right: 0;
  margin: 20px auto;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0 0 20px #666;
}
.detail::after {
  content: "";
  position: absolute;
  top: -20px;
  left: 165px;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
.header {
  height: 30px;
  display: flex;
  align-items: center;
  h3 {
    font-size: 20px;
    font-weight: normal;
    margin: 0;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .van-tag {
    margin-right: 10px;
  }
}
.book-intro {
  font-size: 14px;
  color: #9999a0;
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px 0;
}
.book-content {
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 8px;
  }
}
.rank {
  //   padding: 0 15px;
}
.van-swipe {
  margin-top: 180px;
  height: 350px;
  .card {
    width: 280px;
    height: 320px;
    margin-left: 15px;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    border: 0.8px solid #eee;
    box-shadow: 5px 5px 10px #ccc;
    .title {
      padding: 10px 20px;
      font-size: 16px;
      color: #fff;
    }
    .boy {
      background-image: linear-gradient(to right, #1989fa, #fff);
    }
    .girl {
      background-image: linear-gradient(to right, pink, #fff);
    }
    img {
      height: 70px;
      width: 50px;
      display: block;
      border-radius: 5px;
    }
    .van-row {
      padding: 10px;
      h3 {
        margin: 6px 0;
        font-weight: normal;
        font-size: 16px;
      }
      .go-read {
        margin-top: 24px;
      }
    }
  }
}
.border-top {
  border-top: 0.8px solid #eee;
}
.mustRead {
  background-color: #f5f6f7;
}
</style>