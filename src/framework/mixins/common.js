export default {
   
  methods: {
  
    navigationTo(to) {
      if (this.$router) {
       //this.$router.push(to)
        window.location.href=`#/${to}`
      }
      
      // this.$router.go({name: 'search'});
    }
  }
}
