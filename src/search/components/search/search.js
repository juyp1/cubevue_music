import MyComponent from '../../../framework/common/mycomponent/mycomponent.vue'
import MyInput from '../../../framework/common/myinput/myinput.vue';
import MyRefComponent from '../common/mycomponent/mycomponent.vue';
import MyBook from '../common/mybook/mybook.vue';
import HotProduct from '../common/hot-product/hot-product.vue';
import RecommendProduct from '../common/recommend-product/recommend-product.vue';
export default {

  components: {
    MyComponent,
    MyInput,
    MyRefComponent,
    MyBook,
    HotProduct,
    RecommendProduct
  },
  //计算数学
  computed: {
    getPrices: function () {
      return this.prices;
    },
    getNowTime: function () {
      return Date.now();
    },
    getClass: function () {
      return {
        active: this.isActive
      }
    },
    totalPrice: function () {
      var total = 0;
      for (var i = 0; i < this.data.list.length; i++) {
        var item = this.data.list[i];
        total += item.price * item.count;
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
    },

    getListType: function () {
      //   return Cars = [{
      //     name: '快车',
      //     type: [{
      //       name: '拼车'
      //     }, {
      //       name: '普通'
      //     }, {
      //       name: '优享'
      //     }]
      //   }, {
      //     name: '专车'
      //   }, {
      //     name: '商务车'
      //   }, {
      //     name: '顺风车'
      //   }]
    }
  },
  data() {
    return {
      prices: 0,
      isActive: false,
      isShow: true,
      flag: 1,
      Count: 120,
      currentView: 'HotProduct',
      data: {
        list: [{
          id: 1,
          name: 'iphone x(64G)',
          price: 8180,
          count: 20
        }, {
          id: 2,
          name: 'iphone8 Plus(128G)',
          price: 6999,
          count: 21
        }, {
          id: 3,
          name: 'iphone7 Plus(64G)',
          price: 4998,
          count: 21
        }, {
          id: 3,
          name: 'Mac Pro(16G)',
          price: 13427,
          count: 21
        }]
      },
      books: [{
          name: '《Vue.js 实战》'
        },
        {
          name: '《深入浅出 Webpack》'
        },
        {
          name: '《JavaScript 高级程序设计》'
        }
      ],
      showDiv: false
    }
  },
  created() {

  },
  mounted() {

  },

  methods: {
    //加入购物车
    onAddCart() {
      this.prices = 10;
      this.isActive = true;
    },
    setSwitch() {
      if (this.isShow) {
        this.isShow = false;
        return;
      }
      this.isShow = true;

    },
    onAdd(sales) {
      console.log(sales);
    },
    getchildren() {
      console.log(this.$refs.comA.message);
      console.log(this.$refs.p)
    },
    setComponent() {
      this.currentView = "RecommendProduct"
    },
    getText: function(){
       this.showDiv = true;
       this.$nextTick(function(){
         var text = document.getElementById('div').innerHTML;
         console.log(text);
       })
    }
  }

}
