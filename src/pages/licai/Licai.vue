<!-- Licai -->
<template>
  <div class="licai">
    <licai-header></licai-header>
    <licai-content :collection="collection"></licai-content>
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
import axios from 'axios'
export default {
  name: 'Licai',
  components: {
    LicaiTabBar,
    LicaiHeader,
    LicaiContent,
    LicaiTool,
    LicaiAd
  },
  data () {
    return {
      collection: {}
    }
  },
  methods: {
    getLicaiInfo () {
      axios.get('/api/licai.php').then(this.getLicaiInfoSucc)
    },
    getLicaiInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.collection = data.collection
      }
    }
  },
  mounted () {
    this.getLicaiInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .licai
    width 100%
    height 17.5rem
    background-image url('../../assets/beijing.png')
    background-size: 100% 25rem
</style>
