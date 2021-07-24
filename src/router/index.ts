/*
 * @Author: kingford
 * @Date: 2021-06-27 11:14:16
 * @LastEditTime: 2021-07-24 21:09:28
 */
import { basicRoutes } from './routes';

import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import refComp from '@/compositions/ref.vue';
// import renativeComp from '@/compositions/reactive.vue';
// import computedComp from '@/compositions/computed.vue';
// import watchComp from '@/compositions/watch.vue';
// import LayoutComp from '../layouts/index.vue';

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     component: LayoutComp,
//     children: [
//       {
//         path: '',
//         component: watchComp,
//         name: 'Home',
//         meta: {
//           title: '主页',
//           keepAlive: true,
//         },
//       },
//       { path: 'my', component: computedComp },
//     ],
//   },
//   { path: '/login', component: () => import('../views/login') },
//   { path: '/ref', component: refComp },
//   { path: '/reactive', component: renativeComp },
//   { path: '/computed', component: computedComp },
// ];

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as Array<RouteRecordRaw>,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
