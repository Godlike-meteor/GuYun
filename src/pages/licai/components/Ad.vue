<!-- Lical-Ad -->
<template>
  <div class="ad">
    <router-link tag="div" :to="linkTo" class="ad-block">
      <div class="ad-text">
        {{adText}}
      </div>
      <div class="ad-button">
         <div class="iconfont ad-link">&#xe628;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LicaiAd',
  data () {
    return {
      adText: '唐代陶猴头，不容错过~',
      linkTo: '/detail/1'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .ad
    position absolute
    width 100%
    top 13.7rem
    opacity .8
    z-index 99
    .ad-block
      margin .24rem auto
      width 90%
      height 2rem
      line-height 2rem
      border 1px solid #f8f8f8
      border-radius .2rem
      background #fff
      .ad-text
        float left
        margin-left .2rem
        width 80%
        font-size .4rem
        font-weight bold
      .ad-button
        width 10%
        float right
</style>
