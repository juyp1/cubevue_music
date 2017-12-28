
export default {
  components: {},
  data() {
    return {
      items: [{
        url: 'http://www.didichuxing.com/',
        image: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002iDhPo41S748.jpg'
      }, {
        url: 'http://www.didichuxing.com/',
        image: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002z8Lbj3UmMDb.jpg'
      }, {
        url: 'http://www.didichuxing.com/',
        image: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002tI8QM3jdDZR.jpg'
      }, {
        url: 'http://www.didichuxing.com/',
        image: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002Wsyay2RR9T2.jpg'
      }]

    }
  },

  created() {

  },
  mounted() {
  
  },

  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandle(item, index) {
      console.log(item, index)
    },

  
  }

}
