<template>
  <div
    id="read-container"
    @click="screenJump"
    :style="{'background-color': pageCss.backgroundColor}"
  >
    <!-- 顶部状态 -->
    <div class="header" :style="{'background-color': pageCss.backgroundColor}">
      <p>第二章：这是第二章的标题</p>
      <van-button
        style="color: red !important"
        :color="this.pageCss.color=='#666'?'#0C0C0C':'#CBB890'"
        size="mini"
        type="primary"
      >16条热评</van-button>
    </div>
    <!-- 文章内容 -->
    <div
      class="view"
      ref="txtContent"
      :style="{'color': pageCss.color,'font-size': pageCss.fontSzie+'px','line-height': pageCss.lineHeight+'px'}"
      v-for="(item,i) in txt"
      :key="i"
      v-html="item.content"
    ></div>
    <!-- 遮罩操作层 -->
    <van-popup
      class="no top-pop"
      ref="pop"
      :overlay="false"
      v-model="showTopBottom"
      position="top"
      :style="{ height: '50px' }"
    >
      <van-icon @click="$router.push('/bookshelf')" class="no left" name="arrow-left" />
      <van-icon @click="showTopDialog" class="no right" name="ellipsis" />
    </van-popup>
    <!-- 上部小弹窗 -->
    <van-popup class="no showTopLite" :overlay="false" v-model="showTopLite" position="top">
      <div class="no top">
        <img class="no" src="../assets/images/testBook.jpg" alt="仙虞计" />
        <div class="no">
          <h4 class="no">仙虞计</h4>
          <p class="no">仙虞计的滴滴章节</p>
        </div>
        <van-button
          class="no"
          size="small"
          plain
          round
          color="#976600"
          type="primary"
          style="background-color: #cbb890"
        >详情</van-button>
      </div>
      <div class="no bottom">
        <div class="no" v-for="i in 6" :key="i">
          <van-icon class="no" size="24px" name="star-o" />
          <p class="no">收藏本书</p>
        </div>
      </div>
    </van-popup>
    <!-- 下部大弹窗 -->
    <van-popup
      class="no bottom-pop"
      ref="pop"
      :overlay="false"
      v-model="showTopBottom"
      position="bottom"
      :style="{ height: pageCss.bottomHeight + 'px' }"
    >
      <div class="no top">
        <div @click="$router.push('/booklist')" class="no">
          <van-icon class="no" size="24px" name="orders-o" />
          <p class="no">目录</p>
        </div>
        <div @click="$router.push('/bookteam')" class="no">
          <van-icon class="no" size="24px" name="flag-o" />
          <p class="no">书圈</p>
        </div>
        <div @click="changeMode" class="no">
          <van-icon class="no" size="24px" :name="this.pageCss.color == '#666'?'eye':'closed-eye'" />
          <p class="no">{{this.pageCss.color == '#666'?'白天':'夜间'}}</p>
        </div>
        <div @click="setUp" class="no">
          <van-icon class="no" size="24px" name="setting-o" />
          <p class="no">设置</p>
        </div>
      </div>
      <div class="no bottom">
        <div class="no font-size">
          <p class="no">字体大小</p>
          <img @click="addFontSize" class="no" src="../assets/icons/addSize.png" alt="加" />
          <p class="no">{{pageCss.fontSzie}}</p>
          <img @click="subFontSize" class="no" src="../assets/icons/subSize.png" alt="减" />
        </div>
        <div class="no font-size">
          <p class="no">行间间距</p>
          <img @click="addLineHeight" class="no" src="../assets/icons/addSize.png" alt="加" />
          <p class="no">{{pageCss.lineHeight}}</p>
          <img @click="subLineHeight" class="no" src="../assets/icons/subSize.png" alt="减" />
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 动态页面样式绑定
      pageCss: {
        color: "#302303", // 字体颜色
        fontSzie: 21, // 字体大小
        lineHeight: 33, // 行高
        backgroundColor: "#D8C6A2", // 背景颜色
        bottomHeight: 50 // 底部弹框高度
      },
      // 屏幕高，内容真实高度
      screenWH: {
        height: 0,
        pageHeight: 0
      },
      //滚动状态
      scrollStatus: false,
      //轮回毫秒数,数值越大滚动越慢
      msec: 1,
      //获取小说的数据
      txt: [
        {
          content: `<h2>这是第二章的标题</h2>
      <p>1阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>2阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>3阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>4阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>5阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>6阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>7阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>8阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>9阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>`
        }
      ],
      // 显示隐藏弹出层
      showTopBottom: false,
      // 显示上部小弹窗
      showTopLite: false,
      filterArray: ["top-pop", "van-button", "left", "right", "no"]
    };
  },
  methods: {
    // 增加字体大小，默认最大35
    addFontSize() {
      if (this.pageCss.fontSzie == 35) {
        this.$toast("再大就不好看啦！");
      } else {
        this.pageCss.fontSzie = this.pageCss.fontSzie + 1;
        localStorage.setItem("fontSize", this.pageCss.fontSzie);
      }
    },
    // 减少字体大小，默认最小10
    subFontSize() {
      if (this.pageCss.fontSzie == 10) {
        this.$toast("再小就看不见啦！");
      } else {
        this.pageCss.fontSzie = this.pageCss.fontSzie - 1;
        localStorage.setItem("fontSize", this.pageCss.fontSzie);
      }
    },
    // 添加行间距，默认最大80
    addLineHeight() {
      if (this.pageCss.lineHeight == 80) {
        this.$toast("再加都成段落了");
      } else {
        this.pageCss.lineHeight = this.pageCss.lineHeight + 1;
        localStorage.setItem("lineHeight", this.pageCss.lineHeight);
      }
    },
    // 减少行间距，默认最小20
    subLineHeight() {
      if (this.pageCss.lineHeight == 20) {
        this.$toast("再减就重合啦！");
      } else {
        this.pageCss.lineHeight = this.pageCss.lineHeight - 1;
        localStorage.setItem("lineHeight", this.pageCss.lineHeight);
      }
    },
    // 设置
    setUp() {
      if (this.pageCss.bottomHeight == 50) {
        this.pageCss.bottomHeight = 200;
      } else {
        this.pageCss.bottomHeight = 50;
      }
    },
    // 修改模式
    changeMode() {
      if (this.pageCss.backgroundColor == "#D8C6A2") {
        this.pageCss.backgroundColor = "#0c0c0c";
        this.pageCss.color = "#666";
      } else {
        this.pageCss.backgroundColor = "#D8C6A2";
        this.pageCss.color = "#302303";
      }
    },
    //初始化页面
    initPage() {
      // 获取页面的窗口高和内容高度
      this.screenWH.height =
        document.documentElement.clientHeight || document.body.clientHeight;
      this.screenWH.pageHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // 检测是否有自定义设置
      if(localStorage.getItem('fontSize')){
        this.pageCss.fontSzie = parseInt(localStorage.getItem('fontSize'))
      }
      if(localStorage.getItem('lineHeight')){
        this.pageCss.lineHeight = parseInt(localStorage.getItem('lineHeight'));
      }
    },
    //**********页面操作导航**********
    screenJump(e) {
      // 获取当前点击元素的第一类名，添加过滤器，解决点击传递问题
      const targetClass = e.target.classList[0];
      let filterStatus = false;
      this.filterArray.forEach(item => {
        if (targetClass == item) {
          filterStatus = true;
          return;
        }
      });
      if (filterStatus == true) {
        return;
      }
      // 关闭上部小弹框
      this.showTopLite = false;
      // 重置底部弹框高度
      this.pageCss.bottomHeight = 50;

      let sh = this.screenWH.height;
      //点击上部，向上移动 9/10 个屏幕的距离
      if (e.clientY < sh / 3) {
        this.scrollStatus = false;
        this.showTopBottom = false;
        window.scrollBy(0, (-sh / 10) * 9);
      }
      //点击中部，弹出遮罩层
      else if (e.clientY > sh / 3 && e.clientY < (sh / 3) * 2) {
        if (this.scrollStatus) {
          this.scrollStatus = false;
        } else {
          this.showTopBottom = !this.showTopBottom;
        }
      }
      // 点击下部，触发自动阅读开关
      else {
        this.showTopBottom = false;
        // 判断是否已经在滚动状态
        if (!this.scrollStatus) {
          // 重置页面高度状态
          this.screenWH.pageHeight =
            document.documentElement.scrollHeight || document.body.scrollHeight;
          this.scrollStatus = true;
          // 调用动画事件
          this.moveAnimation(this.screenWH.pageHeight - sh, this.msec);
          console.log("开启自动滑动");
        } else {
          // 如不是滚动状态，取消滑动
          this.scrollStatus = false;
          console.log("取消自动滑动");
        }
      }
    },
    //设置下自动移动动画
    moveAnimation(allDistance, msec) {
      // 页面距上位置
      let init = document.documentElement.scrollTop || document.body.scrollTop;
      let timer = setInterval(() => {
        // 当小于且状态为true，执行动画
        if (init < allDistance && this.scrollStatus == true) {
          init += 1;
          window.scrollTo(0, init);
        } else {
          // 如果距上小于真实页面高度，则说明状态为false，则暂停动画
          if (init < allDistance) {
            clearInterval(timer);
            console.log("暂停！");
          } else {
            // 则表明已经加载到页尾，则加载新数据
            console.log("完成一次自动加载!!!");
            allDistance = this.screenWH.pageHeight =
              document.documentElement.scrollHeight ||
              document.body.scrollHeight;
            allDistance -= this.screenWH.height;
          }
        }
      }, msec);
    },
    // 监听滑动手势
    listenTouch() {
      document.addEventListener("touchmove", () => {
        //关闭自动滚动
        this.scrollStatus = false;
        // 关闭上下弹框
        this.showTopBottom = false;
        // 重置底部弹框高度
        this.pageCss.bottomHeight = 50;
      });
    },
    // 监听滚动事件
    listenScroll() {
      document.addEventListener("scroll", () => {
        // 滑动到底部，加载新内容
        let init =
          document.documentElement.scrollTop || document.body.scrollTop;
        let pageHeight = (this.screenWH.pageHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight);
        if (Math.ceil(init) + 50 >= pageHeight - this.screenWH.height) {
          this.loadNewData();
          console.log("进行了一次滑动加载");
        }
      });
    },
    // 加载新数据
    loadNewData() {
      this.txt.push({
        content: `<h2>这是第二章的标题</h2>
      <p>1阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>2阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>3阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>4阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>5阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>6阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>7阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>8阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>
      <p>9阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好阿睡得好睡得好阿睡得好阿睡得好睡得好</p>`
      });
    },
    // 上部小窗口
    showTopDialog() {
      this.showTopLite = !this.showTopLite;
    }
  },
  created() {},
  mounted() {
    this.initPage();
    this.listenTouch();
    this.listenScroll();
  }
};
</script>

<style lang="less" scoped>
body,
html {
  height: 100%;
}
#read-container .top-pop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
}
.top-pop {
  font-size: 20px;
  color: #976600;
}
.showTopLite {
  width: calc(100% - 40px);
  margin: 60px 20px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  .top {
    display: flex;
    align-items: center;
    height: 70px;
    border-bottom: 0.8px solid #976600;
    div {
      flex: 1;
      padding: 0 10px;
    }
    img {
      width: 36px;
      height: 50px;
      border-radius: 5px;
    }
    h4,
    p {
      max-width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #976600;
    }
    h4 {
      font-size: 16px;
      font-weight: 700;
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 14px;
    }
  }
  .bottom {
    display: flex;
    flex-wrap: wrap;

    div {
      flex: 0 0 25%;
      width: 60px;
      height: 60px;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #976600;
    }
    p {
      font-size: 12px;
      margin: 0;
    }
  }
}
.bottom-pop {
  // box-sizing: border-box;
  transition: all 0.3s;
  overflow: hidden;
  .top {
    display: flex;
    div {
      height: 50px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      p,
      .van-icon {
        color: #976600;
      }
      p {
        margin: 0px;
        font-size: 10px;
        height: 16px;
        line-height: 16px;
      }
    }
  }
  .bottom {
    border-top: 0.8px solid #976600;
    padding: 10px;
    .font-size {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 0;
      p {
        margin: 0;
        font-size: 16px;
        font-weight: bold;
        color: #976600;
      }
      img {
        height: 32px;
        width: 32px;
        display: block;
        margin: 0 20px;
      }
      img:nth-child(2) {
        height: 29px;
        width: 29px;
      }
      img:active {
        height: 35px;
        width: 35px;
      }
    }
  }
}
</style>

<style lang="less">
#read-container {
  .view {
    height: 100%;
    padding: 30px 20px;
    p {
      text-indent: 2em;
      text-align: justify;
    }
  }
  .header {
    width: 100%;
    position: fixed;
    padding: 8px 10px;
    box-sizing: border-box;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
      font-size: 12px;
      color: #666;
    }
    .van-button__text {
      color: #666;
    }
  }
  // 弹窗背景色
  .van-popup {
    background-color: #cbb890;
  }
}
</style>