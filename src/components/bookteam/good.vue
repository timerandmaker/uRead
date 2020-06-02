<template>
  <div>
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
    return {
    };
  },
  methods: {
   
  },
  mounted() {
    
  },
  destroyed() {
    
  }
};
</script>

<style lang="less" scoped>
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
.post {
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
</style>