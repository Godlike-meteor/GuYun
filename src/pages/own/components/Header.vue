<!-- Own-Header -->
<template>
  <div class="header">
    <p class="title">我的</p>
  </div>
</template>

<script>
export default {
  name: 'OwnHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    line-height .86rem
    background #f5f5f5
    color #000
    text-align center
    font-size .36rem
    font-weight bold
    .title
      flex 1
</style>
