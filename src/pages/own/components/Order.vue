<!-- Own-Order -->
<template>
  <div class="order">
    <div class="order-radius border-bottom">
      我的订单
    </div>
    <div class="order-block" v-for="item of order" :key="item.id">
      <img class="order-icon" :src="item.orderImgUrl" alt="">
      <div class="order-content">
        {{item.orderContent}}
      </div>
      <div class="iconfont message-link">&#xe628;</div>
    </div>
    <div class="order-radius-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'OwnOrder',
  data () {
    return {
      order: [{
        orderImgUrl: 'http://file8.gucn.com/file/CurioPicfile/20190314/GucnP_U563536T150091461552568648936.jpg',
        orderContent: '中国大盘子'
      }, {
        orderImgUrl: 'http://file8.gucn.com/file/CurioPicfile/20190314/GucnP_U563536T150091461552568648936.jpg',
        orderContent: '中国大盘子'
      }, {
        orderImgUrl: 'http://file8.gucn.com/file/CurioPicfile/20190314/GucnP_U563536T150091461552568648936.jpg',
        orderContent: '中国大盘子'
      }, {
        orderImgUrl: 'http://file8.gucn.com/file/CurioPicfile/20190314/GucnP_U563536T150091461552568648936.jpg',
        orderContent: '中国大盘子'
      }, {
        orderImgUrl: 'http://file8.gucn.com/file/CurioPicfile/20190314/GucnP_U563536T150091461552568648936.jpg',
        orderContent: '中国大盘子'
      }, {
        orderImgUrl: 'http://file8.gucn.com/file/CurioPicfile/20190314/GucnP_U563536T150091461552568648936.jpg',
        orderContent: '中国大盘子'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .order
    background #f5f5f5
    padding-bottom 1.6rem
    .order-radius
      margin 0 auto
      width 90%
      line-height .8rem
      border-radius .2rem .2rem 0 0
      background #fff
      font-weight bold
      text-align center
    .order-block
      margin 0 auto
      width 90%
      line-height 1.5rem
      background #fff
    .order-icon
      width 1rem
      height 1rem
      margin-left .3rem
    .order-content
      display inline-block
      margin-left .1rem
      line-height 1rem
      width 63%
      font-weight bold
    .message-link
      display inline-block
      width 1rem
      height 1rem
      float right
    .order-radius-bottom
      margin 0 auto
      width 90%
      height .2rem
      border-radius 0 0 .2rem .2rem
      background #fff
</style>
