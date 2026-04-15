const adminRoutes = [
  {
    path: "/admin",
    component: () => import("../layouts/LayoutAdmin.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("../views/admin/Index.vue"),
      },
    ],
  },
];

export default adminRoutes;
