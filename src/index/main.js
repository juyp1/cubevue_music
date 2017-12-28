// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
 
import mixins from '../framework/mixins/common.js';
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  Style,
  Button,
  Checkbox,
  CheckboxGroup,
  Loading,
  Tip,
  Popup,
  Toast,
  Picker,
  TimePicker,
  Dialog,
  ActionSheet,
  Scroll,
  Slide,
  IndexList
} from 'cube-ui'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
fastclick.attach(document.body);
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(TimePicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)

Vue.config.productionTip = false
Vue.mixin(mixins)
/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  template: '<App/>',
  components: { App }
})
// let vm = new Vue({
  
//   router,
//   template: '<App/>',
// }).$mount('#index');
