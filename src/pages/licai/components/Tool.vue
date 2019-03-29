<!-- Lical-Tool -->
<template>
  <div class="tool">
    <div class="tool-block">
      <div class="tool-title border-bottom">
        推荐工具
      </div>
      <div class="tool-item">
        <select name="type" id="type" v-model="typeSelected">
          <option v-for="item in typeList" :key="item.id">{{item.name}}</option>
        </select>
      </div>
      <div class="tool-item">
        <select name="money" id="money" v-model="moneySelected">
          <option v-for="item in moneyList" :key="item.id">{{item.name}}</option>
        </select>
      </div>
      <div class="tool-item">
        <select name="risk" id="risk" v-model="riskSelected">
          <option v-for="item in riskList" :key="item.id">{{item.name}}</option>
        </select>
      </div>
      <div class="tool-change" @click="handleClick">
        测 一 测
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LicaiTool',
  data () {
    return {
      typeList: [
        {
          id: 1,
          name: '陶瓷',
          value: '陶瓷'
        }, {
          id: 2,
          name: '书画',
          value: '书画'
        }, {
          id: 3,
          name: '其他',
          value: '其他'
        }
      ],
      moneyList: [
        {
          id: 1,
          name: '10000',
          value: '10000'
        }, {
          id: 2,
          name: '20000',
          value: '20000'
        }, {
          id: 3,
          name: '30000',
          value: '30000'
        }
      ],
      riskList: [
        {
          id: 1,
          name: '低',
          value: '低'
        }, {
          id: 2,
          name: '中',
          value: '中'
        }, {
          id: 3,
          name: '高',
          value: '高'
        }
      ],
      name: '',
      picture: '',
      price: '',
      sum: ''
    }
  },
  methods: {
    handleClick () {
      this.getToolInfo()
    },
    getToolInfo () {
      axios.get('/api/change.php?type=' + this.typeSelected + '&money=' + this.moneySelected + '&risk=' + this.riskSelected).then(this.handlegetToolInfo)
    },
    handlegetToolInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.name = data.name
        this.imgUrl = data.imgUrl
        this.price = data.price
        this.sum = data.sum
        this.$emit('childrenEvent', {
          name: this.name,
          picture: this.imgUrl,
          price: this.price,
          sum: this.sum
        })
      }
    }
  },
  created () {
    this.typeSelected = this.typeList[0].name
    this.moneySelected = this.moneyList[0].name
    this.riskSelected = this.riskList[0].name
  }
}
</script>

<style lang="stylus" scoped>
  .tool
    position absolute
    width 100%
    top 8.9rem
    opacity .8
    z-index 99
    .tool-block
      margin .24rem auto
      width 90%
      height 4rem
      border 1px solid #f8f8f8
      border-radius .2rem
      background-image url('../../../assets/123.jpg')
      background-size: 100% 100%
      .tool-title
        position relative
        top 0
        left .2rem
        line-height .8rem
        font-size .32rem
        font-weight bold
        width 95%
      .tool-item
        float left
        width 30%
        line-height 1.8rem
        text-align center
        height 1.8rem
        margin-left 2.5%
      .tool-change
        margin 0 auto
        margin-top 1.72rem
        width 81%
        height 1.1rem
        line-height 1.1rem
        text-align center
        font-size .44rem
        color #fff
</style>
