<!-- Detail -->
<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-text
      :title="title"
      :text="desc"
      :authorName="author"
      :authorDesc="author_desc"
      :authorImgSrc="author_img"
    ></detail-text>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailText from './components/Text'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailText
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      title: '',
      desc: '',
      author: '',
      author_desc: '',
      author_img: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.title = data.title
        this.desc = data.desc
        this.author = data.author
        this.author_desc = data.author_desc
        this.author_img = data.author_img
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  activated () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .contenr
    height 50rem
</style>
