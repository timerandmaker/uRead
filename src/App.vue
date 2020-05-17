<template>
  <div id="app">
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    // 监听手机的退出键，防止按退出键直接退出应用
    listenBack() {
      var first = null;
      document.addEventListener("plusready", () => {
        var webview = plus.webview.currentWebview();
        plus.key.addEventListener("backbutton", () => {
          if (
            this.$route.path == "/bookshelf" ||
            this.$route.path == "/selected" ||
            this.$route.path == "/mine" ||
            this.$route.path == "/find"
          ) {
            if (!first) {
              first = new Date().getTime();
              this.$toast("再按一次退出应用");
              setTimeout(function() {
                first = null;
              }, 1000);
            } else {
              if (new Date().getTime() - first < 1000) {
                // 返回手机桌面
                plus.runtime.quit();
              }
            }
          }else{
            // 返回上一级页面
            webview.back();
          }
        });
      });
    }
  },
  mounted() {
    this.listenBack();
  }
};
</script>

<style lang="scss">
body,
html,
#app {
  height: 100%;
}
.v-enter {
  transform: translateX(100%);
}
.v-leave-to {
  background-color: #ccc;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
