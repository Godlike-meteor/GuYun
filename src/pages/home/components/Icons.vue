<!-- Home-Icons -->
<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="page of pages" :key="page.id">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <span class="iconfont icon-img-content" :class="[item.iconClassName]"></span>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 40%
  .icons
    background-color #fff
    border-radius 5px
    .icon
      position relative
      overflow hidden
      width 20%
      height 0
      float left
      padding-bottom 20%
      .icon-img
        position absolute
        top .2rem
        left .32rem
        right .32rem
        bottom .44rem
        border-radius 50%
        box-sizing border-box
        border 1px solid #cba07a;
        .icon-img-content
          position relative
          top 20%
          left 20%
          font-size 180%
          color #cba07a;
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        color #333;
        font-size .24rem
        text-align center
        ellipsis()
</style>
