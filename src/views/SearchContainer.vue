<template>
  <div>
    <works></works>
  </div>
</template>

<script>
import works from '@/components/search/WorksSearch.vue'
export default {
  data() {
    return {};
  },
  components: {
    works
  },
  mounted(){
    console.log(this.$store.state.cityID)
  }
};
</script>

<style lang="scss" scoped>
</style>