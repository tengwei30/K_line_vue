import Vue from 'vue'
import Router from 'vue-router'
import K_line_index from 'components/K_line_index'
import K_lineHome from 'components/K_lineHome'
import K_line_each from 'components/K_line_each'
import k_search from 'components/k_search'
import li_search from 'components/K_line_search_each'
import tujie from 'components/K_lin_tujie'
import tujie_li from 'components/K_line_tuijie_each'
Vue.use(Router)
export default new Router({
//	mode:'history',
  routes: [
    {
      path: '/',
      component: K_lineHome
    },
    { 
      path: '/k_line_index',
      component: K_line_index
    },
    {
      path: '/search', 
      name: 'search',
      component: k_search
    },
    {
      path: '/tujie',
      name: 'tujie',
      component: tujie
    },
    {
      path: '/li/:id',
      name: 'Li',
      component: K_line_each
    },
    {
      path: '/search_li/:c/:id',
      name: 'search_li',
      component: li_search
    },
     {
      path: '/tujie_li/:c/:id',
      name: 'tujie_li',
      component: tujie_li
    }
  ]
})
