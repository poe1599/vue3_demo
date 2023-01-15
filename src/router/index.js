import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue'),
      meta: {
        layout: 'MainLayout',
      },
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/demo.vue'),
      meta: {
        layout: 'ExampleLayout',
      },
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('../views/example/example.vue'),
      meta: {
        layout: 'ExampleLayout',
      },
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'index' },
    },
  ],
})

export default router
