<template>
  <header class="bg-white w-100 roboto-font">
    <!-- Banner Khuyến Mãi (Mô phỏng banner ảnh) -->
    <div class="promo-banner text-white d-none d-lg-block w-100" style="background-color: #d84727;">
      <div class="container d-flex justify-content-center align-items-center py-3" style="min-height: 85px;">
        <div class="d-flex align-items-center gap-4">
          <h3 class="mb-0 fw-bolder fst-italic" style="text-shadow: 2px 2px 0px rgba(0,0,0,0.1);">BLACK FRIDAY <i class="fa-solid fa-bolt text-warning"></i></h3>
          <div class="text-center lh-1 border-start border-white border-opacity-50 ps-4">
             <span style="font-size: 0.85rem">Nhập mã <span class="bg-light text-danger px-2 py-1 rounded fw-bold ms-1 shadow-sm">TECHZONE</span></span><br>
             <span class="fw-bold fs-5 mt-3 d-block">NHẬN QUÀ HẤP DẪN</span>
          </div>
          <button class="btn rounded-pill fw-bold px-4 ms-3 shadow-sm btn-mua-ngay" style="background-color: #f7a659; color: white;">MUA NGAY</button>
        </div>
      </div>
    </div>

    <!-- Top Bar -->
    <div class="bg-white py-2 border-bottom text-dark" style="font-size: 0.85rem;">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="d-flex gap-4">
          <span><i class="fa-solid fa-phone text-brand me-1"></i> 1900 6750</span>
          <span><i class="fa-solid fa-envelope text-brand me-1"></i> support@techzone.vn</span>
        </div>
        <div class="d-flex gap-4 align-items-center">
          <span class="cursor-pointer">🇻🇳 Tiếng Việt <i class="fa-solid fa-chevron-down ms-1" style="font-size: 0.7rem;"></i></span>
          <span class="cursor-pointer"><i class="fa-solid fa-box text-muted me-1"></i> Kiểm tra đơn hàng</span>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="w-100" style="background-color: #f5f5f5;">
      <div class="container py-4 d-flex justify-content-between align-items-center">
        <!-- Logo -->
        <RouterLink to="/" class="text-decoration-none text-dark d-flex align-items-center gap-2">
          <img src="../../assets/image/techzone1.png" width="200px" alt="">
        </RouterLink>

        <!-- Search Bar -->
        <div class="search-wrapper mx-5 flex-grow-1 d-none d-md-block">
          <div class="input-group" style="border: 1px solid #dcdcdc; border-radius: 4px; overflow: hidden; background-color: #ffffff;">
            <input type="text" class="form-control border-0 shadow-none py-2 px-3 fw-light bg-white" placeholder="Tìm kiếm sản phẩm...">
            <button class="btn bg-brand text-white px-4 border-0 rounded-0 fs-5" type="button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <!-- User Actions -->
        <div class="d-flex align-items-center gap-4">
          <!-- Tài khoản -->
          <div class="d-flex flex-column align-items-center cursor-pointer text-dark hover-brand mt-1">
            <i class="fa-regular fa-user fs-4 mb-1"></i>
            <span class="fw-light" style="font-size: 0.85rem;">Tài khoản</span>
          </div>
          <!-- Yêu thích -->
          <div class="d-flex flex-column align-items-center cursor-pointer text-dark hover-brand position-relative mt-1">
            <div class="position-relative">
              <i class="fa-regular fa-heart fs-4 mb-1"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-brand d-flex justify-content-center align-items-center fw-normal" style="font-size: 0.65rem; width: 18px; height: 18px;">1</span>
            </div>
            <span class="fw-light" style="font-size: 0.85rem;">Yêu thích</span>
          </div>
          <!-- Giỏ hàng -->
          <div class="d-flex flex-column align-items-center cursor-pointer text-dark hover-brand position-relative mt-1">
            <div class="position-relative">
              <i class="fa-solid fa-bag-shopping fs-4 mb-1" style="opacity: 0.9;"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-brand d-flex justify-content-center align-items-center fw-normal" style="font-size: 0.65rem; width: 18px; height: 18px;">0</span>
            </div>
            <span class="fw-light" style="font-size: 0.85rem;">Giỏ hàng</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="border-top border-bottom py-2 bg-white">
      <div class="container d-flex justify-content-between align-items-center">
        <ul class="nav">
          <li class="nav-item"><a class="nav-link text-brand fw-bold px-3" href="#">Trang chủ</a></li>
          <li class="nav-item"><a class="nav-link text-dark fw-bold px-3 hover-brand" href="#">Giới thiệu</a></li>
          <li class="nav-item"><a class="nav-link text-dark fw-bold px-3 hover-brand" href="#">Sản phẩm <i class="fa-solid fa-caret-down ms-1" style="font-size: 0.8em;"></i></a></li>
          <li class="nav-item"><a class="nav-link text-dark fw-bold px-3 hover-brand" href="#">Tin tức</a></li>
          <li class="nav-item"><a class="nav-link text-dark fw-bold px-3 hover-brand" href="#">Liên hệ</a></li>
          <li class="nav-item"><a class="nav-link text-dark fw-bold px-3 hover-brand" href="#">Câu hỏi thường gặp</a></li>
          <li class="nav-item"><a class="nav-link text-dark fw-bold px-3 hover-brand" href="#">Hệ thống</a></li>
        </ul>
        <div class="d-none d-lg-block pe-3">
          <a href="#" class="text-brand fw-bold text-decoration-none hover-opacity d-flex align-items-center gap-1">
            <i class="fa-solid fa-fire"></i> Hot Sale
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Import Font Roboto từ Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Màu gạch đỏ/cam theo chuẩn của ảnh thiết kế */
.text-brand {
  color: #d84727 !important;
}
.bg-brand {
  background-color: #d84727 !important;
}

.cursor-pointer {
  cursor: pointer;
}

.search-wrapper input:focus {
  outline: none;
  box-shadow: none;
}

.hover-brand:hover, .hover-brand:hover i {
  color: #d84727 !important;
  transition: all 0.2s ease-in-out;
}

.hover-opacity:hover {
  opacity: 0.8;
}

/* Nút MUA NGAY trên banner */
.btn-mua-ngay:hover {
  background-color: #f59136 !important;
  transform: scale(1.05);
  transition: all 0.2s;
}
</style>