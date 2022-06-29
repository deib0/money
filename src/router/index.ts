import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Account from '@/views/Account.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import EditLabel from '@/views/EditLabel.vue';
import NotFound from '@/views/NotFound.vue';
import Statistics from '../views/Statistics.vue';

Vue.use(VueRouter)



const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'./money'
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/labels',
    name: 'Labels',
    component: Labels
  },
  {
    path: '/labels/editLabel/:id',
    name: 'EditLabel',
    component: EditLabel
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
