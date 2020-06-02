<template>
  <div>
    <!-- 书架列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoadBS">
      <div
        ref="containerRef"
        @click="readBook(i-1)"
        :class="['container',i==1?'':'top-border']"
        v-for="i in 10"
        :key="i"
      >
        <div class="left">
          <div>标签</div>
          <img src="../../assets/images/testBook.jpg" alt />
        </div>
        <div class="right">
          <h3>仙虞计</h3>
          <p>读到了的本书的某章节</p>
          <p>这里是作品简介</p>
          <van-icon @click.stop="alertTag" name="ellipsis" size="26px" color="#9999a0" />
        </div>
      </div>
    </van-list>
    <!-- 书籍设置弹出层 -->
    <van-popup v-model="actionSheetShow" get-container="#app" position="bottom">
      <!-- 详情 -->
      <van-row>
        <van-col span="5">
          <img src="../../assets/images/testBook.jpg" alt />
        </van-col>
        <van-col span="15">
          <h3>仙虞计</h3>
          <p>读到了的本书的某章节</p>
        </van-col>
        <van-col span="4">
          <van-button
            @click="$router.push({path: '/detail', query: {bookid: selectedBookId}})"
            size="mini"
            plain
            hairline
            type="info"
          >详情</van-button>
        </van-col>
      </van-row>
      <!-- 操作 -->
      <div style="margin-top: 10px;">
        <van-grid :border="false" :column-num="4">
          <van-grid-item>
            <van-switch v-model="checked" size="20px" />
            <p>置顶</p>
          </van-grid-item>
          <van-grid-item>
            <van-icon size="40px" name="expand-o" />
            <p>分享</p>
          </van-grid-item>
          <van-grid-item @click="$router.push('/bookteam')">
            <van-icon size="40px" name="smile-comment-o" />
            <p>书友圈</p>
          </van-grid-item>
          <van-grid-item>
            <van-icon size="40px" name="delete" />
            <p>删除</p>
          </van-grid-item>
        </van-grid>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 书籍列表
      bslist: [],
      // 加载状态
      loading: false,
      // 是否结束
      finished: false,
      // 显示操作弹窗
      actionSheetShow: false,
      // 置顶状态
      checked: true,
      // 选中的书籍id
      selectedBookId: 0
    };
  },
  methods: {
    onLoadBS() {
      this.loading = false;
    },
    readBook(i) {
      //响应点击样式
      this.$refs.containerRef[i].style.backgroundColor = "#eee";
      setTimeout(() => {
        this.$refs.containerRef[i].style.backgroundColor = "";
        //跳转至阅读页面
        this.$router.push("/read");
      }, 100);
    },
    alertTag() {
      this.actionSheetShow = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 122px;
  box-sizing: border-box;
  padding: 18px;
  display: flex;
  transition: all 0.3s;
  .left {
    flex: 1;
    box-shadow: 5px 5px 10px #ccc;
    overflow: hidden;
    position: relative;
    width: 60px;
    height: 86px;
    img {
      width: 100%;
      height: 100%;
    }
    div {
      position: absolute;
      width: 60px;
      height: 16px;
      background-color: slateblue;
      font-size: 10px;
      line-height: 16px;
      color: #fff;
      text-align: center;
      transform: rotate(-45deg) translate(-15px, -10px);
    }
  }
  .right {
    flex: 5;
    position: relative;
    h3 {
      font-size: 16px;
      margin: 5px 15px;
      font-weight: normal;
    }
    p {
      font-size: 14px;
      color: #9999a0;
      margin: 5px 15px;
      max-width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .van-icon {
      position: absolute;
      right: 5px;
      top: 34px;
    }
    .van-icon:active {
      box-shadow: 0 0 10px #ccc inset;
      top: 36px;
    }
  }
}
.top-border {
  border-top: 1px solid #eee;
}
.van-popup {
  width: 100%;
  height: 35%;
  padding: 18px;
  box-sizing: border-box;
  .van-row,
  .van-col {
    height: 70px;
  }
  .van-grid {
    border-top: 1px solid #eee;
  }
  img {
    width: 50px;
    height: 70px;
    display: block;
  }
  h3 {
    font-size: 16px;
    margin: 5px 0;
    font-weight: normal;
  }
  p {
    font-size: 14px;
    color: #9999a0;
    margin: 10px 0;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .van-switch {
    margin: 9px 0;
  }
  .van-button {
    margin-top: 24px;
  }
}
</style>