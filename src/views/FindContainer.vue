<template>
  <div class="find-container">
    <!-- 头部部分 -->
    <van-nav-bar fixed title="发现" @click-right="onClickRight">
      <template #right>
        <van-icon color="#fff" name="search" size="20px" @click="$router.push('/search')"/>
      </template>
    </van-nav-bar>
    <!-- 主体部分 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- 书圈主体内容块 -->
      <div class="card">
        <div class="header">
          <h3>书圈儿</h3>
          <van-icon name="arrow" />
        </div>
        <div class="content">
          <!-- 书圈的方块部分 -->
          <div
            :style="{background: 'url('+ forumImg +')',backgroundSize: '80px 80px'}"
            class="block"
            v-for="i in 4"
            :key="i"
            @click="toForumItem(i)"
          >
            <div>
              <p>书荒书荒书荒书荒书荒书荒书荒</p>
              <van-tag type="danger">
                <van-icon name="friends-o" />
                <span>1.1万</span>
              </van-tag>
            </div>
          </div>
        </div>
      </div>
      <!-- 书单主体内容块 -->
      <div class="card">
        <div class="header">
          <h3>书单</h3>
          <van-icon name="arrow" />
        </div>
        <div class="content">
          <div class="blist" v-for="i in 2" :key="i">
            <div class="imglist">
              <img src="../assets/images/testBook.jpg" alt />
              <img src="../assets/images/testBook.jpg" alt />
              <img src="../assets/images/testBook.jpg" alt />
            </div>
            <p>这是书单的介绍</p>
          </div>
        </div>
      </div>
      <!-- 活动主体内容块 -->
      <div class="card">
        <div class="header">
          <h3>活动</h3>
          <van-icon name="arrow" />
        </div>
        <div class="content">
          <div class="activity" v-for="i in 2" :key="i">
            <img src="../assets/images/testBack.jpg" alt />
            <p>新版小说·正式上线</p>
          </div>
        </div>
      </div>
      <!-- 活动竖向轮播 -->
      <van-swipe
        autoplay="2000"
        :show-indicators="false"
        class="acti-swiper"
        style="height: 200px;"
        vertical
      >
        <van-swipe-item v-for="i in 3" :key="i">
          <van-notice-bar
            color="#1989fa"
            background="#ecf9ff"
            text="这里是活动通知，这里是活动通知，这里是活动通知，这里是活动通知"
            left-icon="volume-o"
          />
        </van-swipe-item>
      </van-swipe>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forumImg: require("@/assets/images/testBook.jpg"),
      loading: false,
      refreshing: false
    };
  },
  methods: {
    onClickRight() {},
    //下拉刷新触发
    onRefresh() {
      setTimeout(() => {
        this.refreshing = false;
      }, 1000);
    },
    //进入具体论坛
    toForumItem(i) {
      console.log(i);
    }
  }
};
</script>

<style lang="scss">
.find-container {
  .van-nav-bar{
    z-index: 99 ;
  }
  padding-bottom: 50px;
  .van-nav-bar {
    background-color: #1989fa;
  }
  .van-pull-refresh{
    margin-top: 46px;
  }
  .card {
    padding: 10px 15px;
    margin-bottom: 20px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      h3 {
        margin: 0;
        font-size: 20px;
      }
    }
    .content {
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      .block {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        div {
          position: relative;
          height: 80px;
          z-index: 3;
        }
        p {
          font-size: 12px;
          margin: 5px;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .van-tag--danger {
          background-image: linear-gradient(to right, #ee0a24, #f1808d);
        }
        .van-tag {
          position: absolute;
          left: 5px;
          bottom: 10px;
          margin-top: 26px;
          .van-icon {
            margin-top: 2.5px;
          }
        }
      }
      .block::before {
        content: "";
        width: 80px;
        height: 80px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        z-index: 2;
      }
      .blist {
        .imglist {
          display: flex;
          img {
            width: 50px;
            height: 70px;
            display: block;
            margin-right: 5px;
          }
          img:nth-last-child(1) {
            margin-right: 0;
          }
        }
        p {
          margin: 10px 0 0;
          font-size: 15px;
        }
      }
      .activity {
        img {
          display: block;
          width: 160px;
        }
        p {
          margin: 10px 0 0;
          font-size: 15px;
        }
      }
    }
  }
  .acti-swiper {
    margin: 0 10px 50px;
    border-radius: 10px;
    height: 40px !important;
    background-color: #eee;
  }
}
</style>