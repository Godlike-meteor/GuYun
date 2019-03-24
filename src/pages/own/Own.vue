<!-- Own -->
<template>
  <div class="own">
    own
    <tab-bar :select="selected"></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/common/tabbar/TabBar'
export default {
  name: 'Own',
  components: {
    TabBar
  },
  data () {
    return {
      selected: 'own'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
