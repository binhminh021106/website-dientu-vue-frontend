<template>
  <div class="d-flex flex-column min-vh-100 bg-white">
    <!-- Header -->
    <ClientHeader />

    <!-- Main Content -->
    <main class="flex-grow-1">
      <RouterView />
    </main>

    <!-- Footer -->
    <ClientFooter />

    <!-- ============================================== -->
    <!-- FLOATING BUTTONS GÓC TRÁI (NÚT CHUÔNG)         -->
    <!-- ============================================== -->
    <div class="floating-left position-fixed z-3">
      <!-- Popup Menu Chuông -->
      <transition name="fade">
        <div v-if="isAppMenuOpen" class="app-menu-popup shadow-lg rounded-3">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h6 class="fw-bold mb-0 pt-1">Tích hợp sẵn các ứng dụng</h6>
            <i class="fa-solid fa-xmark cursor-pointer fs-5 opacity-75 hover-opacity-100" @click="isAppMenuOpen = false"></i>
          </div>
          <ul class="list-unstyled mb-3 app-list lh-lg">
            <li><i class="fa-solid fa-angles-right me-2" style="font-size: 0.8rem;"></i> Đánh giá sản phẩm</li>
            <li><i class="fa-solid fa-angles-right me-2" style="font-size: 0.8rem;"></i> Mua X tặng Y</li>
            <li><i class="fa-solid fa-angles-right me-2" style="font-size: 0.8rem;"></i> Ứng dụng Affiliate</li>
            <li><i class="fa-solid fa-angles-right me-2" style="font-size: 0.8rem;"></i> Đa ngôn ngữ</li>
            <li><i class="fa-solid fa-angles-right me-2" style="font-size: 0.8rem;"></i> Livechat Facebook</li>
          </ul>
          <hr class="border-white opacity-25 my-2">
          <p class="mb-0 fst-italic" style="font-size: 0.8rem; line-height: 1.4;">
            Lưu ý với các ứng dụng trả phí bạn cần cài đặt và mua ứng dụng này trên App store Sapo để sử dụng ngay
          </p>
        </div>
      </transition>

      <!-- Nút Chuông -->
      <button class="btn btn-brand rounded-circle shadow-lg floating-btn" @click="isAppMenuOpen = !isAppMenuOpen">
        <i class="fa-solid fa-bell fs-4"></i>
      </button>
    </div>


    <!-- ============================================== -->
    <!-- FLOATING BUTTONS GÓC PHẢI (LIÊN HỆ & TOP)      -->
    <!-- ============================================== -->
    <div class="floating-right position-fixed z-3 d-flex flex-column align-items-center gap-2">
      
      <!-- Popup Menu Liên Hệ -->
      <transition name="fade">
        <div v-if="isContactMenuOpen" class="contact-menu-popup shadow-lg bg-white rounded-3 p-2 border">
          <div class="d-flex justify-content-end mb-1">
            <i class="fa-solid fa-xmark cursor-pointer text-muted fs-5 hover-brand px-1" @click="isContactMenuOpen = false"></i>
          </div>
          <div class="d-flex flex-column gap-1">
            <a href="#" class="text-decoration-none text-dark d-flex align-items-center gap-3 p-2 rounded contact-item">
              <div class="icon-circle bg-danger text-white"><i class="fa-solid fa-phone"></i></div>
              <span class="fw-medium" style="font-size: 0.95rem;">Gọi ngay cho chúng tôi</span>
            </a>
            <a href="#" class="text-decoration-none text-dark d-flex align-items-center gap-3 p-2 rounded contact-item">
              <div class="icon-circle bg-primary text-white"><i class="fa-solid fa-comment-dots"></i></div>
              <span class="fw-medium" style="font-size: 0.95rem;">Chat với chúng tôi qua Zalo</span>
            </a>
            <a href="#" class="text-decoration-none text-dark d-flex align-items-center gap-3 p-2 rounded contact-item">
              <div class="icon-circle bg-info text-white"><i class="fa-solid fa-location-dot"></i></div>
              <span class="fw-medium" style="font-size: 0.95rem;">Thông tin cửa hàng</span>
            </a>
          </div>
        </div>
      </transition>

      <!-- Nút Lên Đầu Trang (Ẩn/Hiện khi cuộn) -->
      <transition name="fade">
        <button v-show="showScrollTop" class="btn btn-brand shadow d-flex align-items-center justify-content-center" @click="scrollToTop" style="width: 44px; height: 44px; border-radius: 12px;">
          <i class="fa-solid fa-chevron-up fs-5"></i>
        </button>
      </transition>

      <!-- Nút Bật/Tắt Liên Hệ -->
      <button class="btn btn-brand rounded-circle shadow-lg floating-btn-circle d-flex flex-column justify-content-center align-items-center" @click="isContactMenuOpen = !isContactMenuOpen">
        <template v-if="!isContactMenuOpen">
          <i class="fa-solid fa-comment-dots fs-5 mb-1"></i>
          <span style="font-size: 0.65rem; font-weight: 500; line-height: 1;">Liên hệ</span>
        </template>
        <template v-else>
          <i class="fa-solid fa-xmark fs-3"></i>
        </template>
      </button>

      <!-- Nút Messenger -->
      <button class="btn btn-messenger rounded-circle shadow-lg floating-btn-circle d-flex align-items-center justify-content-center">
        <i class="fa-brands fa-facebook-messenger fs-2"></i>
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import ClientHeader from '../components/client/Header.vue'
import ClientFooter from '../components/client/Footer.vue'

// Quản lý trạng thái mở popup
const isAppMenuOpen = ref(false)
const isContactMenuOpen = ref(false)

// Quản lý nút cuộn lên đầu trang
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  showScrollTop.value = false // Tắt ngay lập tức khi bấm
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Reset cơ bản cho toàn trang client */
body {
  font-family: 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  background-color: #ffffff;
  color: #333333;
}

/* Nút & Màu sắc thương hiệu */
.btn-brand {
  background-color: #d84727 !important;
  color: white !important;
  border: none;
  transition: all 0.2s;
}
.btn-brand:hover {
  background-color: #c23b1c !important;
  transform: scale(1.05);
}
.hover-brand:hover {
  color: #d84727 !important;
}

.btn-messenger {
  background-color: #0084ff !important;
  color: white !important;
  border: none;
  transition: all 0.2s;
}
.btn-messenger:hover {
  background-color: #0073e6 !important;
  transform: scale(1.05);
}

/* Định vị các cụm nút Floating */
.floating-left {
  bottom: 30px;
  left: 30px;
}
.floating-right {
  bottom: 30px;
  right: 30px;
}

/* Kích thước nút */
.floating-btn {
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.floating-btn-circle {
  width: 58px;
  height: 58px;
}

/* Kiểu dáng Popup Menu Ứng dụng (Trái) */
.app-menu-popup {
  position: absolute;
  bottom: 70px;
  left: 0;
  width: 300px;
  background-color: #d84727;
  color: white;
  padding: 1.25rem;
}
.app-list li {
  padding-bottom: 0.5rem;
  cursor: pointer;
  transition: opacity 0.2s;
}
.app-list li:hover {
  opacity: 0.8;
}
.hover-opacity-100:hover {
  opacity: 1 !important;
}

/* Kiểu dáng Popup Menu Liên hệ (Phải) */
.contact-menu-popup {
  position: absolute;
  bottom: 135px; /* Canh cho nó nẳm ngang với nút liên hệ */
  right: 75px;   /* Đẩy menu sang bên trái các nút */
  width: 320px;
}
.contact-item {
  transition: background-color 0.2s;
}
.contact-item:hover {
  background-color: #f8f9fa;
}
.icon-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

/* Hiệu ứng Fade (Mở/Đóng popup mượt mà) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
</style>