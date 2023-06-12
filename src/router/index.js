import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/HomePage/index.vue'),
      meta: {
        layout: 'HomeLayout',
      },
    },
    {
      path: '/ScenicSpot/:ScenicSpotID',
      name: 'ScenicSpotDetail',
      component: () => import('@/views/ScenicSpot/ScenicSpotDetail.vue'),
      meta: { layout: 'HomeLayout' },
    },
    // {
    //   path: '/example',
    //   name: 'example',
    //   component: () => import('../views/example.vue'),
    //   meta: {
    //     layout: 'MainLayout',
    //   },
    // },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'index' },
    },
  ],
})

export default router
