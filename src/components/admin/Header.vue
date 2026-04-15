<template>
  <header class="topbar bg-white border-bottom border-light-subtle d-flex align-items-center justify-content-between px-3 px-md-4 z-1" style="height: 70px; flex-shrink: 0;">
    
    <div class="d-flex align-items-center gap-3">
      <!-- Nút ẩn/hiện Sidebar -->
      <button class="btn btn-light border-0 d-flex align-items-center justify-content-center text-muted hover-v-blue rounded-3" style="width: 40px; height: 40px; background-color: #f4f6f9;" @click="$emit('toggle')">
        <i class="fa-solid fa-bars fs-5"></i>
      </button>
      
      <!-- Thanh tìm kiếm (Vuestic Style) -->
      <div class="input-group d-none d-md-flex overflow-hidden" style="width: 350px; background-color: #f4f6f9; border-radius: 10px;">
        <span class="input-group-text bg-transparent border-0 text-muted pe-1"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input type="text" class="form-control bg-transparent border-0 shadow-none focus-none" placeholder="Tìm kiếm đơn hàng, sản phẩm...">
      </div>
    </div>

    <!-- Thông báo & Tài khoản -->
    <div class="d-flex align-items-center gap-2 gap-md-3">
      
      <a href="/" target="_blank" class="btn btn-light border-0 rounded-circle d-none d-sm-flex align-items-center justify-content-center text-muted hover-v-blue" style="width: 40px; height: 40px; background-color: #f4f6f9;" title="Xem website">
        <i class="fa-solid fa-globe fs-5"></i>
      </a>

      <!-- Nút Thông báo -->
      <button class="btn btn-light border-0 position-relative rounded-circle d-flex align-items-center justify-content-center text-muted hover-v-blue" style="width: 40px; height: 40px; background-color: #f4f6f9;">
        <i class="fa-regular fa-bell fs-5"></i>
        <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-2 border-white rounded-circle"></span>
      </button>
      
      <div class="vr mx-2 d-none d-sm-block text-secondary opacity-25"></div>
      
      <!-- Box Tài khoản -->
      <div class="d-flex align-items-center gap-2 cursor-pointer hover-opacity">
        <img src="https://ui-avatars.com/api/?name=Admin&background=154ec1&color=fff" alt="Admin" class="rounded-circle shadow-sm" width="38" height="38">
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
defineEmits(['toggle'])
</script>

<style scoped>
.text-v-blue { color: #154ec1 !important; }
.hover-v-blue:hover { color: #154ec1 !important; background-color: #eef2f6 !important; transition: 0.2s; }
.hover-opacity:hover { opacity: 0.8; transition: 0.2s; }
.cursor-pointer { cursor: pointer; }
.focus-none:focus { box-shadow: none; }
.border-light-subtle { border-color: #eef2f6 !important; }
</style>