<!-- Home-Header -->
<template>
  <div class="header">
    <router-link tag="div" to="/own" class="header-left">
      <div class="iconfont user-icon">&#xe66f;</div>
    </router-link>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      搜索瓷器、书画、文玩...
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe615;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    line-height .86rem
    background #fdfdfd
    color #323232
    .header-left
      width .64rem
      float left
      .user-icon
        text-align center
        font-size .5rem
        margin-left .15rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background #f5f5f5
      border-radius .1rem
      color #ccc
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #000
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
