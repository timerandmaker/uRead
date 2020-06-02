<template>
  <div id="rank">
    <van-tabs sticky background="#1989fa" v-model="active">
      <template #nav-left>
        <div @click="$router.back(-1)" class="nav-left">
          <van-icon color="#fff" size="26" name="arrow-left" />
        </div>
      </template>
      <van-tab title="全部" v-for="i in 10" :key="i">
        <rknormal></rknormal>
      </van-tab>
    </van-tabs>
    <div class="nav-right" @click="showSexChange">
      <van-icon color="#fff" size="26" name="smile-o" />
    </div>
    <!-- 右侧弹框男女选项 -->
    <div ref="sexChangeRef" class="sex-change">
      <div>
        <van-icon size="24" name="smile-o" />
        <span>男生排行</span>
        <van-icon class="two" color="#1989fa" size="24" name="success" />
      </div>
      <div>
        <van-icon size="24" name="flower-o" />
        <span>女生排行</span>
        <van-icon color="#1989fa" size="24" name="success" />
      </div>
    </div>
    <!-- 蒙版 -->
    <van-overlay :show="showCover" @click="closeCover" />
  </div>
</template>

<script>
import rknormal from "@/components/selected/RankNormal.vue";
export default {
  data() {
    return {
      // 顶部类别活跃索引
      active: 0,
      // 显示遮罩层
      showCover: false
    };
  },
  methods: {
    // 关闭遮罩和性别选择
    closeCover() {
      this.showCover = false;
      this.$refs.sexChangeRef.style.visibility = "hidden";
    },
    // 显示性别选择和遮罩
    showSexChange() {
      if (this.showCover == false) {
        this.showCover = true;
        this.$refs.sexChangeRef.style.visibility = "visible";
      } else {
        this.showCover = false;
        this.$refs.sexChangeRef.style.visibility = "hidden";
      }
    }
  },
  components: {
    rknormal
  }
};
</script>

<style lang="less" scoped>
#rank {
  .nav-left {
    position: fixed;
    left: 0;
    text-align: center;
    width: 44px;
    height: 44px;
    padding-top: 9px;
    box-sizing: border-box;
    background-color: #1989fa;
    z-index: 1;
  }
  .nav-right {
    position: fixed;
    top: 0;
    right: 0;
    height: 44px;
    width: 44px;
    background-color: #1989fa;
    padding-top: 9px;
    box-sizing: border-box;
    text-align: center;
    &:active {
      background-color: royalblue;
    }
    &::after {
      content: "";
      width: 0;
      height: 0;
      display: block;
      position: absolute;
      right: 5px;
      top: 30px;
      border-top: 5px solid transparent;
      border-left: 5px solid transparent;
      border-bottom: 5px solid #fff;
      border-right: 5px solid #fff;
    }
  }
  .sex-change {
    box-shadow: 0 0 10px #ccc;
    width: 160px;
    position: absolute;
    right: 6px;
    top: 54px;
    background-color: #fff;
    z-index: 9;
    visibility: hidden;
    transition: all 0.3s;
    &::before {
      content: "";
      position: absolute;
      top: -2px;
      right: 10px;
      width: 0px;
      height: 0px;
      display: block;
      border-top: 6px solid #fff;
      border-right: 6px solid #fff;
      border-bottom: 6px solid transparent;
      border-left: 6px solid transparent;
      transform: rotate(-45deg);
      box-shadow: 2px -2px 3px #ccc;
      z-index: -1;
    }
    div {
      display: flex;
      position: relative;
      z-index: 3;
      background-color: #fff;
      align-items: center;
      height: 60px;
      position: relative;
      padding: 10px;
      box-sizing: border-box;
      &:active {
        background-color: #eee;
      }
      span {
        margin-left: 10px;
        font-size: 16px;
      }
      .van-icon:nth-of-type(2) {
        position: absolute;
        right: 10px;
      }
    }
  }
}
</style>

<style lang="less">
#rank {
  .van-sticky {
    padding: 0 43px;
  }
}
</style>