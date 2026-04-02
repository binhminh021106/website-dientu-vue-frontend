import { createRouter, createWebHistory } from "vue-router";

// 1. Import các mảng routes từ các file con
import adminRoutes from "./admin";
import userRoutes from "./user";

// 2. Khởi tạo Router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Dùng dấu 3 chấm (...) để rải tất cả các object route từ file con vào đây
    ...userRoutes,
    ...adminRoutes,

    // // Em cũng có thể thêm một route "Bắt lỗi 404" ở cuối cùng nếu người dùng gõ link bậy bạ
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "NotFound",
    //   component: () => import("../views/user/index.vue"), // Tạm thời cho về Home nếu lỗi
    // },
  ],
});

export default router;
