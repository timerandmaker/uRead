<template>
  <div id="bookteam">
    <!-- 添加z-index的承载 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="float-box">
        <van-sticky>
          <nav>
            <van-icon @click="$router.back(-1)" color="#fff" size="24" name="arrow-left" />
            <van-icon @click="$router.push('/search')" color="#fff" size="24" name="search" />
          </nav>
        </van-sticky>
        <!-- 作品题 -->
        <div class="title">
          <div class="left">
            <img src="../assets/images/testBook.jpg" alt />
          </div>
          <div class="right">
            <h2>仙虞计书圈</h2>
            <p>#100万帖子</p>
          </div>
        </div>
        <!-- 圈主 -->
        <div class="master" :style="{'height':guiderStatus?'180px':'0px'}">
          <div class="box">
            <p>圈主</p>
            <div class="item">
              <div class="header" v-for="i in 10" :key="i">
                <img src="../assets/images/testBook.jpg" alt />
                <van-tag
                  :style="{left: i==1?'calc(50% - 15px)':''}"
                  type="warning"
                >{{i==1 ?'圈主':'副圈主'}}</van-tag>
              </div>
            </div>
          </div>
          <div class="box2">
            <p>举报</p>
            <van-icon color="#fff" name="arrow" />
          </div>
        </div>
        <!-- 指引器 -->
        <div class="guider">
          <van-icon
            @click="guiderStatus=!guiderStatus"
            color="#fff"
            size="26"
            :name="guiderStatus?'arrow-up':'arrow-down'"
          />
        </div>
        <!-- 主体部分 -->
        <div ref="subjectRef" class="subject">
          <van-sticky
            class="post"
            :offset-top="postMarginTop"
            z-index="999"
            :container="$refs.subjectRef"
          >
            <button class="el-icon-edit">&nbsp;发表</button>
          </van-sticky>
          <van-tabs
            class="content"
            swipeable
            animated
            sticky
            :offset-top="44"
            color="#fff"
            background="#1989fa"
            v-model="navActive"
          >
            <van-tab title="动态">
              <dynamic></dynamic>
            </van-tab>
            <van-tab title="精华">
              <good></good>
            </van-tab>
            <van-tab title="圈友在看">
              <recommend></recommend>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import dynamic from "../components/bookteam/dynamic.vue";
import good from "../components/bookteam/good.vue";
import recommend from "../components/bookteam/recommend.vue";

export default {
  data() {
    return {
      // 刷新状态
      isLoading: false,
      // 指导内部信息显示
      guiderStatus: false,
      // 主体部分导航index
      navActive: 0,
      // 编辑按钮距离顶部问题
      postMarginTop: 0
    };
  },
  methods: {
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    // 初始化页面
    initPage() {
      let pageHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      this.postMarginTop = pageHeight * 0.9;
    }
  },
  watch: {
    navActive: function(newValue) {
      console.log("变化");
    }
  },
  components: {
    dynamic,
    good,
    recommend
  },
  mounted() {
    this.initPage();
  }
};
</script>

<style lang="scss" scoped>
#bookteam {
  height: 100%;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 500px;
    position: absolute;
    top: 0;
    z-index: 0;
    filter: blur(20px);
    background-image: radial-gradient(#1989fa, #104e8b, #1989fa);
    background-attachment: fixed;
  }
  .float-box {
    position: relative;
    z-index: 2;
    nav {
      display: flex;
      justify-content: space-between;
      padding: 10px 15px;
      background: rgba(25, 137, 250, 0.6);
    }
    .title {
      display: flex;
      padding: 10px 30px;
      .left {
        width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: 10px;
        img {
          width: 80px;
        }
      }
      .right {
        margin-left: 20px;
        color: #fff;
        h2 {
          margin: 6px 0;
          font-size: 20px;
          letter-spacing: 2px;
        }
        p {
          font-size: 14px;
          margin: 0;
        }
      }
    }
    .master {
      height: 180px;
      // margin-top: 10px;
      padding: 0 30px;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      .box {
        background-color: rgba(0, 0, 0, 0.3);
        padding: 10px;
        border-radius: 10px;
        p {
          color: #fff;
          margin: 0;
          font-size: 16px;
          padding-bottom: 10px;
        }
        .item {
          display: flex;
          width: 100%;
          box-sizing: border-box;
          padding: 0 6px 10px;
          overflow-x: scroll;
        }
        .header {
          width: 40px;
          height: 40px;
          position: relative;
          margin-right: 10px;
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
          .van-tag {
            position: absolute;
            bottom: -10px;
            left: calc(50% - 20px);
          }
        }
      }
      .box2 {
        background-color: rgba(0, 0, 0, 0.3);
        padding: 10px;
        border-radius: 10px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:active {
          background-color: rgba(0, 0, 0, 0.5);
        }
        p {
          font-size: 16px;
          margin: 0;
          color: #fff;
        }
      }
    }
    .guider {
      //   margin-top: 20px;
      position: relative;
      height: 36px;
      .van-icon {
        position: absolute;
        z-index: 2;
        top: calc(50% - 13px);
        left: calc(50% - 13px);
        animation: guider 2s linear infinite;
      }
    }
    .subject {
      margin-top: 10px;
      .content {
        background-color: #fff;
      }
    }
  }
  .post {
    button {
      position: absolute;
      z-index: 999;
      left: calc(50% - 75px);
      width: 150px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 16px;
      border: none;
      border-radius: 30px;
      background-image: linear-gradient(to top, #1989fa, #003061);
      box-shadow: 0 10px 10px #003061;
      &:active {
        margin-top: 5px;
        box-shadow: 0 2px 2px #003061;
      }
    }
  }
}
@keyframes guider {
  0% {
    margin-top: 0;
  }
  25% {
    font-weight: bold;
    margin-top: -3px;
  }
  50% {
    font-weight: normal;
    margin-top: 0px;
  }
  75% {
    margin-top: 3px;
    color: #104e8b;
  }
  100% {
    margin-top: 0px;
    color: #fff;
  }
}
</style>

<style lang="less">
#bookteam {
  .van-pull-refresh__track {
    z-index: 1;
  }
}
</style>