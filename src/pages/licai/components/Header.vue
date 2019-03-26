<!-- Licai-Header -->
<template>
  <div>
    <div class="licai-fixed border-bottom">
      韵味古玩
      <router-link to='/'>
        <div class="iconfont licai-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style lang="stylus" scoped>
  .licai-fixed
    position fixed
    top 0
    left 0
    right 0
    height .86rem
    line-height .86rem
    text-align center
    font-size .32rem
    font-weight bold
    background #fff
    .licai-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #000
</style>
