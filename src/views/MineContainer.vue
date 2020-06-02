<template>
  <div class="mine">
    <!-- 头部设置及消息 -->
    <header>
      <van-icon color="#1989fa" size="24px" name="setting-o" />
      <van-icon color="#1989fa" size="24px" name="chat-o" dot />
    </header>
    <!-- 会员卡 -->
    <section class="vip-card">
      <div class="top">
        <h3 class="el-icon-medal">开通会员卡</h3>
        <p>享受定制福利&nbsp;&gt;</p>
      </div>
      <div class="body">
        <p class="el-icon-s-finance">票券福利</p>
        <p class="el-icon-bangzhu">头像挂件</p>
        <p class="el-icon-picture-outline-round">专属表情</p>
        <p class="el-icon-medal-1">专属徽章</p>
      </div>
    </section>
    <!-- 设置下拉动态效果 -->
    <van-pull-refresh class="main" v-model="isPullDown" @refresh="pullDown">
      <template #pulling>
        <div></div>
      </template>
      <template #loosing>
        <div></div>
      </template>
      <van-pull-refresh class="main-i" v-model="isPullDown" @refresh="pullDown">
        <template #pulling>
          <div></div>
        </template>
        <template #loosing>
          <div></div>
        </template>
        <!-- 头部介绍 -->
        <section class="head-card">
          <div class="header">
            <div class="user-head">
              <img src="../assets/images/testBook.jpg" alt />
            </div>
            <div class="user-content">
              <p>这里是用户的名字名字名字名字</p>
              <van-tag class="el-icon-star-on" round type="success">普通用户</van-tag>
            </div>
          </div>
          <div class="body">
            <div class="left">
              <div>
                <p>0</p>
                <p>推荐票</p>
              </div>
              <div>
                <p>0</p>
                <p>我的账户</p>
              </div>
            </div>
            <van-button size="small" round color="linear-gradient(to right, #ee454c, #fc6354)">充 值</van-button>
          </div>
        </section>
      </van-pull-refresh>
      <div class="mine-main">
        <van-swipe class="love-swipe" :autoplay="2000" indicator-color="white">
          <van-swipe-item v-for="i in 3" :key="i">
            <img src="../assets/images/testBook.jpg" alt />
            <p>猜你喜欢：《仙虞计》修仙者的休闲生活！</p>
            <van-icon name="arrow" />
          </van-swipe-item>
        </van-swipe>
        <div class="item">
          <div class="left">
            <van-icon size="20px" name="coupon-o" />
            <p>我发布的</p>
          </div>
          <van-icon size="20px" name="arrow" />
        </div>
        <div class="item">
          <div class="left">
            <van-icon size="20px" name="star-o" />
            <p>关注/收藏</p>
          </div>
          <van-icon size="20px" name="arrow" />
        </div>
        <div class="item">
          <div class="left">
            <van-icon size="20px" name="gift-o" />
            <p>活动中心</p>
          </div>
          <van-icon size="20px" name="arrow" />
        </div>
        <div class="item">
          <div class="left">
            <van-icon size="20px" name="flower-o" />
            <p>我的装扮</p>
          </div>
          <van-icon size="20px" name="arrow" />
        </div>
        <div class="item">
          <div class="left">
            <van-icon size="20px" name="discount" />
            <p>徽章/称号</p>
          </div>
          <van-icon size="20px" name="arrow" />
        </div>
        <div class="item">
          <div class="left">
            <van-icon size="20px" name="edit" />
            <p>成为作家</p>
          </div>
          <van-icon size="20px" name="arrow" />
        </div>
        <div class="item">
          <div class="left">
            <van-icon size="20px" name="shopping-cart-o" />
            <p>积分商城</p>
          </div>
          <van-icon size="20px" name="arrow" />
        </div>
      </div>
      <van-divider dashed>没想到吧！我也有底线</van-divider>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      isPullDown: false
    };
  },
  methods: {
    pullDown() {
      this.isPullDown = false;
    }
  },
  destroyed() {
    console.log("mine组件被销毁");
  }
};
</script>

<style lang="less" scoped>
@pageBc: #f5f6f7;
@headCardBc: #fff;
.mine {
  background-color: @pageBc;
  position: relative;
  height: 100%;
  padding-bottom: 100px;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
.main-i {
  padding-top: 10px;
}
.head-card {
  height: 165px;
  box-sizing: border-box;
  margin: 0 15px;
  border-radius: 15px 15px 0 0;
  background-color: @headCardBc;
  box-shadow: 0 0 10px #666;
  .body {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    .left {
      display: flex;
      div {
        margin-right: 20px;
      }
      p {
        font-size: 16px;
        margin: 2px 0;
        color: #666;
      }
      p:first-child {
        font-size: 20px;
        font-weight: bold;
        color: black;
      }
    }
  }
}
.vip-card {
  margin: 0 15px;
  padding: 15px 20px;
  border-radius: 15px;
  color: #ffe3b3;
  box-shadow: 0 0 8px #666;
  background-image: linear-gradient(to right, #fc6354, #ee454c);
  .top,
  .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .top {
    padding-bottom: 10px;
    border-bottom: 0.6px solid #ffe3b3;
    p {
      font-size: 14px;
    }
  }
  .body {
    padding-top: 20px;
    p {
      font-size: 12px;
    }
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 14px 0;
  }
}
.main {
  position: absolute;
  top: 100px;
  width: 100%;
}
.mine-main {
  background-color: #fff;
  overflow: hidden;
}
.head-card {
  padding: 15px 20px;
  .header {
    position: relative;
    display: flex;
    padding-bottom: 10px;
    border-bottom: 0.8px solid #eee;
    p {
      margin: 0;
      font-size: 18px;
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .van-tag {
      margin-top: 8px;
    }
  }
  .header::before {
    content: "";
    background-image: url("../../public/detail.png");
    background-size: 20px;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 20px;
  }
  .user-content {
    padding: 6px 0 0 10px;
  }
  .user-head {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #666666;
    img {
      width: inherit;
      height: inherit;
      border-radius: inherit;
    }
  }
}
.mine-main {
  border-top: 0.8px solid #eee;
  .item {
    display: flex;
    height: 54px;
    padding: 0 20px;
    justify-content: space-between;
  }
  .left {
    display: flex;
  }
  p {
    line-height: 54px;
    margin: 0 20px;
    font-size: 16px;
  }
  .van-icon {
    line-height: 54px;
  }
  .love-swipe {
    height: 70px;
    margin: 10px 20px 0px;
    .van-swipe-item {
      height: 60px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 5px;
      border-radius: 30px;
      background-color: #f5f6f7;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    p {
      font-size: 14px;
      width: 220px;
      overflow: hidden;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>