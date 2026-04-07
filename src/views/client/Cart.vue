<template>
  <div class="cart-page roboto-font bg-white min-vh-100 pb-5 position-relative">
    
    <!-- Banner & Breadcrumb -->
    <section class="page-banner position-relative d-flex align-items-center justify-content-center mb-5">
      <div class="position-absolute w-100 h-100 overlay"></div>
      <div class="container position-relative z-1 text-center text-white mt-4">
        <h2 class="fw-bold mb-3 fs-1 text-shadow">Giỏ hàng</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white text-decoration-none hover-text-brand">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white-50" aria-current="page">Giỏ hàng</li>
          </ol>
        </nav>
      </div>
    </section>

    <div class="container mb-5">
      
      <!-- Giao diện khi giỏ hàng trống -->
      <div v-if="cartItems.length === 0" class="text-center py-5 my-lg-5">
        <div class="mb-4 text-muted opacity-25">
          <i class="fa-solid fa-cart-arrow-down" style="font-size: 6rem;"></i>
        </div>
        <h4 class="fw-bold mb-3">Giỏ hàng của bạn đang trống</h4>
        <p class="text-muted mb-4">Vui lòng quay lại trang chủ hoặc danh mục sản phẩm để chọn mua những món đồ công nghệ yêu thích nhé!</p>
        <RouterLink to="/" class="btn btn-brand px-5 py-2 fw-bold rounded-1 text-uppercase">
          Tiếp tục mua sắm
        </RouterLink>
      </div>

      <!-- Giao diện khi có sản phẩm -->
      <div v-else class="row gx-lg-5 gy-4">
        
        <!-- Cột Trái: Danh sách sản phẩm trong giỏ -->
        <div class="col-lg-8 col-xl-9">
          
          <!-- Tiêu đề bảng (Chỉ hiện trên màn hình lớn) -->
          <div class="row border-bottom pb-2 mb-3 fw-bold d-none d-md-flex text-dark">
            <div class="col-md-5">Thông খুন sản phẩm</div>
            <div class="col-md-2 text-center">Đơn giá</div>
            <div class="col-md-2 text-center">Số lượng</div>
            <div class="col-md-3 text-end">Thành tiền</div>
          </div>

          <!-- Danh sách Item -->
          <div class="cart-items-wrapper border-bottom mb-4">
            <div v-for="item in cartItems" :key="item.id" class="row align-items-center py-3 border-top cart-item-row">
              
              <!-- Cột 1: Thông tin sản phẩm -->
              <div class="col-12 col-md-5 d-flex gap-3 mb-3 mb-md-0">
                <div class="flex-shrink-0 bg-light border" style="width: 80px; height: 80px; overflow: hidden;">
                  <div class="w-100 h-100 d-flex align-items-center justify-content-center text-muted small img-wrapper">
                     [Ảnh {{ item.imageAlt }}]
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-start">
                  <RouterLink to="#" class="text-dark fw-medium text-decoration-none hover-brand mb-1 lh-sm" style="font-size: 0.95rem;">
                    {{ item.name }}
                  </RouterLink>
                  <span class="text-brand cursor-pointer hover-danger d-inline-block fw-medium mt-auto" style="font-size: 0.85rem; width: fit-content;" @click="removeItem(item.id)">
                    <i class="fa-regular fa-trash-can me-1"></i>Xóa
                  </span>
                </div>
              </div>

              <!-- Cột 2: Đơn giá -->
              <div class="col-4 col-md-2 text-md-center">
                <span class="d-md-none text-muted small d-block mb-1">Đơn giá:</span>
                <span class="fw-bold text-dark">{{ item.price.toLocaleString('vi-VN') }}đ</span>
              </div>

              <!-- Cột 3: Số lượng -->
              <div class="col-4 col-md-2 d-flex justify-content-md-center">
                <div class="input-group input-group-sm qty-group" style="width: 100px;">
                  <button class="btn btn-outline-secondary px-2 border-light-subtle" type="button" @click="decreaseQty(item)">
                    <i class="fa-solid fa-minus" style="font-size: 0.7rem;"></i>
                  </button>
                  <input type="text" class="form-control text-center px-1 border-light-subtle fw-medium" v-model="item.quantity" @change="validateQty(item)">
                  <button class="btn btn-outline-secondary px-2 border-light-subtle" type="button" @click="increaseQty(item)">
                    <i class="fa-solid fa-plus" style="font-size: 0.7rem;"></i>
                  </button>
                </div>
              </div>

              <!-- Cột 4: Thành tiền -->
              <div class="col-4 col-md-3 text-end">
                <span class="d-md-none text-muted small d-block mb-1">Thành tiền:</span>
                <span class="fw-bold text-brand">{{ (item.price * item.quantity).toLocaleString('vi-VN') }}đ</span>
              </div>
              
            </div>
          </div>
        </div>

        <!-- Cột Phải: Tóm tắt đơn hàng (Sticky) -->
        <div class="col-lg-4 col-xl-3">
          <div class="bg-light p-4 rounded-1 border border-light-subtle sticky-summary">
            <h6 class="fw-bold mb-3 text-dark border-bottom pb-3">Tóm tắt đơn hàng</h6>
            
            <div class="d-flex justify-content-between align-items-center mb-2 text-muted">
              <span>Tạm tính:</span>
              <span class="fw-medium">{{ cartTotal.toLocaleString('vi-VN') }}đ</span>
            </div>
            
            <div class="d-flex justify-content-between align-items-center border-top pt-3 mt-3 mb-4">
              <span class="text-dark fw-bold">Tổng tiền:</span>
              <span class="fw-bolder text-brand fs-4 lh-1">{{ cartTotal.toLocaleString('vi-VN') }}đ</span>
            </div>

            <p class="text-muted small fst-italic mb-3">(Chưa bao gồm phí vận chuyển)</p>

            <RouterLink :to="{ name: 'checkout'}" class="btn btn-brand w-100 fw-bold rounded-1 py-3 text-uppercase" style="font-size: 1rem; letter-spacing: 0.5px;">
              Tiến hành thanh toán
            </RouterLink>

            <!-- Checkbox Yêu cầu xuất hóa đơn -->
            <div class="mt-4 pt-3 border-top">
              <div class="form-check d-flex align-items-center gap-2">
                <input class="form-check-input mt-0 shadow-none border-secondary cursor-pointer" type="checkbox" id="companyInvoice" style="width: 18px; height: 18px;" v-model="isRequestInvoice" @change="handleInvoiceCheck">
                <label class="form-check-label text-dark fw-medium cursor-pointer" for="companyInvoice" style="font-size: 0.9rem;">
                  Yêu cầu xuất hóa đơn công ty
                </label>
              </div>

              <!-- Tóm tắt thông tin xuất hóa đơn (chỉ hiện khi đã xác nhận form) -->
              <transition name="fade">
                <div v-if="isRequestInvoice && invoiceData.companyName" class="mt-3 p-3 bg-white border border-light-subtle rounded-2 shadow-sm small">
                  <div class="d-flex justify-content-between align-items-start mb-1">
                    <span class="fw-bold text-dark text-truncate d-block" style="max-width: 160px;" :title="invoiceData.companyName">{{ invoiceData.companyName }}</span>
                    <a href="#" class="text-brand text-decoration-none fw-medium" @click.prevent="showInvoiceModal = true">Sửa</a>
                  </div>
                  <span class="text-muted d-block">MST: {{ invoiceData.taxCode }}</span>
                </div>
              </transition>
            </div>
            
          </div>
        </div>

      </div>
    </div>

    <!-- ========================================== -->
    <!-- MODAL NHẬP THÔNG TIN HÓA ĐƠN               -->
    <!-- ========================================== -->
    <transition name="modal-fade">
      <div v-if="showInvoiceModal" class="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center z-3">
        
        <!-- Lớp nền đen mờ -->
        <div class="position-absolute w-100 h-100" style="background-color: rgba(0,0,0,0.5);" @click="cancelInvoice"></div>
        
        <!-- Khung nội dung Modal -->
        <div class="bg-white rounded-3 p-4 shadow-lg position-relative z-1 modal-content-box" style="width: 90%; max-width: 450px;">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold mb-0">Thông tin xuất hóa đơn</h5>
            <i class="fa-solid fa-xmark fs-5 cursor-pointer text-muted hover-danger" @click="cancelInvoice"></i>
          </div>
          
          <p class="text-muted small mb-4">Vui lòng nhập chính xác thông tin công ty để TechZone xuất hóa đơn điện tử.</p>
          
          <!-- Các ô nhập liệu -->
          <div class="mb-3">
            <label class="form-label small fw-medium text-dark mb-1">Tên công ty <span class="text-danger">*</span></label>
            <input type="text" class="form-control focus-brand shadow-none border-light-subtle" placeholder="Nhập tên công ty" v-model="tempInvoiceData.companyName">
          </div>
          
          <div class="mb-3">
            <label class="form-label small fw-medium text-dark mb-1">Mã số thuế <span class="text-danger">*</span></label>
            <input type="text" class="form-control focus-brand shadow-none border-light-subtle" placeholder="Nhập mã số thuế" v-model="tempInvoiceData.taxCode">
          </div>
          
          <div class="mb-3">
            <label class="form-label small fw-medium text-dark mb-1">Địa chỉ công ty <span class="text-danger">*</span></label>
            <input type="text" class="form-control focus-brand shadow-none border-light-subtle" placeholder="Nhập địa chỉ trụ sở" v-model="tempInvoiceData.address">
          </div>
          
          <div class="mb-4">
            <label class="form-label small fw-medium text-dark mb-1">Email nhận hóa đơn <span class="text-danger">*</span></label>
            <input type="email" class="form-control focus-brand shadow-none border-light-subtle" placeholder="Nhập email" v-model="tempInvoiceData.email">
          </div>
          
          <!-- Các nút thao tác -->
          <div class="d-flex gap-2 justify-content-end pt-2 border-top mt-2">
            <button class="btn btn-light px-4 border text-dark fw-medium" @click="cancelInvoice">Hủy</button>
            <button class="btn btn-brand px-4 fw-medium" @click="saveInvoice">Xác nhận</button>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

// Dữ liệu giỏ hàng mô phỏng
const cartItems = ref([
  {
    id: 1,
    name: 'Màn hình thông minh cong Samsung Odyssey G9 49 inch',
    price: 32000000,
    quantity: 1,
    imageAlt: 'Samsung G9'
  },
  {
    id: 2,
    name: 'Bàn phím cơ không dây Logitech MX Mechanical',
    price: 3890000,
    quantity: 2,
    imageAlt: 'Logitech MX'
  }
])

// --- STATE CHO XUẤT HÓA ĐƠN CÔNG TY ---
const isRequestInvoice = ref(false)
const showInvoiceModal = ref(false)

// Dữ liệu hóa đơn đã lưu (để hiển thị tóm tắt)
const invoiceData = ref({
  companyName: '',
  taxCode: '',
  address: '',
  email: ''
})

// Dữ liệu hóa đơn tạm thời (khi đang nhập trong Modal)
const tempInvoiceData = ref({
  companyName: '',
  taxCode: '',
  address: '',
  email: ''
})

// Xử lý khi tích/bỏ tích ô Checkbox
const handleInvoiceCheck = () => {
  if (isRequestInvoice.value) {
    // Mở modal, copy data hiện có sang temp để sửa
    tempInvoiceData.value = { ...invoiceData.value }
    showInvoiceModal.value = true
  } else {
    // Bỏ tích -> Xóa sạch data
    invoiceData.value = { companyName: '', taxCode: '', address: '', email: '' }
  }
}

// Xử lý khi bấm nút "Hủy" hoặc nút (X) trong Modal
const cancelInvoice = () => {
  showInvoiceModal.value = false
  // Nếu hủy lúc chưa có data nào (vừa tích lần đầu rồi ấn Hủy), tự động bỏ chọn Checkbox
  if (!invoiceData.value.companyName) {
    isRequestInvoice.value = false
  }
}

// Xử lý khi bấm nút "Xác nhận" lưu thông tin
const saveInvoice = () => {
  // Validate sơ bộ
  if (!tempInvoiceData.value.companyName || !tempInvoiceData.value.taxCode) {
    alert('Vui lòng điền ít nhất Tên công ty và Mã số thuế!')
    return
  }
  // Lưu data từ biến tạm vào biến chính
  invoiceData.value = { ...tempInvoiceData.value }
  showInvoiceModal.value = false // Đóng modal
}
// --------------------------------------

// Tính tổng tiền
const cartTotal = computed(() => {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

// Xử lý tăng giảm số lượng
const increaseQty = (item) => {
  item.quantity++
}

const decreaseQty = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  }
}

const validateQty = (item) => {
  let qty = parseInt(item.quantity)
  if (isNaN(qty) || qty < 1) {
    item.quantity = 1
  } else {
    item.quantity = qty
  }
}

// Xóa sản phẩm
const removeItem = (id) => {
  if (confirm('Bạn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
    cartItems.value = cartItems.value.filter(item => item.id !== id)
  }
}
</script>

<style scoped>
.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Biến màu thương hiệu */
.text-brand { color: #d84727 !important; }
.bg-brand { background-color: #d84727 !important; }
.border-light-subtle { border-color: #e5e7eb !important; }

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

/* Nút Brand */
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

/* Nút chức năng */
.cursor-pointer { cursor: pointer; }
.hover-brand:hover { color: #d84727 !important; transition: 0.2s; }
.hover-danger:hover { color: #dc3545 !important; transition: 0.2s; }

/* Input Số lượng */
.qty-group .btn {
  background-color: #f8f9fa;
}
.qty-group .btn:hover {
  background-color: #e9ecef;
}
.qty-group input {
  box-shadow: none !important;
}

/* Checkbox */
.form-check-input:checked {
  background-color: #d84727;
  border-color: #d84727;
}

/* --- CSS DÀNH CHO MODAL --- */
.modal-overlay {
  z-index: 1050; /* Cao hơn header dính */
  backdrop-filter: blur(3px); /* Làm mờ phần nền đằng sau */
}
.modal-content-box {
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.focus-brand:focus {
  border-color: #d84727 !important;
  box-shadow: 0 0 0 0.2rem rgba(216, 71, 39, 0.15) !important;
}

/* Hiệu ứng Fade & Slide Up cho Modal */
@keyframes slideUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
/* Hiệu ứng Fade cho phần tử Tóm tắt */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Sticky Order Summary */
.sticky-summary {
  position: -webkit-sticky;
  position: sticky;
  top: 100px; /* Cân chỉnh khoảng cách so với header dính */
  z-index: 1;
}

/* CSS cho Item Giỏ hàng trên Mobile */
@media (max-width: 767.98px) {
  .cart-item-row {
    flex-wrap: wrap;
  }
}
</style>