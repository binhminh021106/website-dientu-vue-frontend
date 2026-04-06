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
    ],
  },
];

export default userRoutes;
