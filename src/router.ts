import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./site/SiteView.vue'),
    children: [],
  },
  {
    path: '/admin',
    component: () => import('./admin/AdminView.vue'),
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
