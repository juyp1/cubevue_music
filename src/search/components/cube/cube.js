export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
      loading: true,
      options: {
        scrollbar: {
          fade: false
        }
      }
    }
  },
  activated() {
    const component = this.$refs['myPopup']
    component.show()
    setTimeout(() => {
      component.hide()
    }, 3000)
  },
  methods: {
    showPopup(refId) {
      const component = this.$refs[refId]
      component.show()
      setTimeout(() => {
        component.hide()
      }, 1000)
    }
  }
}
