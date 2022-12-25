import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue'),
      meta: {
        layout: 'BaseLayout',
      },
    },
    {
      path: '/example',
      name: 'index',
      component: () => import('../views/example.vue'),
      meta: {
        layout: 'BaseLayout',
      },
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'index' },
    },
  ],
})

export default router
