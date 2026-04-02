const userRoutes = [
  {
    path: '/',
    component: () => import('../layouts/LayoutUser.vue'), 
    children: [
      {
        path: '', 
        name: 'home',
        component: () => import('../views/client/index.vue')
      },
      // {
      //   path: 'product/:id',
      //   name: 'product-detail',
      //   component: () => import('../views/user/ProductDetail.vue')
      // }
    ]
  }
]

export default userRoutes