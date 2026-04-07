<template>
  <header class="w-100 roboto-font">
    <!-- Banner Khuyến Mãi (Mô phỏng banner ảnh) -->
    <div class="promo-banner text-white d-none d-lg-block w-100" style="background-color: #d84727;">
      <div class="container d-flex justify-content-center align-items-center py-3" style="min-height: 85px;">
        <div class="d-flex align-items-center gap-4">
          <h3 class="mb-0 fw-bolder fst-italic" style="text-shadow: 2px 2px 0px rgba(0,0,0,0.1);">BLACK FRIDAY <i
              class="fa-solid fa-bolt text-warning"></i></h3>
          <div class="text-center lh-1 border-start border-white border-opacity-50 ps-4">
            <span style="font-size: 0.85rem">Nhập mã <span
                class="bg-light text-danger px-2 py-1 rounded fw-bold ms-1 shadow-sm">TECHZONE</span></span><br>
            <span class="fw-bold fs-5 mt-3 d-block">NHẬN QUÀ HẤP DẪN</span>
          </div>
          <button class="btn rounded-pill fw-bold px-4 ms-3 shadow-sm btn-mua-ngay"
            style="background-color: #f7a659; color: white;">MUA NGAY</button>
        </div>
      </div>
    </div>

    <!-- Top Bar (Ẩn trên mobile để tiết kiệm diện tích) -->
    <div class="bg-white py-2 border-bottom text-dark d-none d-md-block" style="font-size: 0.85rem;">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="d-flex gap-4">
          <span><i class="fa-solid fa-phone text-brand me-1"></i> 1900 6750</span>
          <span><i class="fa-solid fa-envelope text-brand me-1"></i> support@techzone.vn</span>
        </div>
        <div class="d-flex gap-4 align-items-center">
          <span class="cursor-pointer hover-brand">VND <i class="fa-solid fa-chevron-down ms-1"
              style="font-size: 0.7rem;"></i></span>
          <span class="cursor-pointer hover-brand">🇻🇳 Tiếng Việt <i class="fa-solid fa-chevron-down ms-1"
              style="font-size: 0.7rem;"></i></span>
        </div>
      </div>
    </div>

    <!-- Wrapper Sticky (Dính trên đầu khi cuộn) -->
    <div class="sticky-top shadow-sm z-3">

      <!-- Main Header -->
      <div class="w-100 bg-light">
        <div class="container py-3 py-lg-4 d-flex justify-content-between align-items-center">

          <!-- Nút Menu Mobile (Hamburger) -->
          <button class="btn d-lg-none border-0 fs-3 p-0 me-3 text-dark hover-brand"
            @click="isMobileMenuOpen = !isMobileMenuOpen">
            <i class="fa-solid" :class="isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'"></i>
          </button>

          <!-- Logo -->
          <RouterLink :to="{ name: 'home' }"
            class="text-decoration-none text-dark d-flex align-items-center gap-2 me-auto me-lg-0">
            <img src="../../assets/image/techzone1.png" style="max-width: 180px; width: 100%; height: auto;"
              alt="TechZone Logo">
          </RouterLink>

          <!-- Search Bar (Desktop) -->
          <div class="search-wrapper mx-5 flex-grow-1 d-none d-lg-block">
            <div class="input-group search-box shadow-sm">
              <input type="text" class="form-control border-0 shadow-none py-2 px-3 fw-light bg-white"
                placeholder="Tìm kiếm sản phẩm, thương hiệu...">
              <button class="btn bg-brand text-white px-4 border-0 rounded-0 fs-5 btn-search" type="button">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          <!-- User Actions -->
          <div class="d-flex align-items-center gap-1 gap-md-2 text-nowrap ms-auto ms-lg-0">

            <!-- Icon Tìm kiếm trên Mobile (Hiện popup hoặc focus thanh search mobile) -->
            <div class="d-lg-none d-flex flex-column align-items-center cursor-pointer text-dark hover-brand mt-1 px-1">
              <i class="fa-solid fa-magnifying-glass fs-5 mb-1"></i>
            </div>

            <!-- User (CÓ POPUP - BẤM VÀO ĐỂ MỞ) -->
            <div class="position-relative py-2" ref="accountPopupRef">
              <!-- Nút User -->
              <div class="d-flex flex-column align-items-center cursor-pointer text-dark hover-brand mt-1 px-1 px-md-2"
                @click="isAccountOpen = !isAccountOpen">
                <i class="fa-regular fa-user fs-4 mb-1"></i>
                <span class="fw-light d-none d-md-block" style="font-size: 0.85rem;">Tài khoản</span>
              </div>

              <!-- Bảng Popup Đăng nhập/Đăng ký -->
              <transition name="fade-slide">
                <div v-show="isAccountOpen"
                  class="position-absolute bg-white shadow p-4 text-center z-3 border text-wrap account-popup"
                  style="top: 100%; right: 0; width: 280px; border-radius: 16px; cursor: default;">
                  <div class="position-absolute bg-white border-start border-top popup-arrow"></div>

                  <p class="text-secondary mb-4 mt-1 fw-medium" style="font-size: 0.95rem; line-height: 1.5;">
                    Đăng nhập để theo dõi đơn hàng và ưu đãi
                  </p>

                  <!-- Nút Đăng nhập -->
                  <RouterLink :to="{ name: 'login' }" class="btn btn-brand w-100 fw-bold rounded-pill mb-3 py-2"
                    style="font-size: 1.05rem;" @click="isAccountOpen = false">
                    Đăng Nhập
                  </RouterLink>

                  <!-- Link Đăng ký -->
                  <p class="mb-1 text-dark" style="font-size: 0.95rem;">
                    Chưa có tài khoản?
                    <RouterLink :to="{ name: 'register' }" class="fw-bold text-decoration-none hover-link-brand"
                      style="color: #d84727;" @click="isAccountOpen = false">
                      Đăng ký
                    </RouterLink>
                  </p>
                </div>
              </transition>
            </div>

            <!-- Yêu thích -->
            <RouterLink :to="{ name: 'wishlist' }" class="text-decoration-none">
              <div
                class="d-none d-sm-flex flex-column align-items-center cursor-pointer text-dark hover-brand position-relative mt-1 px-1 px-md-2">
                <div class="position-relative">
                  <i class="fa-regular fa-heart fs-4 mb-1"></i>
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-brand d-flex justify-content-center align-items-center fw-normal cart-badge">1</span>
                </div>
                <span class="fw-light d-none d-md-block" style="font-size: 0.85rem;">Yêu thích</span>
              </div>
            </RouterLink>

            <!-- Giỏ hàng -->
            <RouterLink :to="{ name: 'cart' }" class="text-decoration-none">
              <div
                class="d-flex flex-column align-items-center cursor-pointer text-dark hover-brand position-relative mt-1 px-1 px-md-2">
                <div class="position-relative">
                  <i class="fa-solid fa-bag-shopping fs-4 mb-1" style="opacity: 0.9;"></i>
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-brand d-flex justify-content-center align-items-center fw-normal cart-badge">0</span>
                </div>
                <span class="fw-light d-none d-md-block" style="font-size: 0.85rem;">Giỏ hàng</span>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- Search Bar (Mobile & Tablet) - Nằm dưới header chính -->
        <div class="container pb-3 d-block d-lg-none">
          <div class="input-group search-box shadow-sm">
            <input type="text" class="form-control border-0 shadow-none py-2 px-3 fw-light bg-white"
              placeholder="Bạn cần tìm gì hôm nay?">
            <button class="btn bg-brand text-white px-3 border-0 rounded-0" type="button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="border-top border-bottom py-2 bg-white">
        <div class="container d-flex justify-content-between align-items-center">

          <!-- Menu Desktop -->
          <ul class="nav d-none d-lg-flex">
            <li class="nav-item">
              <RouterLink :to="{ name: 'home' }" class="nav-link fw-bold px-3 menu-link">Trang chủ</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'about' }" class="nav-link fw-bold px-3 menu-link">Giới thiệu</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: '' }" class="nav-link fw-bold px-3 menu-link">Sản phẩm <i
                  class="fa-solid fa-caret-down ms-1" style="font-size: 0.8em;"></i></RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'news' }" class="nav-link fw-bold px-3 menu-link">Tin tức</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'contact' }" class="nav-link fw-bold px-3 menu-link">Liên hệ</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'faq' }" class="nav-link fw-bold px-3 menu-link">Câu hỏi thường gặp</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'system' }" class="nav-link fw-bold px-3 menu-link">Hệ thống</RouterLink>
            </li>
          </ul>

          <div class="d-none d-lg-block pe-3">
            <a href="#" class="text-brand fw-bold text-decoration-none hover-opacity d-flex align-items-center gap-1">
              <i class="fa-solid fa-fire"></i> Hot Sale
            </a>
          </div>

          <!-- Menu Mobile (Xổ xuống khi bấm Hamburger) -->
          <div class="d-lg-none w-100" v-show="isMobileMenuOpen">
            <ul class="nav flex-column py-2">
              <li class="nav-item border-bottom">
                <RouterLink :to="{ name: 'home' }" class="nav-link fw-bold py-3 menu-link"
                  @click="isMobileMenuOpen = false">Trang chủ</RouterLink>
              </li>
              <li class="nav-item border-bottom">
                <RouterLink :to="{ name: 'about' }" class="nav-link fw-bold py-3 menu-link"
                  @click="isMobileMenuOpen = false">Giới thiệu</RouterLink>
              </li>
              <li class="nav-item border-bottom d-flex justify-content-between align-items-center">
                <RouterLink :to="{ name: '' }" class="nav-link fw-bold py-3 menu-link flex-grow-1"
                  @click="isMobileMenuOpen = false">Sản phẩm</RouterLink>
                <i class="fa-solid fa-plus pe-3 text-muted"></i>
              </li>
              <li class="nav-item border-bottom">
                <RouterLink :to="{ name: 'news' }" class="nav-link fw-bold py-3 menu-link"
                  @click="isMobileMenuOpen = false">Tin tức
                </RouterLink>
              </li>
              <li class="nav-item border-bottom">
                <RouterLink :to="{ name: 'contact' }" class="nav-link fw-bold py-3 menu-link"
                  @click="isMobileMenuOpen = false">Liên
                  hệ</RouterLink>
              </li>
              <li class="nav-item"><a class="nav-link text-brand fw-bold py-3 hover-brand" href="#"><i
                    class="fa-solid fa-fire me-2"></i> Hot Sale</a></li>
            </ul>
          </div>

        </div>
      </nav>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

// Quản lý ẩn/hiện popup tài khoản
const isAccountOpen = ref(false)
const accountPopupRef = ref(null)

// Quản lý menu trên điện thoại
const isMobileMenuOpen = ref(false)

// Tự động đóng popup khi click ra vị trí khác
const handleClickOutside = (event) => {
  if (accountPopupRef.value && !accountPopupRef.value.contains(event.target)) {
    isAccountOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Biến màu sắc */
.text-brand {
  color: #d84727 !important;
}

.bg-brand {
  background-color: #d84727 !important;
}

/* Utilities */
.cursor-pointer {
  cursor: pointer;
}

.hover-opacity:hover {
  opacity: 0.8;
  transition: 0.2s;
}

.hover-brand:hover,
.hover-brand:hover i {
  color: #d84727 !important;
  transition: all 0.2s ease-in-out;
}

/* Bọc thanh tìm kiếm */
.search-box {
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  overflow: hidden;
  background-color: #ffffff;
}

.search-box input:focus {
  outline: none;
  box-shadow: none;
}

.btn-search:hover {
  background-color: #c03d21 !important;
  transition: 0.2s;
}

/* Chấm đỏ Notification */
.cart-badge {
  font-size: 0.65rem;
  width: 18px;
  height: 18px;
  border: 2px solid #f5f5f5;
  /* Tách biệt nhẹ với icon */
}

/* Nút MUA NGAY trên banner */
.btn-mua-ngay:hover {
  background-color: #f59136 !important;
  transform: scale(1.05);
  transition: all 0.2s;
}

/* Popup Tài khoản */
.account-popup {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

.popup-arrow {
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  top: -9px;
  right: 25px;
}

.btn-brand {
  background-color: #d84727 !important;
  color: white !important;
  border: none;
  transition: all 0.2s ease;
}

.btn-brand:hover {
  background-color: #b8361b !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(216, 71, 39, 0.2);
}

.hover-link-brand:hover {
  color: #b8361b !important;
  text-decoration: underline !important;
}

/* Animation cho Popup */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* CSS cho Menu Động (Màu sắc theo trang) */
.menu-link {
  color: #212529 !important;
  /* Màu mặc định là màu đen (dark) */
  transition: color 0.2s ease-in-out;
}

/* Khi Hover hoặc Đang ở đúng trang đó (active) thì đổi sang màu cam */
.menu-link:hover,
.menu-link.router-link-exact-active {
  color: #d84727 !important;
}
</style>