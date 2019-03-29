<!-- Own -->
<template>
  <div class="own">
    <own-header></own-header>
    <own-user :user="user"></own-user>
    <own-tab-bar></own-tab-bar>
    <own-message></own-message>
    <own-order :order="orderList"></own-order>
  </div>
</template>

<script>
import OwnTabBar from './components/TabBar'
import OwnHeader from './components/Header'
import OwnUser from './components/User'
import OwnMessage from './components/Message'
import OwnOrder from './components/Order'
import axios from 'axios'
export default {
  name: 'Own',
  components: {
    OwnTabBar,
    OwnHeader,
    OwnUser,
    OwnMessage,
    OwnOrder
  },
  data () {
    return {
      orderList: [],
      user: {}
    }
  },
  methods: {
    getOwnInfo () {
      axios.get('/api/own.php').then(this.getOwnInfoSucc)
    },
    getOwnInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.orderList = data.orderList
        this.user = data.user
      }
    }
  },
  mounted () {
    this.getOwnInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .own
    background #f5f5f5
</style>
