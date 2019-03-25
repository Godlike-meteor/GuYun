<!-- Own-User -->
<template>
  <div class="user">
    <div class="user-block">
      <img class="user-img" :src="userImgUrl" alt="">
      <div class="user-information">
        <div class="user-title">
          {{userName}}
        </div>
        <div class="user-desc">
          {{userDesc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OwnUser',
  data () {
    return {
      userImgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553510514075&di=d1c580393da2665a80bb8a944ba291f2&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F29%2F78%2F5923a895b5242_610.jpg',
      userName: '13136611997',
      userDesc: '为保障账户安全，请设置欢迎语'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .user
    display flex
    background #f5f5f5
    .user-block
      margin .32rem auto
      width 90%
      line-height 1.8rem
      border 1px solid #f8f8f8
      border-radius .2rem
      background #fff
      .user-img
        width 1rem
        height 1rem
        margin-left .5rem
      .user-information
        width 70%
        height 1rem
        margin-top .4rem
        margin-right .3rem
        float right
        .user-title
          line-height .6rem
          font-size .32rem
          font-weight bold
        .user-desc
          line-height .4rem
</style>
