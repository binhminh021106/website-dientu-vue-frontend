<template>
  <header class="bg-white w-100">
    <!-- Top Bar -->
    <div class="border-bottom py-2 d-none d-lg-block text-muted" style="font-size: 0.85rem;">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="d-flex gap-4">
          <span><i class="fa-solid fa-location-dot me-1"></i> 123 Đường Chính, TP. Buôn Ma Thuột</span>
          <span><i class="fa-solid fa-phone me-1"></i> +84 123 456 789</span>
        </div>
        <div class="d-flex gap-4 align-items-center">
          <span class="cursor-pointer">VND <i class="fa-solid fa-chevron-down ms-1" style="font-size: 0.7rem;"></i></span>
          <span class="cursor-pointer">🇻🇳 Tiếng Việt <i class="fa-solid fa-chevron-down ms-1" style="font-size: 0.7rem;"></i></span>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="container py-4 d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <RouterLink to="/" class="text-decoration-none text-dark d-flex align-items-center">
        <h2 class="fw-bold mb-0">Tech<span class="text-custom-orange">Zone</span></h2>
      </RouterLink>

      <!-- Search Bar -->
      <div class="search-bar d-none d-md-flex align-items-center border rounded-pill px-3 py-2 w-50">
        <input type="text" class="form-control border-0 shadow-none bg-transparent" placeholder="Tìm kiếm sản phẩm...">
        <button class="btn border-0 text-muted p-0 ms-2">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <!-- User & Cart Actions -->
      <div class="d-flex align-items-center gap-4">
        <!-- Cart -->
        <div class="d-flex align-items-center gap-2 cursor-pointer">
          <div class="position-relative text-dark">
            <i class="fa-solid fa-cart-shopping fs-5"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-custom-orange" style="font-size: 0.6rem;">2</span>
          </div>
          <div class="d-none d-lg-block lh-1">
            <small class="text-muted d-block" style="font-size: 0.75rem;">Giỏ hàng</small>
            <span class="fw-bold fs-6">3.500.000đ</span>
          </div>
        </div>
        
        <!-- User -->
        <div class="d-flex align-items-center gap-2 cursor-pointer">
          <div class="text-dark">
             <i class="fa-regular fa-user fs-5"></i>
          </div>
          <div class="d-none d-lg-block lh-1">
            <small class="text-muted d-block" style="font-size: 0.75rem;">Người dùng</small>
            <span class="fw-bold fs-6">Tài khoản</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Menu (Orange Bar) -->
    <nav class="bg-custom-orange text-white">
      <div class="container d-flex justify-content-between align-items-center">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link text-white fw-bold px-4 py-3 border-end border-light border-opacity-25 d-flex align-items-center gap-2" href="#">
              <i class="fa-solid fa-bars-staggered"></i>
              Tất Cả Danh Mục
            </a>
          </li>
          <li class="nav-item"><a class="nav-link text-white py-3 px-3 fw-medium" href="#">Sản Phẩm <i class="fa-solid fa-chevron-down ms-1" style="font-size: 0.6rem;"></i></a></li>
          <li class="nav-item"><a class="nav-link text-white py-3 px-3 fw-medium" href="#">Bài Viết</a></li>
          <li class="nav-item"><a class="nav-link text-white py-3 px-3 fw-medium" href="#">Liên Hệ</a></li>
        </ul>
        
        <ul class="nav d-none d-lg-flex">
          <li class="nav-item"><a class="nav-link text-white py-3 px-3 fw-bold" href="#">KHUYẾN MÃI GIỚI HẠN <i class="fa-solid fa-fire ms-1"></i></a></li>
          <li class="nav-item"><a class="nav-link text-white py-3 px-3 fw-medium" href="#">Bán Chạy Nhất</a></li>
          <li class="nav-item"><a class="nav-link text-white py-3 px-3 fw-medium" href="#">Hàng Mới Về</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.text-custom-orange {
  color: #ff6243 !important;
}
.bg-custom-orange {
  background-color: #ff6243 !important;
}
.cursor-pointer {
  cursor: pointer;
}
.search-bar {
  border-color: #e5e7eb !important;
  background-color: #f9fafb;
}
.search-bar input:focus {
  outline: none;
  box-shadow: none;
}
</style>