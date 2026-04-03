<template>
  <div class="container py-4">
    
    <!-- Hero Banner Section -->
    <div class="hero-banner rounded-4 d-flex align-items-center position-relative overflow-hidden mb-5">
      <div class="row w-100 p-4 p-md-5 mx-0 align-items-center">
        <div class="col-lg-6 z-1">
          <h1 class="display-4 fw-bolder text-dark mb-3 lh-sm">
            Thế Giới Điện Tử <br> Đỉnh Cao
          </h1>
          <p class="fs-5 text-muted mb-4 pe-lg-5">
            Chào mừng bạn đến với TechZone, nơi cung cấp mọi thiết bị điện tử bạn cần. Khuyến mãi ngập tràn mỗi ngày!
          </p>
          <button class="btn bg-custom-orange text-white fw-bold px-5 py-3 rounded-pill shadow-sm hover-scale">
            Mua Ngay
          </button>
        </div>
        <div class="col-lg-6 position-relative z-0 d-none d-lg-flex justify-content-center">
           <!-- Placeholder hình ảnh dàn thiết bị điện tử -->
           <div class="banner-img-placeholder d-flex flex-column align-items-center justify-content-center text-muted">
              <i class="fa-solid fa-laptop fa-3x mb-2"></i>
              <span>[Hình ảnh Laptop & Phụ kiện Flatlay]</span>
           </div>
        </div>
      </div>
    </div>

    <!-- Trust Badges / Features -->
    <div class="row gy-4 border-bottom pb-5 mb-5">
      <div class="col-lg-3 col-sm-6 d-flex align-items-center gap-3 feature-box">
        <div class="feature-icon text-dark fs-3">
          <i class="fa-solid fa-headset"></i>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Hỗ Trợ 24/7</h6>
          <p class="text-muted small mb-0">Chăm sóc khách hàng mọi lúc</p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 d-flex align-items-center gap-3 feature-box">
        <div class="feature-icon text-dark fs-3">
          <i class="fa-solid fa-shield-halved"></i>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Bảo Mật</h6>
          <p class="text-muted small mb-0">Hệ thống thanh toán an toàn</p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 d-flex align-items-center gap-3 feature-box">
        <div class="feature-icon text-dark fs-3">
          <i class="fa-solid fa-truck-fast"></i>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Giao Hàng</h6>
          <p class="text-muted small mb-0">Nhanh chóng và đáng tin cậy</p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 d-flex align-items-center gap-3 feature-box">
        <div class="feature-icon text-dark fs-3">
          <i class="fa-solid fa-arrow-right-arrow-left"></i>
        </div>
        <div>
          <h6 class="fw-bold mb-1">Minh Bạch</h6>
          <p class="text-muted small mb-0">Đổi trả dễ dàng, tiện lợi</p>
        </div>
      </div>
    </div>

    <!-- Featured Products Section -->
    <div class="d-flex justify-content-between align-items-end mb-4">
      <h3 class="fw-bold mb-0">Sản Phẩm Nổi Bật</h3>
      <a href="#" class="text-custom-orange text-decoration-none fw-medium hover-scale">Xem Tất Cả <i class="fa-solid fa-arrow-right ms-1"></i></a>
    </div>

    <div class="row g-4 mb-5">
      <div class="col-lg-3 col-md-6" v-for="product in products" :key="product.id">
        <div class="card product-card h-100 border-0 p-3">
          
          <!-- Product Badge -->
          <span v-if="product.badge" class="badge bg-custom-orange position-absolute top-0 end-0 m-3 z-2">
            {{ product.badge }}
          </span>

          <!-- Product Image Area -->
          <div class="product-img-wrapper rounded-3 mb-3 d-flex align-items-center justify-content-center position-relative">
            <!-- Placeholder Image Text -->
            <div class="text-muted text-center p-4">
              <span style="font-size: 0.8rem;">[Hình ảnh {{ product.imageAlt }}]</span>
            </div>
            
            <!-- Hover Action Buttons -->
            <div class="hover-actions d-flex gap-2 position-absolute">
              <button class="btn btn-light rounded-circle shadow-sm action-btn text-custom-orange">
                <i class="fa-solid fa-cart-plus"></i>
              </button>
              <button class="btn btn-light rounded-circle shadow-sm action-btn text-custom-orange">
                <i class="fa-regular fa-heart"></i>
              </button>
              <button class="btn btn-light rounded-circle shadow-sm action-btn text-custom-orange">
                <i class="fa-solid fa-share-nodes"></i>
              </button>
            </div>
          </div>

          <!-- Product Info -->
          <div class="card-body p-0 mt-2">
            <small class="text-muted text-uppercase fw-bold" style="font-size: 0.7rem; letter-spacing: 0.5px;">{{ product.category }}</small>
            <h6 class="card-title fw-bold mt-1 mb-2 text-truncate-2">{{ product.name }}</h6>
            
            <!-- Ratings -->
            <div class="d-flex align-items-center mb-2 gap-1" style="font-size: 0.8rem;">
              <span class="text-warning">
                <i class="fa-solid fa-star me-1" v-for="n in 5" :key="n"></i>
              </span>
              <span class="text-muted">({{ product.reviews }})</span>
            </div>
            
            <!-- Price -->
            <div class="mt-auto d-flex align-items-end gap-2">
              <span class="fw-bolder text-dark fs-5">{{ product.price.toLocaleString('vi-VN') }}đ</span>
              <span v-if="product.oldPrice" class="text-muted text-decoration-line-through small pb-1">{{ product.oldPrice.toLocaleString('vi-VN') }}đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Dữ liệu giả lập theo giao diện thiết kế, đã dịch sang tiếng Việt
const products = ref([
  {
    id: 1,
    name: 'Điện thoại iPhone 13 Chính hãng, Camera siêu nét...',
    category: 'ĐIỆN THOẠI',
    price: 24900000,
    oldPrice: null,
    rating: 5,
    reviews: 50,
    badge: null,
    imageAlt: 'iPhone 13'
  },
  {
    id: 2,
    name: 'Tai nghe chụp tai không dây Sony WH-1000XM4 Chống ồn...',
    category: 'ÂM THANH',
    price: 5900000,
    oldPrice: 8500000,
    rating: 5,
    reviews: 120,
    badge: 'Giảm sốc',
    imageAlt: 'Tai nghe'
  },
  {
    id: 3,
    name: 'Laptop Ultra HD LED Màn hình viền mỏng 2023...',
    category: 'LAPTOP',
    price: 28500000,
    oldPrice: null,
    rating: 5,
    reviews: 100,
    badge: null,
    imageAlt: 'Laptop'
  },
  {
    id: 4,
    name: 'Máy ảnh Mini Polaroid Lấy liền tích hợp đèn Flash...',
    category: 'MÁY ẢNH',
    price: 1950000,
    oldPrice: null,
    rating: 5,
    reviews: 70,
    badge: null,
    imageAlt: 'Máy ảnh'
  },
  {
    id: 5,
    name: 'Smart TV OLED 4K AG OLED65CXPUA Thế hệ mới...',
    category: 'TIVI',
    price: 65000000,
    oldPrice: null,
    rating: 5,
    reviews: 20,
    badge: null,
    imageAlt: 'Tivi'
  }
])
</script>

<style scoped>
/* Biến màu chủ đạo */
.bg-custom-orange {
  background-color: #ff6243 !important;
}
.text-custom-orange {
  color: #ff6243 !important;
}

/* Banner chính */
.hero-banner {
  background-color: #f6f7f9;
  min-height: 400px;
}
.banner-img-placeholder {
  width: 100%;
  height: 350px;
  background-color: #e9ecef;
  border-radius: 1rem;
}

/* Hiệu ứng Scale chung */
.hover-scale {
  transition: transform 0.2s ease;
  display: inline-block;
}
.hover-scale:hover {
  transform: translateY(-2px);
}

/* Thiết kế Card Sản phẩm (Core UI/UX) */
.product-card {
  border-radius: 16px;
  border: 1px solid transparent !important;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-color: #ffffff;
}

.product-img-wrapper {
  background-color: #f8f9fa;
  height: 220px;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Đổ bóng mềm và border khi hover */
.product-card:hover {
  box-shadow: 0 15px 35px rgba(0,0,0,0.06) !important;
  border-color: #f1f1f1 !important;
  transform: translateY(-5px);
}

/* Ẩn hiện Action buttons */
.hover-actions {
  bottom: -50px; /* Ẩn xuống dưới */
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.product-card:hover .hover-actions {
  bottom: 20px; /* Đẩy lên khi hover */
  opacity: 1;
}

.action-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}
.action-btn:hover {
  background-color: #ff6243 !important;
  color: white !important;
}

/* Rút gọn text nếu quá dài */
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.5rem;
}

/* Feature Icons */
.feature-box:hover .feature-icon {
  color: #ff6243 !important;
  transition: color 0.3s ease;
}
</style>