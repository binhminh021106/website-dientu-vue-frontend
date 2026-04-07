<template>
  <div class="checkout-success-page roboto-font vh-100 overflow-hidden">
    
    <!-- ========================================== -->
    <!-- GIAO DIỆN TRÊN MÀN HÌNH (SCREEN LAYOUT)    -->
    <!-- ========================================== -->
    <div class="row g-0 h-100 flex-column-reverse flex-lg-row screen-only-layout">
      
      <!-- CỘT TRÁI: LỜI CẢM ƠN & THÔNG TIN ĐƠN HÀNG -->
      <div class="col-lg-7 col-xl-7 bg-white h-100 overflow-auto left-panel custom-scrollbar">
        <div class="p-4 p-md-5 mx-auto" style="max-width: 800px;">
          
          <!-- Logo -->
          <div class="mb-5">
            <RouterLink :to="{ name: 'home' }" class="text-decoration-none d-inline-block">
              <img src="../../../assets/image/techzone1.png" style="max-height: 45px;" alt="TechZone Logo">
            </RouterLink>
          </div>

          <!-- Thông báo thành công -->
          <div class="d-flex align-items-center gap-4 mb-4">
            <div class="success-checkmark border border-2 border-success rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style="width: 70px; height: 70px;">
              <i class="fa-solid fa-check text-success" style="font-size: 2rem;"></i>
            </div>
            <div>
              <h4 class="fw-bold text-dark mb-1 fs-4">Cảm ơn bạn đã đặt hàng</h4>
              <p class="text-muted mb-0 small" style="line-height: 1.5;">
                Một email xác nhận đã được gửi tới <span class="fw-medium text-dark">{{ orderInfo.email }}</span>.<br>
                Xin vui lòng kiểm tra email của bạn.
              </p>
            </div>
          </div>

          <!-- Khối thông tin tóm tắt -->
          <div class="bg-light p-4 rounded-3 mb-5 border border-light-subtle">
            <div class="row gy-4">
              <div class="col-md-6">
                <h6 class="fw-bold text-dark mb-3">Thông tin mua hàng</h6>
                <p class="mb-1 text-dark small">{{ orderInfo.fullName }}</p>
                <p class="mb-1 text-dark small">{{ orderInfo.email }}</p>
                <p class="mb-0 text-dark small">{{ orderInfo.phone }}</p>
              </div>
              
              <div class="col-md-6">
                <h6 class="fw-bold text-dark mb-3">Địa chỉ nhận hàng</h6>
                <p class="mb-1 text-dark small">{{ orderInfo.fullName }}</p>
                <p class="mb-1 text-dark small">{{ orderInfo.address }}</p>
                <p class="mb-0 text-dark small">{{ orderInfo.province }}</p>
              </div>

              <div class="col-md-6">
                <h6 class="fw-bold text-dark mb-3">Phương thức thanh toán</h6>
                <p class="mb-0 text-dark small">{{ orderInfo.paymentMethod }}</p>
              </div>

              <div class="col-md-6">
                <h6 class="fw-bold text-dark mb-3">Phương thức vận chuyển</h6>
                <p class="mb-0 text-dark small">{{ orderInfo.shippingMethod }}</p>
              </div>
            </div>
          </div>

          <!-- Nút hành động -->
          <div class="d-flex align-items-center gap-4">
            <RouterLink to="/" class="btn btn-brand px-5 py-3 fw-bold rounded-2 text-white">
              Tiếp tục mua hàng
            </RouterLink>
            <button class="btn btn-link text-brand text-decoration-none fw-medium d-flex align-items-center gap-2 hover-opacity p-0" @click="printOrder">
              <i class="fa-solid fa-print fs-5"></i> In
            </button>
          </div>

        </div>
      </div>

      <!-- CỘT PHẢI: TÓM TẮT ĐƠN HÀNG -->
      <div class="col-lg-5 col-xl-5 bg-light h-100 overflow-auto right-panel border-start custom-scrollbar">
        <div class="p-4 p-md-5 mx-auto" style="max-width: 600px;">
          
          <h5 class="fw-bold mb-4 text-dark fs-5 pb-3 border-bottom border-secondary border-opacity-25">Đơn hàng #{{ orderInfo.orderId }} ({{ orderItems.length }})</h5>
          
          <!-- Danh sách sản phẩm -->
          <div class="mb-4 pb-4 border-bottom border-secondary border-opacity-25">
            <div v-for="item in orderItems" :key="item.id" class="d-flex align-items-center mb-3">
              <div class="position-relative me-3 flex-shrink-0">
                <div class="bg-white border rounded-2 overflow-hidden d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                  <span class="text-muted" style="font-size: 0.6rem;">[Ảnh]</span>
                </div>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style="width: 20px; height: 20px; font-size: 0.7rem; border: 2px solid #f8f9fa;">
                  {{ item.quantity }}
                </span>
              </div>
              <div class="flex-grow-1 pe-3">
                <span class="d-block text-dark fw-medium small lh-sm text-truncate-2">{{ item.name }}</span>
              </div>
              <div class="text-end fw-medium small text-dark">
                {{ (item.price * item.quantity).toLocaleString('vi-VN') }}đ
              </div>
            </div>
          </div>

          <!-- Tính tiền -->
          <div class="d-flex justify-content-between align-items-center mb-2 small text-muted">
            <span>Tạm tính</span>
            <span class="text-dark fw-medium">{{ subTotal.toLocaleString('vi-VN') }}đ</span>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-4 small text-muted">
            <span>Phí vận chuyển</span>
            <span class="text-dark fw-medium">{{ orderInfo.shippingFee.toLocaleString('vi-VN') }}đ</span>
          </div>
          
          <div class="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
            <span class="text-dark fw-medium fs-6">Tổng cộng</span>
            <span class="fw-bold fs-4 text-brand">{{ total.toLocaleString('vi-VN') }}đ</span>
          </div>

        </div>
      </div>
    </div>


    <!-- ========================================== -->
    <!-- GIAO DIỆN BẢN IN (PRINT LAYOUT)            -->
    <!-- ========================================== -->
    <div class="print-only-layout d-none">
      <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
        
        <!-- Header Bản In -->
        <div class="text-center mb-5">
          <h2 class="fw-bold text-dark mb-3" style="font-size: 2.2rem;">TechZone</h2>
          <h4 class="fw-bold text-dark mb-2" style="font-size: 1.4rem;">Cảm ơn bạn đã đặt hàng</h4>
          <p class="text-dark mb-0" style="font-size: 1rem; color: #555 !important;">
            Một email xác nhận đã được gửi tới {{ orderInfo.email }}.<br>
            Xin vui lòng kiểm tra email của bạn
          </p>
        </div>

        <!-- Khối Đơn Hàng -->
        <div class="border border-secondary border-opacity-25 mb-4 rounded-1">
          <div class="bg-light p-3 border-bottom border-secondary border-opacity-25 fw-bold text-dark fs-6">
            Đơn hàng #{{ orderInfo.orderId }}
          </div>
          <div class="p-4">
            
            <!-- Danh sách sản phẩm in -->
            <div class="mb-4 pb-3 border-bottom border-secondary border-opacity-25">
              <div v-for="item in orderItems" :key="item.id" class="d-flex justify-content-between align-items-center py-2">
                <div class="d-flex align-items-center gap-3">
                  <div class="border border-secondary border-opacity-25 rounded d-flex align-items-center justify-content-center bg-light" style="width: 50px; height: 50px;">
                     <span class="text-muted" style="font-size: 0.55rem;">[Ảnh]</span>
                  </div>
                  <span class="text-dark" style="font-size: 1rem;">{{ item.name }}</span>
                </div>
                <div class="text-end text-nowrap">
                  <span class="me-4 text-muted small">x {{ item.quantity }}</span>
                  <span class="text-dark">{{ (item.price * item.quantity).toLocaleString('vi-VN') }}đ</span>
                </div>
              </div>
            </div>

            <!-- Tính tiền in -->
            <div class="d-flex justify-content-between align-items-center mb-2" style="font-size: 1rem;">
              <span class="text-muted">Tạm tính</span>
              <span class="text-dark">{{ subTotal.toLocaleString('vi-VN') }}đ</span>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom border-secondary border-opacity-25" style="font-size: 1rem;">
              <span class="text-muted">Phí vận chuyển</span>
              <span class="text-dark">{{ orderInfo.shippingFee.toLocaleString('vi-VN') }}đ</span>
            </div>
            
            <div class="d-flex justify-content-between align-items-center mt-2">
              <span class="text-dark fw-bold fs-5">Tổng cộng</span>
              <!-- Tông màu cam dọn nhẹ, in ra đen trắng vẫn đẹp -->
              <span class="fw-bold text-brand" style="font-size: 1.5rem;">{{ total.toLocaleString('vi-VN') }}đ</span>
            </div>
            
          </div>
        </div>

        <!-- Khối Thông Tin Khách Hàng -->
        <div class="border border-secondary border-opacity-25 p-4 rounded-1 mt-4">
          <div class="row gy-4">
            <div class="col-6">
              <div class="mb-4">
                <h6 class="fw-bold text-dark fs-5 mb-3">Thông tin mua hàng</h6>
                <p class="mb-1 text-dark">{{ orderInfo.fullName }}</p>
                <p class="mb-1 text-brand">{{ orderInfo.email }}</p>
              </div>
              <div>
                <h6 class="fw-bold text-dark fs-5 mb-3">Phương thức thanh toán</h6>
                <p class="mb-0 text-dark">{{ orderInfo.paymentMethod }}</p>
              </div>
            </div>
            <div class="col-6">
              <div class="mb-4">
                <h6 class="fw-bold text-dark fs-5 mb-3">Địa chỉ nhận hàng</h6>
                <p class="mb-1 text-dark">{{ orderInfo.fullName }}</p>
                <p class="mb-1 text-dark">{{ orderInfo.address }}</p>
                <p class="mb-0 text-dark">{{ orderInfo.province }}</p>
              </div>
              <div>
                <h6 class="fw-bold text-dark fs-5 mb-3">Phương thức vận chuyển</h6>
                <p class="mb-0 text-dark">{{ orderInfo.shippingMethod }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

// Dữ liệu giả lập cho đơn hàng vừa đặt thành công
const orderInfo = ref({
  orderId: 'TECH1032',
  fullName: 'Minh Dz Wibu',
  email: 'minhdzwama211@gmail.com',
  phone: '0987 654 321',
  address: '123 Đường Công Nghệ, Phường Tân Lập',
  province: 'TP. Buôn Ma Thuột, Đắk Lắk',
  paymentMethod: 'Chuyển khoản VNPAY',
  shippingMethod: 'Giao hàng tận nơi',
  shippingFee: 40000
})

const orderItems = ref([
  {
    id: 1,
    name: 'Tủ chậu bo tròn kèm tủ gương thông minh (Giả lập SP)',
    price: 9200000,
    quantity: 1,
    imageAlt: 'SP 1'
  }
])

// Tính toán
const subTotal = computed(() => orderItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0))
const total = computed(() => subTotal.value + orderInfo.value.shippingFee)

// Hàm In hóa đơn
const printOrder = () => {
  window.print()
}
</script>

<style scoped>
.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Base Layout Screen */
.checkout-success-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9999;
  background-color: #fff;
}

/* Colors */
.text-brand { color: #d84727 !important; }
.bg-brand { background-color: #d84727 !important; }
.bg-light { background-color: #fafafa !important; } 

/* Nút Brand (Màu cam) */
.btn-brand {
  background-color: #d84727 !important;
  color: white !important;
  border: none;
  transition: all 0.2s ease;
}
.btn-brand:hover {
  background-color: #b8361b !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(216, 71, 39, 0.2);
}

.hover-opacity:hover {
  opacity: 0.7;
}

.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent; 
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e0e0e0; 
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #dcdcdc; 
}

/* Cấu hình nội bộ cho bản in */
@media print {
  /* Reset lại container để in */
  .checkout-success-page {
    position: static;
    height: auto !important;
    overflow: visible !important;
    background-color: white !important;
  }
  
  /* Ẩn hoàn toàn giao diện màn hình */
  .screen-only-layout {
    display: none !important;
  }
  
  /* Hiển thị bản in */
  .print-only-layout {
    display: block !important;
  }

  /* Đảm bảo viền và màu nền nhẹ vẫn được in ra mượt mà */
  .border { border: 1px solid #dee2e6 !important; }
  .border-bottom { border-bottom: 1px solid #dee2e6 !important; }
  .border-top { border-top: 1px solid #dee2e6 !important; }
  .bg-light { background-color: #f8f9fa !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
</style>

<!-- THẺ STYLE GLOBAL MỚI: DÙNG ĐỂ ẨN HEADER/FOOTER CỦA LAYOUT KHI IN -->
<style>
@media print {
  /* Khai báo ẩn toàn bộ các cục dư thừa ở LayoutUser */
  header, 
  footer, 
  .floating-left, 
  .floating-right {
    display: none !important;
  }
  
  /* Xóa khoảng trống margin của main để bản in khít lên đầu trang */
  main {
    margin: 0 !important;
    padding: 0 !important;
  }

  /* Chỉnh khổ giấy in và căn lề */
  @page {
    margin: 1cm;
    size: A4 portrait;
  }
}
</style>