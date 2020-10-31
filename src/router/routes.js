
const routes = [
  { path: '/', component: () => import('pages/Index.vue') },
  { path: '/1', component: () => import('pages/Page1.vue') },
  { path: '/2', component: () => import('pages/Page2.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
