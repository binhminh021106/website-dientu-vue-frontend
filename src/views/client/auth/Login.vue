<template>
  <div class="login-page roboto-font d-flex align-items-center py-5" style="background-color: #f4f6f9; min-height: 85vh;">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-11">
          
          <!-- Card Container: Split Layout -->
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="row g-0">
              
              <!-- Cột Trái: Tech Branding (Chào mừng trở lại) -->
              <div class="col-md-5 d-none d-md-flex flex-column justify-content-center align-items-center text-white position-relative p-5 tech-panel">
                <div class="position-absolute top-0 start-0 w-100 h-100 overlay-bg"></div>
                <div class="position-relative z-1 text-center w-100">
                  <RouterLink to="/" class="text-decoration-none d-block mb-4">
                    <img src="../../../assets/image/techzone3.png" alt="TechZone Logo" class="img-fluid" style="max-height: 80px;">
                  </RouterLink>
                  
                  <div class="bg-white bg-opacity-10 p-4 rounded-4 mt-4" style="backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.1);">
                    <h4 class="fw-bold mb-3 text-uppercase" style="letter-spacing: 1px;">Chào mừng trở lại!</h4>
                    <p class="mb-4 text-light opacity-75">Đăng nhập để trải nghiệm hệ sinh thái công nghệ và quản lý đơn hàng của bạn.</p>
                    <ul class="list-unstyled text-start d-inline-block fs-6 lh-lg mb-0">
                      <li><i class="fa-solid fa-bolt text-warning me-2"></i> Cập nhật Flash Sale nhanh nhất</li>
                      <li><i class="fa-solid fa-box-open text-warning me-2"></i> Dễ dàng theo dõi đơn hàng</li>
                      <li><i class="fa-solid fa-heart text-warning me-2"></i> Lưu trữ danh sách yêu thích</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Cột Phải: Form Đăng nhập -->
              <div class="col-md-7 p-4 p-sm-5 bg-white">
                <div class="text-center mb-4">
                  <h3 class="fw-bolder text-uppercase" style="color: #d84727; letter-spacing: 1px;">Đăng nhập</h3>
                  <p class="text-muted mb-0">Rất vui được gặp lại bạn</p>
                </div>

                <form @submit.prevent="handleLogin">
                  
                  <!-- Email -->
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control bg-light border-0" id="floatingEmail" placeholder="Email" required>
                    <label for="floatingEmail" class="text-muted"><i class="fa-solid fa-envelope me-1 opacity-75"></i> Email</label>
                  </div>
                  
                  <!-- Mật khẩu -->
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control bg-light border-0" id="floatingPassword" placeholder="Mật khẩu" required>
                    <label for="floatingPassword" class="text-muted"><i class="fa-solid fa-lock me-1 opacity-75"></i> Mật khẩu</label>
                  </div>

                  <!-- Tùy chọn: Ghi nhớ & Quên mật khẩu -->
                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div class="form-check">
                      <input class="form-check-input shadow-none cursor-pointer" type="checkbox" id="rememberMe" style="border-color: #d84727;">
                      <label class="form-check-label text-muted small cursor-pointer" for="rememberMe">
                        Ghi nhớ đăng nhập
                      </label>
                    </div>
                    <a href="#" class="text-decoration-none fw-medium small hover-brand" style="color: #d84727;">Quên mật khẩu?</a>
                  </div>

                  <!-- Nút Đăng nhập -->
                  <button type="submit" class="btn btn-brand w-100 btn-lg rounded-3 shadow-sm" style="padding: 0.75rem 1rem; font-size: 1rem; font-weight: 500;">
                    Đăng nhập <i class="fa-solid fa-right-to-bracket ms-1"></i>
                  </button>
                </form>

                <div class="position-relative text-center mb-4 mt-4 pt-2">
                  <hr class="text-muted opacity-25">
                  <span class="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small" style="font-size: 0.8rem;">Hoặc đăng nhập bằng</span>
                </div>

                <!-- Social Login Buttons -->
                <div class="row g-3 mb-4">
                  <div class="col-sm-6">
                    <button type="button" class="btn w-100 d-flex align-items-center justify-content-center gap-2 border shadow-sm btn-social bg-white text-dark" style="font-weight: 500;">
                      <!-- Màu Facebook chuẩn -->
                      <i class="fa-brands fa-facebook fs-5" style="color: #1877F2;"></i> Facebook
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button type="button" class="btn w-100 d-flex align-items-center justify-content-center gap-2 border shadow-sm btn-social bg-white text-dark" style="font-weight: 500;">
                      <!-- SVG Google chuẩn -->
                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" width="18" height="18"> Google
                    </button>
                  </div>
                </div>

                <div class="text-center mt-4 pt-2 border-top">
                  <span class="text-muted" style="font-size: 0.95rem;">Chưa có tài khoản? </span>
                  <RouterLink :to="{name: 'register'}" class="text-decoration-none fw-medium hover-brand" style="color: #d84727;">Đăng ký ngay</RouterLink>
                </div>

              </div>
              <!-- End Cột Phải -->
              
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const handleLogin = () => {
  console.log('Đang xử lý đăng nhập...')
}
</script>

<style scoped>
.roboto-font {
  font-family: 'Roboto', sans-serif;
}

.text-brand { color: #d84727 !important; }
.hover-brand:hover { color: #b8361b !important; text-decoration: underline !important;}
.cursor-pointer { cursor: pointer; }

/* Tech Panel Left Side - Tương tự Register nhưng có thể dùng ảnh khác nếu muốn */
.tech-panel {
  background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80') center/cover no-repeat;
  position: relative;
}
.overlay-bg {
  /* Lớp phủ gradient đen nhám pha chút đỏ cam cho đúng tông web */
  background: linear-gradient(135deg, rgba(33, 37, 41, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%);
}

/* Floating Labels Customization */
.form-floating > .form-control {
  border-radius: 8px;
}
.form-floating > .form-control:focus {
  box-shadow: 0 0 0 3px rgba(216, 71, 39, 0.15);
  background-color: #ffffff !important;
  border: 1px solid #d84727 !important;
}
.form-floating > label {
  padding-left: 1.2rem;
}

/* Checkbox Custom */
.form-check-input:checked {
  background-color: #d84727;
  border-color: #d84727;
}

/* Buttons */
.btn-brand {
  background-color: #d84727 !important;
  color: white !important;
  border: none;
  transition: all 0.3s ease;
}
.btn-brand:hover {
  background-color: #b8361b !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(216, 71, 39, 0.25) !important;
}

.btn-social {
  transition: all 0.2s ease;
}
.btn-social:hover {
  background-color: #f8f9fa !important;
  transform: translateY(-2px);
}
</style>