<template>
  <div id="app">
    <transition>
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<style lang="scss">
body,
html,
#app {
  height: 100%;
}
.v-enter{
  transform: translateX(100%);
}
.v-leave-to{
  background-color: #ccc;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,.v-leave-active{
  transition: all 0.3s;
}
.element::-webkit-scrollbar { width: 0 !important }
</style>
