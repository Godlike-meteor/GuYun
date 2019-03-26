<!-- Own-TabBar -->
<template>
  <div class="tabbar">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="own">
        <img slot="icon" src="../../../assets/wode.png">
        <p>我的</p>
      </mt-tab-item>
      <mt-tab-item id="home">
        <img slot="icon" src="../../../assets/shouye.png">
        <p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="licai">
        <img slot="icon" src="../../../assets/licai.png">
        <p>古玩</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'OwnTabBar',
  data () {
    return {
      selected: 'own'
    }
  },
  watch: {
    selected: function (val, oldVal) {
      if (val === 'own') {
        this.$router.push('/own')
      } else if (val === 'home') {
        this.$router.push('/')
      } else if (val === 'licai') {
        this.$router.push('/licai')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tabbar
    position fixed
    bottom 0
    width 100%
    height 1.2rem
    z-index 102
</style>
