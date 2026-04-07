const userRoutes = [
  {
    path: "/",
    component: () => import("../layouts/LayoutUser.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/client/Index.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("../views/client/auth/Register.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("../views/client/auth/Login.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("../views/client/About.vue"),
      },
      {
        path: "news",
        name: "news",
        component: () => import("../views/client/news/Index.vue"),
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("../views/client/Contact.vue"),
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("../views/client/Faq.vue"),
      },
      {
        path: "system",
        name: "system",
        component: () => import("../views/client/System.vue"),
      },
      {
        path: "wishlist",
        name: "wishlist",
        component: () => import("../views/client/Wishlist.vue"),
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("../views/client/Cart.vue"),
      },
      {
        path: "checkout",
        name: "checkout",
        component: () => import("../views/client/checkout/Index.vue"),
      },
      {
        path: "checkoutSuccess",
        name: "checkoutSuccess",
        component: () => import("../views/client/checkout/Success.vue"),
      },
    ],
  },
];

export default userRoutes;
