import Vue from 'vue'
import Router,{ NavigationGuard, RouteConfig, RawLocation, Route }  from 'vue-router'
import rootComponent from '../../framework/root-component/root-component.vue'
const SearchPage = r => require.ensure([], () => r(require('../components/search/search.vue')), 'SearchPage')
const CubePage = r => require.ensure([], () => r(require('../components/cube/cube.vue')), 'CubePage')
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
    name: 'search',
    component: SearchPage
  },{
    path: 'cube',
    name: 'cube',
    component: CubePage
  }
]
 
let routes = [{
  path: '/search/',
  component: rootComponent,
  children: childrenRoutes
}];
const router = new Router();
router.addRoutes(routes);
export default router;
