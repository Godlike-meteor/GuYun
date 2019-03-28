<!-- Home-Recommend -->
<template>
  <div>
    <div class="title">古玩鉴赏</div>
    <ul>
      <router-link
        tag="li"
        :to="'/detail/' + item.id"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-author">{{item.author}}</p>
        </div>
      </router-link>
    </ul>
    <div class="nomore"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'
  .title
    line-height .8rem
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    background-color #fff
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .28rem
        ellipsis()
      .item-desc
        line-height .4rem
        font-size .18rem
        color #ccc
        ellipsis()
      .item-author
        line-height .8rem
        font-size .18rem
        color #aaa
  .nomore
    width 100%
    padding 1.2rem 0 0 0
</style>
