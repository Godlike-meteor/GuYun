<!-- Detail-Banner -->
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe632;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <Fade>
      <gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></gallary>
    </Fade>
  </div>
</template>

<script>
import Gallary from '@/common/gallary/Gallary'
import Fade from '@/common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    Gallary,
    Fade
  },
  data () {
    return {
      imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550304055051&di=83c58578da7e399dd6120a7f5352ca05&imgtype=0&src=http%3A%2F%2Fwww.jjl.cn%2Fuploadfile%2F2017%2F1212%2F1212151307240210273.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550305600275&di=1d786fbb45bbc9e1acecd424a4fbae68&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180726%2F021e706738124dee8f611931f94d3921.jpeg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff;
      background-image linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,.6))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        padding 0 .4rem
        line-height .32rem
        height .32rem
        border-radius .2rem
        background rgba(0,0,0,.4)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
