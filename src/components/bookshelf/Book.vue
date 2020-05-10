<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoadBS">
      <van-cell v-for="item in bslist" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bslist: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoadBS() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.bslist.push(this.bslist.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.bslist.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>