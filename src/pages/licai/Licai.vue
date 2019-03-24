<!-- Licai -->
<template>
  <div class="licai">
    licai
    <tab-bar :select="selected"></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/common/tabbar/TabBar'
export default {
  name: 'Licai',
  components: {
    TabBar
  },
  data () {
    return {
      selected: 'licai'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
