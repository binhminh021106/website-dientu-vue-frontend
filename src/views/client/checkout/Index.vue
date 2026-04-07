<template>
  <!-- Bỏ header/footer chung, tạo layout 2 cột tràn viền -->
  <div class="checkout-page roboto-font vh-100 overflow-hidden">
    <div class="row g-0 h-100 flex-column-reverse flex-lg-row">
      
      <!-- ========================================== -->
      <!-- CỘT TRÁI: THÔNG TIN GIAO HÀNG & THANH TOÁN -->
      <!-- ========================================== -->
      <div class="col-lg-7 col-xl-7 bg-white h-100 overflow-auto left-panel custom-scrollbar">
        <div class="p-4 p-md-5 mx-auto" style="max-width: 800px;">
          
          <!-- Logo & Breadcrumb -->
          <div class="mb-4">
            <RouterLink :to="{ name: 'home' }" class="text-decoration-none d-inline-block mb-3">
              <img src="../../../assets/image/techzone1.png" style="max-height: 45px;" alt="TechZone Logo">
            </RouterLink>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb small mb-0">
                <li class="breadcrumb-item"><RouterLink to="/cart" class="text-brand text-decoration-none">Giỏ hàng</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">Thông tin giao hàng</li>
              </ol>
            </nav>
          </div>

          <!-- Form Thông tin -->
          <div class="row g-4">
            
            <!-- THÔNG TIN NHẬN HÀNG -->
            <div class="col-md-6">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="fw-bold text-dark mb-0 fs-5">Thông tin nhận hàng</h6>
                <RouterLink v-if="!isLoggedIn" to="/login" class="text-decoration-none text-brand small fw-medium">
                  <i class="fa-regular fa-circle-user me-1"></i>Đăng nhập
                </RouterLink>
              </div>

              <div class="d-flex flex-column gap-3">
                <!-- Các ô nhập cơ bản -->
                <input type="email" class="form-control border-light-subtle shadow-none py-2 px-3 focus-brand" placeholder="Email" v-model="checkoutForm.email">
                <input type="text" class="form-control border-light-subtle shadow-none py-2 px-3 focus-brand" placeholder="Họ và tên" v-model="checkoutForm.fullName">
                <input type="tel" class="form-control border-light-subtle shadow-none py-2 px-3 focus-brand" placeholder="Số điện thoại" v-model="checkoutForm.phone">

                <!-- LOGIC ĐỊA CHỈ THÔNG MINH -->
                <!-- Nếu ĐÃ đăng nhập & CÓ địa chỉ lưu sẵn -->
                <template v-if="isLoggedIn && savedAddresses.length > 0">
                  <select class="form-select border-light-subtle shadow-none py-2 px-3 focus-brand cursor-pointer" v-model="selectedAddressId">
                    <option v-for="addr in savedAddresses" :key="addr.id" :value="addr.id">
                      Sổ địa chỉ: {{ addr.label }} ({{ addr.fullAddress }})
                    </option>
                    <option value="new">-- Thêm địa chỉ mới --</option>
                  </select>
                </template>

                <!-- Nếu CHƯA đăng nhập HOẶC chọn "Thêm địa chỉ mới" (Tích hợp API Tỉnh thành) -->
                <template v-if="!isLoggedIn || selectedAddressId === 'new'">
                  <input type="text" class="form-control border-light-subtle shadow-none py-2 px-3 focus-brand" placeholder="Địa chỉ (Số nhà, tên đường)" v-model="checkoutForm.address">
                  
                  <select class="form-select border-light-subtle shadow-none py-2 px-3 focus-brand cursor-pointer" v-model="checkoutForm.province" @change="onProvinceChange">
                    <option value="" disabled selected>Tỉnh / Thành phố</option>
                    <option v-for="prov in provinces" :key="prov.code" :value="prov.name">{{ prov.name }}</option>
                  </select>
                  
                  <select class="form-select border-light-subtle shadow-none py-2 px-3 focus-brand cursor-pointer" v-model="checkoutForm.district" @change="onDistrictChange" :disabled="!checkoutForm.province || districts.length === 0">
                    <option value="" disabled selected>Quận / Huyện (tùy chọn)</option>
                    <option v-for="dist in districts" :key="dist.code" :value="dist.name">{{ dist.name }}</option>
                  </select>
                  
                  <select class="form-select border-light-subtle shadow-none py-2 px-3 focus-brand cursor-pointer" v-model="checkoutForm.ward" :disabled="!checkoutForm.district || wards.length === 0">
                    <option value="" disabled selected>Phường / Xã (tùy chọn)</option>
                    <option v-for="ward in wards" :key="ward.code" :value="ward.name">{{ ward.name }}</option>
                  </select>
                </template>

                <textarea class="form-control border-light-subtle shadow-none py-2 px-3 focus-brand" placeholder="Ghi chú (tùy chọn)" rows="3" v-model="checkoutForm.note"></textarea>
              </div>
            </div>

            <!-- VẬN CHUYỂN & THANH TOÁN -->
            <div class="col-md-6 d-flex flex-column gap-4">
              
              <!-- Vận chuyển -->
              <div>
                <h6 class="fw-bold text-dark mb-3 fs-5">Vận chuyển</h6>
                <!-- Nếu chưa điền đủ thông tin cơ bản -->
                <div v-if="!isShippingReady" class="alert alert-info bg-light border-info border-opacity-25 text-muted small py-3 px-3 mb-0">
                  Vui lòng nhập thông tin giao hàng để xem phí vận chuyển.
                </div>
                <!-- Nếu đã điền đủ -->
                <div v-else class="border border-light-subtle rounded-2 p-3 d-flex justify-content-between align-items-center cursor-pointer bg-white">
                  <div class="form-check mb-0">
                    <input class="form-check-input brand-radio shadow-none" type="radio" checked>
                    <label class="form-check-label small text-dark">Giao hàng tận nơi</label>
                  </div>
                  <span class="small fw-medium">{{ shippingFee.toLocaleString('vi-VN') }}đ</span>
                </div>
              </div>

              <!-- Thanh toán -->
              <div>
                <h6 class="fw-bold text-dark mb-3 fs-5">Thanh toán</h6>
                <div class="border border-light-subtle rounded-2 overflow-hidden bg-white">
                  
                  <!-- COD -->
                  <label class="d-flex justify-content-between align-items-center p-3 border-bottom border-light-subtle cursor-pointer hover-bg-light m-0">
                    <div class="form-check mb-0 d-flex align-items-center gap-2">
                      <input class="form-check-input brand-radio shadow-none mt-0" type="radio" name="payment" value="COD" v-model="checkoutForm.paymentMethod">
                      <span class="small text-dark">Thu hộ (COD)</span>
                    </div>
                    <i class="fa-regular fa-money-bill-1 text-brand fs-5"></i>
                  </label>

                  <!-- VNPAY -->
                  <label class="d-flex justify-content-between align-items-center p-3 border-bottom border-light-subtle cursor-pointer hover-bg-light m-0">
                    <div class="form-check mb-0 d-flex align-items-center gap-2">
                      <input class="form-check-input brand-radio shadow-none mt-0" type="radio" name="payment" value="VNPAY" v-model="checkoutForm.paymentMethod">
                      <span class="small text-dark">Thanh toán qua VNPAY</span>
                    </div>
                    <img src="../../../assets/image/vnpay.png" alt="VNPAY" style="height: 18px;">
                  </label>

                  <!-- MoMo -->
                  <label class="d-flex justify-content-between align-items-center p-3 cursor-pointer hover-bg-light m-0">
                    <div class="form-check mb-0 d-flex align-items-center gap-2">
                      <input class="form-check-input brand-radio shadow-none mt-0" type="radio" name="payment" value="MOMO" v-model="checkoutForm.paymentMethod">
                      <span class="small text-dark">Ví MoMo</span>
                    </div>
                    <img src="../../../assets/image/momo.png" alt="MoMo" style="height: 22px;">
                  </label>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- CỘT PHẢI: TÓM TẮT ĐƠN HÀNG                 -->
      <!-- ========================================== -->
      <div class="col-lg-5 col-xl-5 bg-light h-100 overflow-auto right-panel border-start custom-scrollbar">
        <div class="p-4 p-md-5 mx-auto" style="max-width: 600px;">
          
          <h5 class="fw-bold mb-4 text-dark fs-5">Đơn hàng ({{ cartItems.length }} sản phẩm)</h5>
          
          <!-- Danh sách sản phẩm (Style gọn nhẹ như ảnh) -->
          <div class="mb-4 pb-4 border-bottom border-secondary border-opacity-25">
            <div v-for="item in cartItems" :key="item.id" class="d-flex align-items-center mb-3">
              <!-- Ảnh + Số lượng -->
              <div class="position-relative me-3 flex-shrink-0">
                <div class="bg-white border rounded-2 overflow-hidden d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                  <span class="text-muted" style="font-size: 0.6rem;">[Ảnh]</span>
                </div>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style="width: 20px; height: 20px; font-size: 0.7rem; border: 2px solid #f8f9fa;">
                  {{ item.quantity }}
                </span>
              </div>
              <!-- Tên -->
              <div class="flex-grow-1 pe-3">
                <span class="d-block text-dark fw-medium small lh-sm text-truncate-2">{{ item.name }}</span>
              </div>
              <!-- Giá -->
              <div class="text-end fw-medium small text-dark">
                {{ (item.price * item.quantity).toLocaleString('vi-VN') }}đ
              </div>
            </div>
          </div>

          <!-- Nhập mã giảm giá -->
          <div class="d-flex gap-2 mb-4 pb-4 border-bottom border-secondary border-opacity-25">
            <input type="text" class="form-control border-light-subtle shadow-none py-2 px-3 focus-brand" placeholder="Nhập mã giảm giá" v-model="discountCode">
            <button class="btn btn-secondary px-4 fw-medium text-nowrap" type="button" :class="{'btn-brand border-brand': discountCode}" @click="applyDiscount">Áp dụng</button>
          </div>

          <!-- Tính tiền -->
          <div class="d-flex justify-content-between align-items-center mb-2 small text-muted">
            <span>Tạm tính</span>
            <span class="text-dark fw-medium">{{ subTotal.toLocaleString('vi-VN') }}đ</span>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-4 small text-muted">
            <span>Phí vận chuyển</span>
            <span class="text-dark fw-medium">{{ isShippingReady ? (shippingFee === 0 ? 'Miễn phí' : shippingFee.toLocaleString('vi-VN') + 'đ') : '-' }}</span>
          </div>
          
          <div class="d-flex justify-content-between align-items-center mb-4">
            <span class="text-dark fw-bold fs-5">Tổng cộng</span>
            <!-- Thay đổi màu sắc tổng tiền sang màu cam thương hiệu -->
            <span class="fw-bold fs-4 text-brand">{{ total.toLocaleString('vi-VN') }}đ</span>
          </div>

          <!-- Nút Action Mobile (Dưới cùng) -->
          <div class="d-flex justify-content-between align-items-center mt-5">
            <RouterLink to="/cart" class="text-decoration-none text-brand small fw-medium d-none d-sm-block hover-opacity">
              <i class="fa-solid fa-angle-left me-1"></i> Quay về giỏ hàng
            </RouterLink>
            <!-- Thay đổi màu sắc nút Đặt Hàng sang màu cam thương hiệu -->
            <RouterLink :to="{ name: 'checkoutSuccess'}" class="btn btn-brand px-5 py-3 fw-bold rounded-2 flex-grow-1 flex-sm-grow-0">
              ĐẶT HÀNG
            </RouterLink>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

// --- DỮ LIỆU GIỎ HÀNG ---
const cartItems = ref([
  {
    id: 1,
    name: 'Tủ chậu bo tròn kèm tủ gương thông minh (Giả lập SP Công nghệ)',
    price: 9200000,
    quantity: 1,
    imageAlt: 'SP 1'
  }
])

// --- LOGIC TÀI KHOẢN & ĐỊA CHỈ ---
// BIẾN NÀY DÙNG ĐỂ TEST: Đổi thành true để xem giao diện chọn địa chỉ có sẵn, false để tự nhập tay
const isLoggedIn = ref(true) 

const savedAddresses = ref([
  { id: 1, label: 'Nhà riêng', fullAddress: '123 Nguyễn Văn Cừ, TP. BMT' },
  { id: 2, label: 'Công ty', fullAddress: '456 Lê Duẩn, TP. BMT' }
])
// Mặc định chọn địa chỉ đầu tiên nếu có, không thì set 'new'
const selectedAddressId = ref(isLoggedIn.value && savedAddresses.value.length > 0 ? savedAddresses.value[0].id : 'new')


// --- STATE FORM CHECKOUT ---
const checkoutForm = ref({
  fullName: '',
  email: '',
  phone: '',
  address: '',
  province: '',
  district: '',
  ward: '',
  note: '',
  paymentMethod: 'COD'
})

// --- TÍCH HỢP API TỈNH/THÀNH PHỐ VIỆT NAM ---
const provinces = ref([])
const districts = ref([])
const wards = ref([])

onMounted(async () => {
  // Tải danh sách 63 tỉnh thành mới nhất từ API công khai
  try {
    const res = await fetch('https://provinces.open-api.vn/api/?depth=3')
    const data = await res.json()
    provinces.value = data
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu tỉnh thành:', error)
  }
})

// Xử lý khi chọn Tỉnh/Thành
const onProvinceChange = () => {
  const selectedProv = provinces.value.find(p => p.name === checkoutForm.value.province)
  districts.value = selectedProv ? selectedProv.districts : []
  
  // Reset lại Quận và Phường
  checkoutForm.value.district = ''
  checkoutForm.value.ward = ''
  wards.value = []
}

// Xử lý khi chọn Quận/Huyện
const onDistrictChange = () => {
  const selectedDist = districts.value.find(d => d.name === checkoutForm.value.district)
  wards.value = selectedDist ? selectedDist.wards : []
  
  // Reset lại Phường
  checkoutForm.value.ward = ''
}


// Kiểm tra xem đã điền đủ thông tin cơ bản để tính ship chưa
const isShippingReady = computed(() => {
  if (isLoggedIn.value && selectedAddressId.value !== 'new') return true;
  return checkoutForm.value.fullName && checkoutForm.value.phone && checkoutForm.value.province;
})

// --- TÍNH TIỀN & MÃ GIẢM GIÁ ---
const discountCode = ref('')
const discountAmount = ref(0)
const shippingFee = ref(40000)

const applyDiscount = () => {
  if (discountCode.value) {
    discountAmount.value = 50000; // Demo giảm 50k
    alert('Đã áp dụng mã giảm giá!');
  }
}

const subTotal = computed(() => cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0))
const total = computed(() => subTotal.value + (isShippingReady.value ? shippingFee.value : 0) - discountAmount.value)

// --- SUBMIT ---
const submitOrder = () => {
  if (!isShippingReady.value) {
    alert("Vui lòng nhập đầy đủ thông tin nhận hàng!");
    return;
  }

  router.push('/');
}
</script>

<style scoped>
.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Ẩn Header Footer mặc định của web nếu layout cha đang bọc (Dùng vh-100 đè lên) */
.checkout-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9999; /* Che lên trên Header/Footer của LayoutUser */
}

/* Colors */
.text-brand { color: #d84727 !important; }
.bg-brand { background-color: #d84727 !important; }
.border-brand { border-color: #d84727 !important; }
.bg-light { background-color: #fafafa !important; } /* Xám rất nhạt cho cột phải */

/* Inputs & Focus */
.form-control::placeholder, .form-select {
  color: #6c757d;
  font-size: 0.9rem;
}
.focus-brand:focus {
  border-color: #d84727 !important;
  box-shadow: 0 0 0 2px rgba(216, 71, 39, 0.15) !important;
}

/* Radio Button */
.brand-radio {
  cursor: pointer;
}
.brand-radio:checked {
  background-color: #d84727;
  border-color: #d84727;
}

/* Nút Brand (Sửa lại cho màu cam) */
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

/* Hover effects */
.hover-bg-light:hover { background-color: #f8f9fa; }
.hover-opacity:hover { opacity: 0.7; }

/* Tiện ích text */
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom Scrollbar cho 2 cột khi nội dung dài */
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
</style>