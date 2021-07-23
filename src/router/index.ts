/*
 * @Author: kingford
 * @Date: 2021-06-27 11:14:16
 * @LastEditTime: 2021-07-16 09:04:44
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import refComp from '@/compositions/ref.vue';
import renativeComp from '@/compositions/reactive.vue';
import computedComp from '@/compositions/computed.vue';
import watchComp from '@/compositions/watch.vue';
import LayoutComp from '../layout/index.vue';
import LoginComp from '../views/login';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LayoutComp,
    children: [
      {
        path: '',
        component: watchComp,
        name: 'Home',
        meta: {
          title: '主页',
          keepAlive: true,
        },
      },
      { path: 'my', component: computedComp },
    ],
  },
  { path: '/login', component: () => import('../views/login') },
  { path: '/ref', component: refComp },
  { path: '/reactive', component: renativeComp },
  { path: '/computed', component: computedComp },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
