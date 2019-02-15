<!-- Home-Header -->
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont user-icon">&#xe66f;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      搜索基金、股票、债券...
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe615;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
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
      width 1.24rem
      float right
      text-align center
      .arrow-icon
        margin-left -.04rem
        font-size .24rem
</style>
