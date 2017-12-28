export default {
  // props: ['message'],
  props: {
    message: String,
    propA: Number
  },
  data() {
    return {
      sales: 0
    }
  },
  mounted () {
     console.log("更新数据")
  },
  methods: {

    //增加销量
    onAdd() {
      this.sales++;
      this.$emit('onAdd', this.sales);
    },
    //减去销量
    onMinus() {
      if (this.sales == 0) {
        return;
      } else {
        this.sales--;
        this.$emit('onMinus', this.sales);
      }
    }
  }
}
