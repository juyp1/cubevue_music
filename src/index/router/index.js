import Vue from 'vue'
import Router from 'vue-router'
import rootComponent from '../../framework/root-component/root-component.vue'
const IndexPage = r => require.ensure([], () => r(require('../components/index/index.vue')), 'IndexPage');
const searchPage = r => require.ensure([], () => r(require('../components/search/search.vue')), 'searchPage');

Vue.use(Router)
// export default new Router({
//   routes: [{
//     path: '/recom',
//     name: 'recom',
//     component: IndexPage
//   }, {
//     path: '/',
//     name: 'search',
//     component: SearchPage
//   }]

// })
let childrenRoutes = [
  {
    path: '/',
    name: 'recom',
    component: IndexPage
  },{
    path:'serach',
    name:'indexserach',
    component:searchPage
  }
]

let routes = [{
  path: '/index/',
  component: rootComponent,
  children: childrenRoutes
}];
const router = new Router();
router.addRoutes(routes);
export default router;
