<template>
  <!-- Lớp phủ mờ cho mobile khi mở Sidebar -->
  <div class="sidebar-overlay d-lg-none" v-if="isOpen" @click="$emit('close')"></div>

  <aside class="sidebar bg-dark text-white d-flex flex-column transition-all" :class="{ 'open': isOpen }">
    
    <!-- Logo -->
    <div class="sidebar-header d-flex align-items-center justify-content-center border-bottom border-secondary border-opacity-25" style="height: 70px; flex-shrink: 0;">
      <RouterLink to="/admin" class="text-decoration-none text-white d-flex align-items-center gap-2">
        <i class="fa-solid fa-bolt text-brand fs-4"></i>
        <h4 class="fw-bold mb-0 text-uppercase tracking-wider">
          Tech<span class="text-brand">Zone</span>
        </h4>
      </RouterLink>
    </div>

    <!-- Menu Links -->
    <div class="sidebar-menu flex-grow-1 overflow-auto py-3 custom-scrollbar">
      <ul class="nav flex-column gap-1 px-3">
        <li class="nav-item">
          <RouterLink to="/admin" class="nav-link text-white opacity-75 hover-bg rounded px-3 py-2 d-flex align-items-center gap-3 active">
            <i class="fa-solid fa-chart-pie fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Tổng quan</span>
          </RouterLink>
        </li>
        
        <li class="nav-item mt-3 mb-1 px-1">
          <small class="text-muted text-uppercase fw-bold" style="font-size: 0.7rem;">Quản lý bán hàng</small>
        </li>
        
        <li class="nav-item">
          <RouterLink to="/admin/orders" class="nav-link text-white opacity-75 hover-bg rounded px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-cart-shopping fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Đơn hàng</span>
            <span class="badge bg-brand ms-auto rounded-pill">12</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/products" class="nav-link text-white opacity-75 hover-bg rounded px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-box fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Sản phẩm</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/categories" class="nav-link text-white opacity-75 hover-bg rounded px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-folder-tree fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Danh mục</span>
          </RouterLink>
        </li>

        <li class="nav-item mt-3 mb-1 px-1">
          <small class="text-muted text-uppercase fw-bold" style="font-size: 0.7rem;">Khách hàng & Nội dung</small>
        </li>

        <li class="nav-item">
          <RouterLink to="/admin/users" class="nav-link text-white opacity-75 hover-bg rounded px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-users fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Khách hàng</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/news" class="nav-link text-white opacity-75 hover-bg rounded px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-newspaper fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Bài viết</span>
          </RouterLink>
        </li>

        <li class="nav-item mt-3 mb-1 px-1">
          <small class="text-muted text-uppercase fw-bold" style="font-size: 0.7rem;">Hệ thống</small>
        </li>

        <li class="nav-item">
          <RouterLink to="/admin/settings" class="nav-link text-white opacity-75 hover-bg rounded px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-gear fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Cài đặt</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  isOpen: {
    type: Boolean,
    default: true
  }
})

defineEmits(['close'])
</script>

<style scoped>
/* Biến màu sắc */
.text-brand { color: #d84727 !important; }
.bg-brand { background-color: #d84727 !important; }

/* Styles Sidebar */
.sidebar {
  width: 260px;
  background-color: #1c2434 !important; /* Xám đen sang trọng */
  z-index: 1040;
  height: 100vh;
}
.tracking-wider { letter-spacing: 1px; }
.menu-icon { width: 24px; text-align: center; }

/* Hover & Active Effects */
.hover-bg { transition: all 0.2s; }
.hover-bg:hover, .nav-link.router-link-exact-active {
  background-color: rgba(255,255,255,0.1);
  color: white !important;
  opacity: 1 !important;
}
.nav-link.router-link-exact-active {
  background-color: #d84727; 
  box-shadow: 0 4px 6px rgba(216, 71, 39, 0.2);
}

/* Hiệu ứng Sidebar mượt mà */
.transition-all { transition: all 0.3s ease; }

/* Overlay trên Mobile */
.sidebar-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 1030;
}

/* Reponsive Logic */
@media (max-width: 991.98px) {
  .sidebar {
    position: fixed;
    left: -260px; /* Ẩn đi mặc định trên mobile */
  }
  .sidebar.open {
    left: 0; /* Trượt ra khi mở */
  }
}
@media (min-width: 992px) {
  .sidebar { position: static; }
  .sidebar:not(.open) {
    margin-left: -260px; /* Thụt vào để ẩn trên desktop */
  }
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
</style>