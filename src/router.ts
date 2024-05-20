import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./site/SiteView.vue'),
    children: [
      {
        path: '/',
        component: () => import('./site/pages/MainPage.vue'),
      },
      {
        path: '/about',
        component: () => import('./site/pages/AboutPage.vue'),
      },
      {
        path: '/portfolio',
        component: () => import('./site/pages/PortfolioPage.vue'),
      },
    ],
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
