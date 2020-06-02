<template>
  <div id="login-container">
    <!-- 底层背景 -->
    <div class="bottom-container">
      <div v-for="item in 6" :key="item" class="list">
        <img v-for="i in 6" :key="i" src="../assets/images/testBook.jpg" alt />
      </div>
    </div>
    <!-- 登录视图 -->
    <transition>
      <component @changeComponent="changeComponent" :is="activeComponent"></component>
    </transition>
  </div>
</template>

<script>
import login from "../components/login/login.vue";
import register from "../components/login/register.vue";
export default {
  data() {
    return {
      activeComponent: "login"
    };
  },
  methods: {
    changeComponent(component) {
      this.activeComponent = component;
    }
  },
  components: {
    login,
    register
  }
};
</script>

<style lang="less" scoped>
// 底层图纸移动周期耗时
@moveSec: 20s;
#login-container {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.bottom-container {
  z-index: -1;
  width: 900px;
  height: 1000px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  filter: grayscale(100%) opacity(30%);
  .list {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    animation: move @moveSec linear infinite;
    img {
      width: 100px;
      height: auto;
      display: block;
      margin-top: 30px;
    }
    &:nth-child(2) {
      animation-delay: -@moveSec / 2;
    }
    &:nth-child(3) {
      animation-delay: 0s;
    }
    &:nth-child(4) {
      animation-delay: -@moveSec / 2;
    }
    &:nth-child(5) {
      animation-delay: 0s;
    }
    &:nth-child(6) {
      animation-delay: -@moveSec / 2;
    }
  }
}
@keyframes move {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(100px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>