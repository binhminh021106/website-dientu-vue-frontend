<template>
  <!-- Lớp phủ mờ cho mobile -->
  <div class="sidebar-overlay d-lg-none" v-if="isOpen" @click="$emit('close')"></div>

  <aside class="sidebar bg-white border-end d-flex flex-column transition-all z-3" :class="{ 'open': isOpen }">
    
    <!-- Logo -->
    <div class="sidebar-header d-flex align-items-center px-4 border-bottom border-light-subtle" style="height: 70px; flex-shrink: 0;">
      <RouterLink to="/admin" class="text-decoration-none d-flex align-items-center gap-2">
        <div class="bg-v-blue text-white rounded-2 d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
          <i class="fa-solid fa-bolt fs-6"></i>
        </div>
        <h4 class="fw-bold mb-0 text-dark tracking-wider" style="font-size: 1.25rem;">
          Tech<span class="text-v-blue">Zone</span>
        </h4>
      </RouterLink>
    </div>

    <!-- Menu Links -->
    <div class="sidebar-menu flex-grow-1 overflow-auto py-3 px-3 custom-scrollbar">
      <ul class="nav flex-column gap-2">
        
        <li class="nav-item">
          <RouterLink to="/admin" class="nav-link text-muted hover-v-blue rounded-3 px-3 py-2 d-flex align-items-center gap-3 active">
            <i class="fa-solid fa-house fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Tổng quan</span>
          </RouterLink>
        </li>
        
        <li class="nav-item mt-3 mb-1 px-2">
          <small class="text-muted text-uppercase fw-bold" style="font-size: 0.7rem; letter-spacing: 0.5px;">Quản lý bán hàng</small>
        </li>
        
        <li class="nav-item">
          <RouterLink to="/admin/orders" class="nav-link text-muted hover-v-blue rounded-3 px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-cart-shopping fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Đơn hàng</span>
            <span class="badge bg-v-blue ms-auto rounded-pill shadow-sm">12</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/products" class="nav-link text-muted hover-v-blue rounded-3 px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-box fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Sản phẩm</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/categories" class="nav-link text-muted hover-v-blue rounded-3 px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-folder-tree fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Danh mục</span>
          </RouterLink>
        </li>

        <li class="nav-item mt-3 mb-1 px-2">
          <small class="text-muted text-uppercase fw-bold" style="font-size: 0.7rem; letter-spacing: 0.5px;">Khách hàng & Nội dung</small>
        </li>

        <li class="nav-item">
          <RouterLink to="/admin/users" class="nav-link text-muted hover-v-blue rounded-3 px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-users fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Khách hàng</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/news" class="nav-link text-muted hover-v-blue rounded-3 px-3 py-2 d-flex align-items-center gap-3">
            <i class="fa-solid fa-newspaper fs-5 menu-icon"></i>
            <span class="menu-text fw-medium">Bài viết</span>
          </RouterLink>
        </li>

        <li class="nav-item mt-3 mb-1 px-2">
          <small class="text-muted text-uppercase fw-bold" style="font-size: 0.7rem; letter-spacing: 0.5px;">Hệ thống</small>
        </li>

        <li class="nav-item">
          <RouterLink to="/admin/settings" class="nav-link text-muted hover-v-blue rounded-3 px-3 py-2 d-flex align-items-center gap-3">
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
  isOpen: { type: Boolean, default: true }
})
defineEmits(['close'])
</script>

<style scoped>
/* Vuestic Blue Custom */
.text-v-blue { color: #154ec1 !important; }
.bg-v-blue { background-color: #154ec1 !important; color: white !important; }

/* Styles Sidebar */
.sidebar {
  width: 260px;
  height: 100vh;
  border-color: #eef2f6 !important;
}
.tracking-wider { letter-spacing: 1px; }
.menu-icon { width: 24px; text-align: center; }

/* Hover & Active Effects (Vuestic Style) */
.nav-link {
  transition: all 0.2s ease;
}
.hover-v-blue:hover {
  background-color: #f0f5ff; /* Màu xanh siêu nhạt */
  color: #154ec1 !important;
}
/* Trạng thái đang chọn */
.nav-link.active {
  background-color: #154ec1 !important;
  color: white !important;
  box-shadow: 0 4px 12px rgba(21, 78, 193, 0.25);
}

.transition-all { transition: all 0.3s ease; }

/* Overlay trên Mobile */
.sidebar-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.4);
  z-index: 1030;
}

/* Reponsive Logic */
@media (max-width: 991.98px) {
  .sidebar { position: fixed; left: -260px; }
  .sidebar.open { left: 0; }
}
@media (min-width: 992px) {
  .sidebar { position: static; }
  .sidebar:not(.open) { margin-left: -260px; }
}
</style>