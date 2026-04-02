<template>
  <div class="d-flex" style="min-height: 100vh;">
    <!-- Sidebar bên trái -->
    <div class="bg-dark text-white p-3" style="width: 250px;">
      <h3 class="text-center mb-4 text-warning">ADMIN PANEL</h3>
      <ul class="nav flex-column gap-2">
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/admin">Bảng điều khiển</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/admin/category">Quản lý Danh mục</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-white" to="/admin/product">Quản lý Sản phẩm</RouterLink>
        </li>
        <li class="nav-item mt-5">
          <RouterLink class="nav-link text-danger" to="/">← Về trang khách</RouterLink>
        </li>
      </ul>
    </div>

    <!-- Nội dung chính bên phải -->
    <div class="flex-grow-1 bg-light">
      <!-- Topbar nhỏ -->
      <div class="bg-white shadow-sm p-3 mb-4 d-flex justify-content-end">
        <span class="fw-bold">Xin chào, Admin</span>
      </div>

      <!-- Nơi chứa nội dung các trang con Admin -->
      <div class="container-fluid px-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>