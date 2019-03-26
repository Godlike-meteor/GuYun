<!-- Licai -->
<template>
  <div class="licai">
    <licai-header></licai-header>
    <licai-tab-bar></licai-tab-bar>
  </div>
</template>

<script>
import LicaiTabBar from './components/TabBar'
import LicaiHeader from './components/Header'
export default {
  name: 'Licai',
  components: {
    LicaiTabBar,
    LicaiHeader
  }
}
</script>

<style lang="stylus" scoped>
  .licai
    width 100%
    height 25rem
    background-image url('../../assets/beijing.png')
    background-size: 100% 25rem
</style>
