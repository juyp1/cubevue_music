export default {

  data() {
    return {
      defaultShow: -1
    }
  },
  mounted() {

  },
  created() {

  },
  methods: {
    onTap(Index) {
      console.log(Index);
      //this.defaultShow=Index;
      switch (Index) {
        case 0:
         this.navigationTo('Index')
          break;
        case 1:
      
          break;
        case 2:
       
        this.navigationTo('search')
          break;
      }
    }
  }
}
