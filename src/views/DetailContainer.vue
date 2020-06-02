<template>
  <div id="detail-page">
    <nav ref="navline">
      <van-icon @click="$router.back(-1)" color="#fff" size="26" name="arrow-left" />
      <van-icon @click="showShare" color="#fff" size="26" name="ellipsis" />
    </nav>
    <header>
      <div>
        <img src="../assets/images/testBook.jpg" alt="书籍" />
      </div>
      <div>
        <h2>仙虞计</h2>
        <p>作者名字</p>
        <van-tag plain size="medium" type="success">修仙</van-tag>
      </div>
    </header>
    <section class="intro-box">
      <h3>基本介绍</h3>
      <p
        :class="[openIntroStatus?'':'p-open']"
      >这里是介绍，写的是这个小说的介绍。这里是介绍，写的是这个小说的介绍。这里是介绍，写的是这个小说的介绍。这里是介绍，写的是这个小说的介绍。这里是介绍，写的是这个小说的介绍。这里是介绍，写的是这个小说的介绍。这里是介绍，写的是这个小说的介绍。</p>
      <a href="#" @click.prevent="openIntro">{{openIntroStatus?'收起':'展开'}}</a>
    </section>
    <div class="book-catalog">
      <p>目 录</p>
      <van-icon size="18" name="arrow" />
    </div>
    <div class="book-team">
      <div class="head">
        <p>书 圈</p>
        <van-icon size="18" name="arrow" />
      </div>
      <div class="body">
        <van-swipe :autoplay="2000" indicator-color="white">
          <van-swipe-item v-for="i in 3" :key="i">
            <p>这里写的是书圈里用户发是书圈里用户发是书圈里用户发是书圈里用户发是书圈里用户发的内容这里写的是书圈里用户发的内容这里写的是书圈里用户发的内容这里写的是书圈里用户发的内容</p>
            <div class="user">
              <img src="../assets/images/testBook.jpg" />
              <p>用户的名字</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 同类作品推荐 -->
    <section class="book-recommend">
      <div class="head">
        <h3>同类作品推荐</h3>
        <p>更多 &gt;</p>
      </div>
      <div class="body">
        <div class="box" v-for="i in 8" :key="i">
          <img src="../assets/images/testBook.jpg" alt />
          <p>小说名字</p>
        </div>
      </div>
    </section>
    <!-- 底部操作栏 -->
    <div class="bottom-line">
      <div class="left">
        <van-icon size="24" :name="IsInbookshelf?'certificate':'label-o'" />
        <p>{{IsInbookshelf?'已在书架':'放入书架'}}</p>
      </div>
      <button>立即阅读</button>
    </div>
    <!-- 展示分享面板 -->
    <van-share-sheet v-model="showShareStatus" title="将此分享至" :options="shareOptions" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      openIntroStatus: false,
      IsInbookshelf: false,
      showShareStatus: false,
      shareOptions: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" }
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" }
        ]
      ]
    };
  },
  methods: {
    // 打开关闭分享页面
    showShare() {
      this.showShareStatus = true;
    },
    // 顶部导航背景根据距离变化
    changeNavLine() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      if (top >= 100) {
        this.$refs.navline.style.backgroundColor = "#1989fa";
      } else {
        this.$refs.navline.style.backgroundColor = "";
      }
    },
    // 打开小说介绍显示
    openIntro() {
      this.openIntroStatus = !this.openIntroStatus;
    }
  },
  async created() {
    let { data: res } = await this.axios.get("index/book/showBook", {
      params: {
        book_id: 1,
        page: 1,
        limit: 10
      }
    });
    console.log(res);
  },
  mounted() {
    document.addEventListener("scroll", this.changeNavLine);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.changeNavLine);
  }
};
</script>

<style lang="less" scoped>
#detail-page {
  height: 100%;
  background-color: #f5f6f7;
  &:after {
    content: "";
    width: 100%;
    height: 250px;
    background-image: radial-gradient(#1989fa, #104e8b, #1989fa);
    filter: blur(20px);
    position: absolute;
    top: 0;
  }
  nav {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    z-index: 999;
    transition: all 0.3s;
  }
  header {
    position: relative;
    display: flex;
    top: 50px;
    padding: 5px 20px;
    z-index: 9;
    div:first-child {
      img {
        width: 90px;
        height: 120px;
        display: block;
      }
    }
    div:last-child {
      h2 {
        margin: 10px 15px;
        font-size: 20px;
        color: #fff;
      }
      p {
        font-size: 14px;
        margin: 0 15px 10px;
        color: #fff;
      }
      .van-tag {
        margin: 0 15px;
      }
    }
  }
  .intro-box {
    position: relative;
    top: 80px;
    z-index: 9;
    background-color: #fff;
    padding: 15px;
    border-radius: 15px 15px 0 0;
    h3 {
      margin: 0;
      font-size: 16px;
    }
    p {
      font-size: 14px;
      color: #666;
      margin: 12px 0;
      text-align: justify;
    }
    .p-open {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
    a {
      font-size: 14px;
      position: absolute;
      bottom: 7px;
      right: 15px;
    }
    a:active {
      color: grey !important;
    }
    a:link {
      color: #1989fa;
    }
    a:visited {
      color: #1989fa;
    }
  }
  .book-catalog {
    position: relative;
    top: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: #fff;
    p {
      margin: 0;
      font-size: 16px;
    }
    &:active {
      background-color: #eee;
    }
  }
  .book-team {
    position: relative;
    top: 100px;
    padding: 10px 15px;
    background-color: #fff;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        margin: 0;
        font-size: 16px;
      }
    }
    .body {
      p {
        margin: 0;
        font-size: 16px;
        padding: 10px 10px 0;
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .user {
        position: absolute;
        left: 10px;
        bottom: 10px;
        display: flex;
        align-items: center;
        p {
          color: #666;
          font-size: 16px;
          margin-left: 5px;
        }
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
      .van-swipe-item {
        margin-top: 10px;
        height: 150px;
        background-color: #eee;
        border-radius: 10px 10px;
      }
    }
    &:active {
      background-color: #eee;
    }
  }
  .book-recommend {
    background-color: #fff;
    position: relative;
    box-sizing: border-box;
    top: 110px;
    padding: 10px 15px;
    margin-bottom: 60px;
    .head {
      display: flex;
      justify-content: space-between;
      &:active {
        background-color: #eee;
      }
      h3 {
        font-size: 16px;
        margin: 0;
        font-weight: normal;
      }
      p {
        font-size: 14px;
        margin: 0;
        color: #666;
      }
    }
    .body {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 10px;
      .box {
        flex-basis: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
        width: 80px;
        &:active {
          box-shadow: 0 0 10px #ccc;
          margin-top: -5px;
        }
        img {
          width: 75px;
          height: 100px;
          display: block;
          border-radius: 5px;
        }
        p {
          color: #666;
          font-size: 14px;
          margin: 5px 0;
        }
      }
    }
  }
  .bottom-line {
    height: 60px;
    width: 100%;
    border-top: 0.8px solid #ccc;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    .left {
      display: flex;
      align-items: center;
      .van-icon {
        text-shadow: 1px 1px #ccc;
      }
      p {
        margin: 0 8px;
        font-size: 14px;
        text-shadow: 1px 1px #ccc;
      }
      &:active {
        padding-top: 5px;
      }
    }
    button {
      height: 36px;
      width: 100px;
      border: none;
      border-radius: 20px;
      color: #fff;
      background-color: #1989fa;
      font-size: 14px;
      box-shadow: 0 0 10px #1989fa;
      &:active {
        box-shadow: 0 0 1px #1989fa;
      }
    }
  }
}
</style>

<style lang="less">
#detail-page {
  .van-swipe__indicators {
    left: calc(100% - 30px);
  }
}
</style>