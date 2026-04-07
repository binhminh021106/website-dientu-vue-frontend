<template>
  <div class="wishlist-page roboto-font bg-white min-vh-100 pb-5">
    
    <!-- Banner & Breadcrumb -->
    <section class="page-banner position-relative d-flex align-items-center justify-content-center mb-5">
      <div class="position-absolute w-100 h-100 overlay"></div>
      <div class="container position-relative z-1 text-center text-white mt-4">
        <h2 class="fw-bold mb-3 fs-1 text-shadow">Sản phẩm yêu thích</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white text-decoration-none hover-text-brand">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white-50" aria-current="page">Yêu thích</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mb-5">
      
      <!-- Giao diện khi danh sách trống (Empty State) -->
      <div v-if="wishlistItems.length === 0" class="text-center py-5 my-lg-5">
        <div class="mb-4 text-muted opacity-25">
          <i class="fa-regular fa-heart" style="font-size: 6rem;"></i>
        </div>
        <h4 class="fw-bold mb-3">Danh sách yêu thích của bạn đang trống</h4>
        <p class="text-muted mb-4">Hãy thêm những sản phẩm công nghệ bạn yêu thích vào đây để dễ dàng mua sắm sau nhé!</p>
        <RouterLink to="/" class="btn btn-brand px-5 py-2 fw-bold rounded-2 text-uppercase">
          Tiếp tục mua sắm
        </RouterLink>
      </div>

      <!-- Giao diện khi có sản phẩm -->
      <div v-else>
        <!-- Tiêu đề & Nút xóa tất cả -->
        <div class="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
          <h5 class="fw-bold mb-0">
            Sản phẩm đã lưu <span class="text-brand">({{ wishlistItems.length }})</span>
          </h5>
          <button class="btn btn-outline-danger btn-sm fw-medium rounded-1 d-flex align-items-center gap-1 hover-danger" @click="clearWishlist">
            <i class="fa-regular fa-trash-can"></i> Xóa tất cả
          </button>
        </div>

        <!-- Lưới sản phẩm (Áp dụng thiết kế thẻ mới) -->
        <div class="row g-4">
          <div class="col-lg-3 col-md-4 col-sm-6" v-for="product in wishlistItems" :key="product.id">
            <div class="card border-0 h-100 product-card rounded-0 group-hover bg-white position-relative">
              
              <div class="position-relative overflow-hidden bg-light" style="height: 250px;">
                <!-- Badges (Top Left) -->
                <div v-if="product.badge" class="position-absolute top-0 start-0 z-2">
                  <span class="badge bg-brand text-white fw-bold px-3 py-2 shadow-sm" style="border-bottom-right-radius: 10px; border-top-left-radius: 0; font-size: 0.85rem;">{{ product.badge }}</span>
                </div>

                <!-- Nút Xóa (Top Right) -->
                <div 
                  class="position-absolute top-0 end-0 z-2 bg-danger text-white d-flex align-items-center justify-content-center remove-btn shadow-sm" 
                  style="width: 42px; height: 42px; border-bottom-left-radius: 10px;"
                  @click="removeItem(product.id)"
                  title="Xóa khỏi danh sách"
                >
                  <i class="fa-regular fa-trash-can fs-5"></i>
                </div>

                <!-- Actions (Cart & Quickview - Bottom Right) trượt từ viền vào -->
                <div class="product-actions position-absolute z-2 d-flex flex-column gap-2">
                   <button class="btn bg-white text-dark shadow-sm rounded-2 d-flex align-items-center justify-content-center action-btn" style="width: 42px; height: 42px;" title="Thêm vào giỏ" @click="addToCart(product)">
                     <i class="fa-solid fa-bag-shopping fs-5"></i>
                   </button>
                   <button class="btn bg-white text-dark shadow-sm rounded-2 d-flex align-items-center justify-content-center action-btn" style="width: 42px; height: 42px;" title="Xem nhanh">
                     <i class="fa-regular fa-eye fs-5"></i>
                   </button>
                </div>

                <!-- Image Placeholder -->
                <div class="w-100 h-100 d-flex align-items-center justify-content-center text-muted transition-transform img-wrapper">
                   <span class="small">[Ảnh {{ product.imageAlt }}]</span>
                </div>
              </div>
              
              <!-- Info -->
              <div class="card-body d-flex flex-column px-0 py-3">
                <h6 class="card-title text-truncate-2 mb-2 text-dark fw-bold hover-brand cursor-pointer" style="font-size: 0.95rem; line-height: 1.4;">
                  {{ product.name }}
                </h6>
                <div class="mt-auto">
                  <div class="d-flex align-items-center flex-wrap gap-2">
                    <span class="fw-bold fs-6" style="color: #e32727;">{{ product.price.toLocaleString('vi-VN') }}đ</span>
                    <span v-if="product.oldPrice" class="text-muted text-decoration-line-through small">{{ product.oldPrice.toLocaleString('vi-VN') }}đ</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Dữ liệu giả lập cho danh sách yêu thích
const wishlistItems = ref([
  { 
    id: 1, 
    name: 'Điện thoại iPhone 15 Pro Max 256GB Titan Tự nhiên', 
    price: 29990000, 
    oldPrice: 34990000, 
    badge: '-14%',
    imageAlt: 'iPhone 15 Pro Max' 
  },
  { 
    id: 2, 
    name: 'Laptop Gaming Acer ROG Strix G15 Core i7 13th', 
    price: 32500000, 
    oldPrice: null, 
    badge: '',
    imageAlt: 'Laptop ROG' 
  },
  { 
    id: 3, 
    name: 'Đồng hồ thông minh Apple Watch Series 9 GPS 45mm', 
    price: 10500000, 
    oldPrice: 11990000, 
    badge: '-12%',
    imageAlt: 'Apple Watch' 
  },
  { 
    id: 4, 
    name: 'Tai nghe Bluetooth AirPods Pro 2', 
    price: 4990000, 
    oldPrice: 6500000, 
    badge: '-23%',
    imageAlt: 'AirPods Pro' 
  }
])

// Hàm xử lý xóa 1 sản phẩm khỏi danh sách
const removeItem = (id) => {
  wishlistItems.value = wishlistItems.value.filter(item => item.id !== id)
}

// Hàm xử lý xóa toàn bộ danh sách
const clearWishlist = () => {
  if (confirm('Bạn có chắc chắn muốn xóa toàn bộ sản phẩm khỏi danh sách yêu thích?')) {
    wishlistItems.value = []
  }
}

// Hàm xử lý thêm vào giỏ hàng
const addToCart = (product) => {
  console.log('Đã thêm vào giỏ:', product.name)
  alert(`Đã thêm ${product.name} vào giỏ hàng!`)
}
</script>

<style scoped>
.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Biến màu thương hiệu */
.text-brand { color: #d84727 !important; }
.bg-brand { background-color: #d84727 !important; }
.hover-brand:hover { color: #d84727 !important; transition: 0.2s; }
.hover-danger:hover { background-color: #dc3545 !important; color: white !important; }

/* Banner Styling */
.page-banner {
  height: 250px;
  background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
}
.overlay {
  background-color: rgba(17, 24, 39, 0.7);
}
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}
.hover-text-brand:hover {
  color: #d84727 !important;
  transition: color 0.2s ease;
}

/* Nút Button Chung */
.btn-brand {
  background-color: #d84727 !important;
  color: white !important;
  border: none;
  transition: all 0.2s ease;
}
.btn-brand:hover {
  background-color: #b8361b !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(216, 71, 39, 0.2);
}
.cursor-pointer { cursor: pointer; }

/* Cắt ngắn tiêu đề 2 dòng */
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Card Sản phẩm và Hiệu ứng Hover */
.transition-transform { transition: transform 0.4s ease; }

.product-card {
  transition: box-shadow 0.3s;
}
.product-card:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}
.group-hover:hover .img-wrapper {
  transform: scale(1.08); /* Zoom nhẹ hình ảnh */
}

/* Nút xóa (thùng rác) */
.remove-btn {
  transition: all 0.2s ease;
  cursor: pointer;
  background-color: #dc3545 !important;
}
.remove-btn:hover {
  background-color: #bb2d3b !important;
}

/* Icon Giỏ hàng và Xem nhanh trượt lên khi hover */
.product-actions {
  bottom: 15px; 
  right: -50px; /* Ẩn bên ngoài card */
  opacity: 0;
  transition: all 0.3s ease;
}
.product-card:hover .product-actions {
  right: 15px; /* Trượt vào trong */
  opacity: 1;
}
.action-btn {
  transition: all 0.2s ease;
  border: 1px solid #eee;
}
.action-btn:hover {
  background-color: #d84727 !important;
  color: white !important;
  border-color: #d84727 !important;
}
</style>