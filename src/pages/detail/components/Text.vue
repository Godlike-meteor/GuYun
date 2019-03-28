<!-- Detail-Text -->
<template>
  <div>
    <div class="text-title">
      {{title}}
    </div>
    <div class="text-author">
      <img class="author-img-src" :src="authorImgSrc" alt="132">
      <div class="author-content">
        <div class="author-name">
          {{authorName}}
        </div>
        <div class="author-desc">
          {{authorDesc}}
        </div>
      </div>
    </div>
    <div class="text-main">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailText',
  props: {
    title: String,
    authorName: String,
    authorDesc: String,
    authorImgSrc: String,
    text: String
  }
}
</script>

<style lang="stylus" scoped>
  .text-title
    width 100%
    height 1rem
    line-height 1rem
    font-size .4rem
    text-indent 1em
    font-weight bold
    letter-spacing .2rem
  .text-author
    width 100%
    height 1rem
    line-height 1rem
    .author-img-src
      margin-top -.6rem
      margin-left .2rem
      width .7rem
      height .7rem
      border-radius 50%
    .author-content
      display inline-block
      height .7rem
      .author-name
        line-height .45rem
        font-size .32rem
        font-weight bold
      .author-desc
        line-height .45rem
        font-size .28rem
        color #b1b1b1
  .text-main
    line-height .6rem
    letter-spacing .1rem
    text-indent 2em
</style>
