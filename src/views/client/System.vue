<template>
  <div class="system-page roboto-font bg-white min-vh-100 pb-5">
    
    <!-- Banner & Breadcrumb -->
    <section class="page-banner position-relative d-flex align-items-center justify-content-center mb-5">
      <div class="position-absolute w-100 h-100 overlay"></div>
      <div class="container position-relative z-1 text-center text-white mt-4">
        <h2 class="fw-bold mb-3 fs-1 text-shadow">Hệ thống</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white text-decoration-none hover-text-brand">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white-50" aria-current="page">Hệ thống</li>
          </ol>
        </nav>
      </div>
    </section>

    <div class="container mb-5">
      
      <!-- Thanh Highlight (Quy mô hệ thống) -->
      <div class="border border-brand rounded-2 p-3 mb-5 bg-white">
        <div class="row text-center text-md-start gy-3">
          <div class="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start gap-3 border-end-md px-4">
            <div class="icon-circle bg-brand text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style="width: 50px; height: 50px;">
              <i class="fa-solid fa-store fs-5"></i>
            </div>
            <div class="text-start">
              <span class="d-block fw-bold text-dark">Hệ thống 8 cửa hàng</span>
              <small class="text-muted">Trên toàn quốc</small>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start gap-3 border-end-md px-4">
            <div class="icon-circle bg-brand text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style="width: 50px; height: 50px;">
              <i class="fa-solid fa-users fs-5"></i>
            </div>
            <div class="text-start">
              <span class="d-block fw-bold text-dark">Hơn 100 nhân viên</span>
              <small class="text-muted">Để phục vụ quý khách</small>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start gap-3 px-4">
            <div class="icon-circle bg-brand text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style="width: 50px; height: 50px;">
              <i class="fa-regular fa-clock fs-5"></i>
            </div>
            <div class="text-start">
              <span class="d-block fw-bold text-dark">Mở cửa 8-22h</span>
              <small class="text-muted">Cả CN & Lễ tết</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Khu vực Bản đồ và Danh sách -->
      <div class="row gx-lg-4 gy-4">
        
        <!-- Cột Trái: Chọn địa điểm và Danh sách cửa hàng -->
        <div class="col-lg-4">
          
          <!-- Bộ lọc Tỉnh/Thành & Quận/Huyện -->
          <div class="row g-2 mb-3">
            <div class="col-6">
              <select class="form-select bg-brand text-white border-brand form-select-sm py-2 shadow-none cursor-pointer" v-model="selectedProvince">
                <option value="">Chọn tỉnh thành</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Đắk Lắk">Đắk Lắk</option>
              </select>
            </div>
            <div class="col-6">
              <select class="form-select bg-white border-light-subtle form-select-sm py-2 shadow-none cursor-pointer" v-model="selectedDistrict">
                <option value="">Chọn quận/huyện</option>
                <!-- Dữ liệu giả lập, thực tế sẽ map theo Tỉnh/Thành -->
                <option value="Ba Đình">Ba Đình</option>
                <option value="Cầu Giấy">Cầu Giấy</option>
                <option value="Buôn Ma Thuột">Buôn Ma Thuột</option>
              </select>
            </div>
          </div>

          <!-- Danh sách cửa hàng có thanh cuộn -->
          <div class="store-list-container pe-2">
            <div 
              v-for="store in filteredStores" 
              :key="store.id"
              class="store-card border rounded-2 p-3 mb-3 cursor-pointer transition-all"
              :class="activeStoreId === store.id ? 'border-brand bg-light-orange' : 'border-light-subtle bg-white hover-border-brand'"
              @click="selectStore(store)"
            >
              <h6 class="fw-bold mb-2" :class="activeStoreId === store.id ? 'text-brand' : 'text-dark'">
                TechZone {{ store.name }}
              </h6>
              <p class="mb-1 text-muted small lh-base">
                <strong class="text-dark fw-medium">Địa chỉ:</strong> {{ store.address }}
              </p>
              <p class="mb-0 text-muted small">
                <strong class="text-dark fw-medium">Hotline:</strong> 
                <span class="text-brand fw-bold ms-1">{{ store.hotline }}</span>
              </p>
            </div>
            
            <!-- Hiển thị khi không có cửa hàng nào -->
            <div v-if="filteredStores.length === 0" class="text-center py-4 text-muted small">
              Không tìm thấy cửa hàng nào phù hợp.
            </div>
          </div>
        </div>

        <!-- Cột Phải: Google Map -->
        <div class="col-lg-8">
          <div class="border rounded-2 overflow-hidden h-100 shadow-sm" style="min-height: 450px;">
            <iframe 
              :src="activeMapUrl" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

// State bộ lọc
const selectedProvince = ref('')
const selectedDistrict = ref('')

// State cửa hàng đang được chọn để hiển thị bản đồ
const activeStoreId = ref(1)

// Dữ liệu danh sách cửa hàng
const stores = ref([
  {
    id: 1,
    name: 'Hà Nội',
    province: 'Hà Nội',
    district: 'Ba Đình',
    address: 'Tầng 6 - 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội',
    hotline: '(+84)398 454 346',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.926558661605!2d105.81636451533221!3d21.035624485994523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf89bd7%3A0xd94a869d494c04b6!2zMjY2IMSQ4buZaSBD4bqlbiwgTGnhu4V1IEdpYWksIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s'
  },
  {
    id: 2,
    name: 'Cầu Giấy',
    province: 'Hà Nội',
    district: 'Cầu Giấy',
    address: '58 Nguyễn Khánh Toàn, Quan Hoa, Cầu Giấy, Hà Nội',
    hotline: '1900 6750',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.86431934336!2d105.79815041533227!3d21.038114485993217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3a2c0704f1%3A0xcda6b080fb8e49ee!2zNTggTmd1eeG7hW4gS2jDoW5oIFRvw6BuLCBRdWFuIEhvYSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s'
  },
  {
    id: 3,
    name: 'Buôn Ma Thuột',
    province: 'Đắk Lắk',
    district: 'Buôn Ma Thuột',
    address: '123 Đường Chính, TP. Buôn Ma Thuột, Đắk Lắk',
    hotline: '1900 6750',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.684499214772!2d108.03824731535567!3d12.668581991054942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f7d1e8c9b9b9%3A0x802901a1e4a6e8b!2zQnXDtG4gTWEgVGh14buZdCwgxJDhuq9rIEzhuq8sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s'
  }
])

// Computed property để lọc cửa hàng theo combobox
const filteredStores = computed(() => {
  return stores.value.filter(store => {
    const matchProvince = selectedProvince.value === '' || store.province === selectedProvince.value;
    const matchDistrict = selectedDistrict.value === '' || store.district === selectedDistrict.value;
    return matchProvince && matchDistrict;
  })
})

// Tính toán Map URL đang được hiển thị
const activeMapUrl = computed(() => {
  const store = stores.value.find(s => s.id === activeStoreId.value)
  return store ? store.mapUrl : ''
})

// Hàm xử lý khi click vào 1 cửa hàng
const selectStore = (store) => {
  activeStoreId.value = store.id
}
</script>

<style scoped>
.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Biến màu thương hiệu */
.text-brand { color: #d84727 !important; }
.bg-brand { background-color: #d84727 !important; }
.border-brand { border-color: #d84727 !important; }

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

/* Thanh Highlight CSS */
@media (min-width: 768px) {
  .border-end-md {
    border-right: 1px solid #dee2e6;
  }
}

/* Form Select Styling */
.form-select:focus {
  box-shadow: none;
  border-color: #d84727;
}
.cursor-pointer {
  cursor: pointer;
}

/* Styling cho danh sách cửa hàng */
.store-list-container {
  max-height: 450px;
  overflow-y: auto;
}

/* Tùy chỉnh Scrollbar cho đẹp */
.store-list-container::-webkit-scrollbar {
  width: 6px;
}
.store-list-container::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 10px;
}
.store-list-container::-webkit-scrollbar-thumb {
  background: #dcdcdc; 
  border-radius: 10px;
}
.store-list-container::-webkit-scrollbar-thumb:hover {
  background: #b5b5b5; 
}

/* Hiệu ứng Store Card */
.transition-all {
  transition: all 0.2s ease;
}
.hover-border-brand:hover {
  border-color: #d84727 !important;
}
.bg-light-orange {
  background-color: rgba(216, 71, 39, 0.04) !important;
}
</style>