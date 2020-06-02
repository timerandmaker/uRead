<template>
  <div id="dynamic">
    <!-- 置顶 -->
    <div class="top">
      <div class="line" v-for="i in 3" :key="i">
        <div>置顶</div>
        <p>这里是置顶，里面有注意信息顶</p>
      </div>
    </div>
    <!-- 动态 -->
    <div class="dynamic" v-for="i in 10" :key="i">
      <div class="left">
        <img src="../../assets/images/testBook.jpg" alt />
      </div>
      <div class="right">
        <p class="username">用户名字</p>
        <p
          class="content"
        >这里是主体部分，发布的是用户帖子的内容这里是主体部分，发布的是用户帖子的内容这里是主体部分，发布的是用户帖子的内容这里是主体部分，发布的是用户帖子的内容这里是主体部分，发布的是用户帖子的内容这里是主体部分，发布的是用户帖子的内容这里是主体部分，发布的是用户帖子的内容这里是主体部分，发布的是用户帖子的内容这里是主体部分，发布的是用户帖子的内容</p>
        <footer>
          <p>35分钟前</p>
          <div class="inner-right">
            <div>
              <van-icon size="14" name="comment-o"></van-icon>
              <span>评论</span>
            </div>
            <div>
              <van-icon size="14" name="good-job-o"></van-icon>
              <span>点赞</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <!-- 发表 -->
    <!-- <div class="post el-icon-edit">发帖</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  destroyed() {}
};
</script>

<style lang="less" scoped>
#dynamic {
  .top {
    .line {
      display: flex;
      align-items: center;
      height: 40px;
      div {
        width: 40px;
        text-align: center;
        line-height: 20px;
        height: 20px;
        font-size: 12px;
        color: #fff;
        margin-left: 6px;
        border-radius: 5px;
        background-image: linear-gradient(to bottom, #1989fa, #69b2fa);
      }
      p {
        margin: 0 0 0 10px;
        font-size: 15px;
        height: 20px;
        line-height: 20px;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .dynamic {
    display: flex;
    overflow: hidden;
    border-top: 0.8px solid #eee;
    padding: 10px;
    .left {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      margin-top: 16px;
      margin-right: 6px;
      margin: 6px 6px 0 0;
      img {
        display: flex;
        width: 40px;
      }
    }
    .right {
      flex: 1;
      .username {
        font-size: 16px;
        color: #666;
        margin: 6px 0;
      }
      .content {
        font-size: 17px;
        margin: 14px 0;
        overflow: hidden;
        text-align: justify;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
      footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        p {
          margin: 0;
          font-size: 13px;
          color: #ccc;
        }
        .inner-right {
          color: #666;
          display: flex;
          height: 100%;
          justify-content: space-between;
          width: 120px;
          div {
            height: 100%;
            display: flex;
            align-items: center;
          }
          span {
            margin-left: 3px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
