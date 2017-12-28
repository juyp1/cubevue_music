export default {
  props: {
    value: Number
  },
  methods: {
    updateValue: function (event) {
      this.$emit('input', event.target.value);
    }
  }
}
