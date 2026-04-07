<template>
  <div class="contact-page roboto-font bg-white min-vh-100 pb-5">
    
    <!-- Banner & Breadcrumb -->
    <section class="page-banner position-relative d-flex align-items-center justify-content-center mb-5">
      <div class="position-absolute w-100 h-100 overlay"></div>
      <div class="container position-relative z-1 text-center text-white mt-4">
        <h2 class="fw-bold mb-3 fs-1 text-shadow">Liên hệ</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white text-decoration-none hover-text-brand">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white-50" aria-current="page">Liên hệ</li>
          </ol>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mb-5">
      <div class="row gx-lg-5 gy-4">
        
        <!-- Cột Trái: Google Map -->
        <div class="col-lg-6">
          <div class="border rounded-2 overflow-hidden h-100" style="min-height: 450px;">
            <!-- Thay iframe src bằng link Google Maps thực tế của cửa hàng -->
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.684499214772!2d108.03824731535567!3d12.668581991054942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171f7d1e8c9b9b9%3A0x802901a1e4a6e8b!2zQnXDtG4gTWEgVGh14buZdCwgxJDhuq9rIEzhuq8sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <!-- Cột Phải: Thông tin & Form Liên hệ (Thiết kế tinh gọn) -->
        <div class="col-lg-6">
          
          <!-- Thông tin cửa hàng -->
          <div class="store-info mb-4">
            <h5 class="fw-bold mb-3">Cửa hàng công nghệ TechZone</h5>
            
            <ul class="list-unstyled text-muted" style="font-size: 0.95rem; line-height: 1.8;">
              <li class="mb-2">
                <i class="fa-solid fa-location-dot me-2 text-dark" style="width: 16px;"></i>
                <strong class="text-dark fw-medium">Địa chỉ:</strong> 123 Đường Chính, TP. Buôn Ma Thuột, Đắk Lắk
              </li>
              <li class="mb-2">
                <i class="fa-solid fa-envelope me-2 text-dark" style="width: 16px;"></i>
                <strong class="text-dark fw-medium">Email:</strong> 
                <a href="mailto:support@techzone.vn" class="text-muted text-decoration-none hover-brand ms-1">support@techzone.vn</a>
              </li>
              <li class="mb-2">
                <i class="fa-solid fa-phone me-2 text-dark" style="width: 16px;"></i>
                <strong class="text-dark fw-medium">Hotline:</strong> 
                <a href="tel:19006750" class="text-muted text-decoration-none hover-brand ms-1">1900 6750</a>
              </li>
            </ul>
          </div>

          <!-- Form Liên hệ -->
          <div class="contact-form">
            <h5 class="fw-bold mb-2">Liên hệ với chúng tôi</h5>
            <p class="text-muted mb-4 small">
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể.
            </p>

            <form @submit.prevent="submitContact">
              <div class="row g-3">
                
                <!-- Họ và tên -->
                <div class="col-12">
                  <input type="text" class="form-control rounded-2 py-2 border-light-subtle" placeholder="Họ và tên" required v-model="formData.name">
                </div>

                <!-- Email -->
                <div class="col-12">
                  <input type="email" class="form-control rounded-2 py-2 border-light-subtle" placeholder="Email" required v-model="formData.email">
                </div>

                <!-- Số điện thoại -->
                <div class="col-12">
                  <input type="tel" class="form-control rounded-2 py-2 border-light-subtle" placeholder="Điện thoại*" required v-model="formData.phone">
                </div>

                <!-- Nội dung -->
                <div class="col-12">
                  <textarea class="form-control rounded-2 py-2 border-light-subtle" placeholder="Nội dung" rows="4" required v-model="formData.message"></textarea>
                </div>

                <!-- Nút Gửi -->
                <div class="col-12 mt-3">
                  <button type="submit" class="btn btn-brand px-4 py-2 fw-medium rounded-2">
                    Gửi thông tin
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Quản lý dữ liệu form
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitContact = () => {
  console.log('Đang gửi thông tin liên hệ:', formData.value)
  // Thực hiện API call ở đây...
  
  alert('Cảm ơn bạn! Thông tin liên hệ đã được gửi thành công.')
  // Reset form
  formData.value = { name: '', email: '', phone: '', message: '' }
}
</script>

<style scoped>
.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Biến màu thương hiệu */
.text-brand { color: #d84727 !important; }
.bg-brand { background-color: #d84727 !important; }
.hover-brand:hover { color: #d84727 !important; transition: 0.2s ease; }

/* Banner Styling */
.page-banner {
  height: 250px;
  background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
}
.overlay {
  background-color: rgba(17, 24, 39, 0.7); /* Lớp phủ mờ */
}
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}
.hover-text-brand:hover {
  color: #d84727 !important;
  transition: color 0.2s ease;
}

/* Form Inputs */
.form-control::placeholder {
  color: #9ca3af;
  font-size: 0.9rem;
}
.form-control:focus {
  box-shadow: 0 0 0 2px rgba(216, 71, 39, 0.15);
  border-color: #d84727 !important;
}
.border-light-subtle {
  border-color: #e5e7eb !important;
}

/* Button Submit */
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
</style>