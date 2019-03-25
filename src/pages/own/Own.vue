<!-- Own -->
<template>
  <div class="own">
    <own-header></own-header>
    <own-user></own-user>
    <own-tab-bar></own-tab-bar>
  </div>
</template>

<script>
import OwnTabBar from './components/TabBar'
import OwnHeader from './components/Header'
import OwnUser from './components/User'
export default {
  name: 'Own',
  components: {
    OwnTabBar,
    OwnHeader,
    OwnUser
  }
}
</script>

<style lang="stylus" scoped>
  .own
    background #f5f5f5
</style>
