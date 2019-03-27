<!-- Licai -->
<template>
  <div class="licai">
    <licai-header></licai-header>
    <licai-content></licai-content>
    <licai-tool></licai-tool>
    <licai-ad></licai-ad>
    <licai-tab-bar></licai-tab-bar>
  </div>
</template>

<script>
import LicaiTabBar from './components/TabBar'
import LicaiHeader from './components/Header'
import LicaiContent from './components/Content'
import LicaiTool from './components/Tool'
import LicaiAd from './components/Ad'
export default {
  name: 'Licai',
  components: {
    LicaiTabBar,
    LicaiHeader,
    LicaiContent,
    LicaiTool,
    LicaiAd
  }
}
</script>

<style lang="stylus" scoped>
  .licai
    width 100%
    height 17rem
    background-image url('../../assets/beijing.png')
    background-size: 100% 25rem
</style>
