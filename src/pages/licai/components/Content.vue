<!-- Lical-Content -->
<template>
  <div class="content">
    <div class="content-block">
      <div class="content-title border-bottom">
        个性推荐
      </div>
      <div class="content-img">
        <img class="content-img-url" src="http://file8.gucn.com/file/CurioPicfile/20190314/GucnP_U563536T150091461552568648936.jpg" alt="">
      </div>
      <div class="content-desc">
        中国大盘子
      </div>
      <div class="content-price">
        ￥250,000 预计涨幅15%
      </div>
      <div class="content-change" @click="handleChangeCard">
        购 买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LicaiContent',
  methods: {
    handleChangeCard () {
      console.log('123')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    position absolute
    width 100%
    top 1.1rem
    opacity .8
    z-index 99
    .content-block
      margin .32rem auto
      width 90%
      height 7rem
      border 1px solid #f8f8f8
      border-radius .2rem
      background #fff
      background-image url('../../../assets/design.png')
      background-size: 100% 100%
    .content-title
      position relative
      top 0
      left .2rem
      line-height .8rem
      font-size .32rem
      font-weight bold
      width 95%
    .content-img
      width 2.4rem
      height 2.4rem
      margin .1rem auto
      border-radius 50%
      background #fff
      .content-img-url
        width 100%
        height 100%
        border-radius 50%
    .content-desc
      margin-top .8rem
      text-align center
      width 100%
      font-weight bold
      font-size .52rem
    .content-price
      margin-top .3rem
      text-align center
      width 100%
      font-size .32rem
      color rgb(100,100,100)
    .content-change
      margin .38rem auto
      width 81%
      height 1.1rem
      line-height 1.1rem
      text-align center
      font-size .44rem
      color #fff
</style>
