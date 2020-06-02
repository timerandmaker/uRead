<template>
  <div id="followRow" class="follow">
    <van-row @click="detailAuthor(i-1)" v-for="i in 10" :key="i">
      <van-col span="4">
        <img src="../../assets/images/testBook.jpg" alt />
      </van-col>
      <van-col span="16">
        <h3>作者名称{{i}}</h3>
        <p>作者介绍，或者作者作品介绍</p>
      </van-col>
      <van-col span="4">
        <van-button
          @click.stop="followAuthor"
          size="mini"
          color="#1989FA"
          :plain="followStatus?true:false"
          :icon="followStatus?'success':'plus'"
          type="primary"
        >关注</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      followStatus: true
    };
  },
  methods: {
    // 详情作者
    detailAuthor(i) {
      let row = document.getElementById("followRow").childNodes[i];
      // js控制样式
      setTimeout(() => {
        row.style.backgroundColor = "#fff";
      }, 200);
      row.style.backgroundColor = "#eee";
      // 点击事件
    },
    // 关注作者
    followAuthor() {
      this.followStatus = !this.followStatus;
    }
  },
  created() {
    console.log("follow组件被创建");
  },
  destroyed() {
    console.log("follw组件被销毁");
  }
};
</script>

<style lang="scss" scoped>
.follow {
  min-height: 600px;
  .van-row {
    padding: 20px 15px;
    border-top: 0.8px solid #eee;
    transition: all 0.2s;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    h3 {
      font-size: 16px;
      margin: 3px 0;
      font-weight: normal;
    }
    p {
      font-size: 14px;
      color: #9999a0;
      margin: 4px 0;
      max-width: 190px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .van-button {
      margin-top: 16px;
    }
  }
  .van-row:first-child {
    border-top: none;
  }
}
</style>