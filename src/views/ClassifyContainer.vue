<template>
  <div id="classify">
    <!-- 头部导航 -->
    <van-nav-bar
      title="分类"
      left-text="返回"
      right-text="排名"
      color="#fff"
      fixed
      placeholder
      left-arrow
      @click-left="$router.back(-1)"
      @click-right="$router.push('/rank')"
    />
    <!-- 侧边分类选择 -->
    <van-tree-select height="calc(100vh - 46px)" :items="selectItems" :main-active-index.sync="selectActive">
      <template #content>
        <div v-if="selectActive==0">
          <cfnormal></cfnormal>
        </div>
        <div v-if="selectActive==1"></div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import cfnormal from "@/components/selected/ClassifyNormal.vue";
export default {
  data() {
    return {
      selectItems: [{ text: "男生" }, { text: "女生" }],
      // 侧栏索引选择
      selectActive: 0
    };
  },
  components: {
    cfnormal
  }
};
</script>

<style lang="less" scoped>
#classify {
  .van-sidebar {
    text-align: center;
  }
  .van-tree-select__content {
    flex: 3;
  }
}
</style>

<style lang="less">
#classify {
  .van-nav-bar {
    background-color: #1989fa;
  }
  .van-sidebar-item--select::before {
    background-color: #1989fa;
  }
  .van-nav-bar .van-icon {
    color: #fff;
  }
  .van-nav-bar__text {
    color: #fff;
  }
}
</style>