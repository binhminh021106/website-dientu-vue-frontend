const adminRoutes = [
  {
    path: "/admin",
    component: () => import("../layouts/LayoutAdmin.vue"),
    children: [],
  },
];

export default adminRoutes;
