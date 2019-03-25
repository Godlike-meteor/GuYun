<!-- Own-Message -->
<template>
  <div class="message">
    <div class="message-block">
      <img class="message-icon" src="../../../assets/message.png" alt="">
      <div class="message-title">
        消息
      </div>
      <div class="iconfont message-link">&#xe628;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OwnMessage'
}
</script>

<style lang="stylus" scoped>
  .message
    display flex
    background #f5f5f5
    .message-block
      margin .32rem auto
      width 90%
      line-height 1.2rem
      border 1px solid #f8f8f8
      border-radius .2rem
      background #fff
      .message-icon
        width .44rem
        height .44rem
        margin-left .44rem
      .message-title
        display inline-block
        font-weight bold
        margin-left .2rem
      .message-link
        display inline-block
        width 1rem
        height 1rem
        float right
</style>
