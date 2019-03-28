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
  data () {
    return {
      title: '学院我说了算！',
      authorName: '观察者网',
      authorDesc: '昨天 · 观察者网 · 中国关怀 · 全球视野',
      authorImgSrc: 'http://img2.imgtn.bdimg.com/it/u=252376943,2755465431&fm=26&gp=0.jpg',
      text: '涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。涉事学生：我就想要一个公平。记者发现，涉事学生先是通过一自媒体大V发布了这段视频，然后用名为“YoungS-Y”的账号，在社交媒体上更新学校对该事件的处理进展。'
    }
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
    line-height .4rem
    text-indent 1em
</style>
