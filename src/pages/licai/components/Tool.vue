<!-- Lical-Tool -->
<template>
  <div class="tool">
    <div class="tool-block">
      <div class="tool-title border-bottom">
        推荐工具
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LicaiTool'
}
</script>

<style lang="stylus" scoped>
  .tool
    position absolute
    width 100%
    top 8.9rem
    opacity .8
    z-index 99
    .tool-block
      margin .24rem auto
      width 90%
      height 3.5rem
      border 1px solid #f8f8f8
      border-radius .2rem
      background #fff
      .tool-title
        position relative
        top 0
        left .2rem
        line-height .8rem
        font-size .32rem
        font-weight bold
        width 95%
</style>
