<!-- Lical-Content -->
<template>
  <div class="content">
    <div class="content-block">
      <div class="content-title border-bottom">
        个性推荐
      </div>
      <div class="content-img">
        <img class="content-img-url" :src="collection.picture">
      </div>
      <div class="content-desc">
        {{collection.name}}
      </div>
      <div class="content-price">
        ￥{{collection.price}} 有{{collection.profitProbability}}概率看涨
      </div>
      <div class="content-change" @click="handleChangeCard">
        购 买
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
  name: 'LicaiContent',
  props: {
    collection: Object
  },
  methods: {
    handleChangeCard () {
      axios.get('/api/buy.php?orderImgUrl=' + this.collection.picture + '&orderContent=' + this.collection.name)
      MessageBox.alert('购买成功！').then(() => {
        this.$router.push('/own')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    position absolute
    width 100%
    top 1.1rem
    opacity .8
    z-index 99
    .content-block
      margin .32rem auto
      width 90%
      height 7rem
      border 1px solid #f8f8f8
      border-radius .2rem
      background #fff
      background-image url('../../../assets/design.png')
      background-size: 100% 100%
    .content-title
      position relative
      top 0
      left .2rem
      line-height .8rem
      font-size .32rem
      font-weight bold
      width 95%
    .content-img
      width 2.4rem
      height 2.4rem
      margin .1rem auto
      border-radius 50%
      background #fff
      .content-img-url
        width 100%
        height 100%
        border-radius 50%
    .content-desc
      margin-top .8rem
      text-align center
      width 100%
      font-weight bold
      font-size .52rem
    .content-price
      margin-top .3rem
      text-align center
      width 100%
      font-size .32rem
      color rgb(100,100,100)
    .content-change
      margin .38rem auto
      width 81%
      height 1.1rem
      line-height 1.1rem
      text-align center
      font-size .44rem
      color #fff
</style>
