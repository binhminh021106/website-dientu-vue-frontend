<template>
  <header class="topbar bg-white shadow-sm d-flex align-items-center justify-content-between px-3 px-md-4" style="height: 70px; flex-shrink: 0;">
    
    <div class="d-flex align-items-center gap-3">
      <!-- Nút ẩn/hiện Sidebar -->
      <button class="btn btn-light border-0 d-flex align-items-center justify-content-center text-muted hover-brand" style="width: 40px; height: 40px;" @click="$emit('toggle')">
        <i class="fa-solid fa-bars fs-5"></i>
      </button>
      
      <!-- Thanh tìm kiếm -->
      <div class="input-group d-none d-lg-flex" style="width: 300px;">
        <span class="input-group-text bg-light border-0 text-muted pe-0"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input type="text" class="form-control bg-light border-0 shadow-none focus-none" placeholder="Tìm kiếm đơn hàng, sản phẩm...">
      </div>
    </div>

    <!-- Thông báo & Tài khoản -->
    <div class="d-flex align-items-center gap-2 gap-md-3">
      
      <!-- Icon Website (Chuyển ra ngoài xem web) -->
      <a href="/" target="_blank" class="btn btn-light border-0 rounded-circle d-none d-sm-flex align-items-center justify-content-center text-muted hover-brand" style="width: 40px; height: 40px;" title="Xem website">
        <i class="fa-solid fa-globe fs-5"></i>
      </a>

      <!-- Nút Thông báo -->
      <button class="btn btn-light border-0 position-relative rounded-circle d-flex align-items-center justify-content-center text-muted hover-brand" style="width: 40px; height: 40px;">
        <i class="fa-regular fa-bell fs-5"></i>
        <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
      </button>
      
      <div class="vr mx-1 d-none d-sm-block text-secondary"></div>
      
      <!-- Box Tài khoản -->
      <div class="d-flex align-items-center gap-2 cursor-pointer dropdown-toggle-wrapper hover-opacity">
        <img src="https://ui-avatars.com/api/?name=Admin&background=d84727&color=fff" alt="Admin" class="rounded-circle" width="38" height="38">
        <div class="d-none d-md-block text-end lh-sm">
          <span class="d-block fw-bold text-dark" style="font-size: 0.9rem;">Quản trị viên</span>
          <small class="text-muted" style="font-size: 0.75rem;">admin@techzone.vn</small>
        </div>
        <i class="fa-solid fa-angle-down text-muted small d-none d-sm-block ms-1"></i>
      </div>
    </div>

  </header>
</template>

<script setup>
// Gửi tín hiệu toggle cho Layout cha xử lý
defineEmits(['toggle'])
</script>

<style scoped>
.text-brand { color: #d84727 !important; }
.hover-brand:hover { color: #d84727 !important; transition: 0.2s; }
.hover-opacity:hover { opacity: 0.8; transition: 0.2s; }
.cursor-pointer { cursor: pointer; }
.focus-none:focus { box-shadow: none; }
</style>