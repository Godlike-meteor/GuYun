<!-- Own-User -->
<template>
  <div class="user">
    <div class="user-block">
      <img class="user-img" :src="user.userImgUrl" alt="">
      <div class="user-information">
        <div class="user-title">
          {{user.userName}}
        </div>
        <div class="user-desc">
          {{user.userDesc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OwnUser',
  props: {
    user: Object
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
