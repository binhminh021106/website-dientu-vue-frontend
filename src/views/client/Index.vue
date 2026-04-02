<template>
  <div>
    <!-- Banner quảng cáo -->
    <div class="bg-primary text-white text-center py-5 mb-5">
      <div class="container py-4">
        <h1 class="display-4 fw-bold">BinhMinh Store</h1>
        <p class="lead fs-4">Thế giới đồ điện tử chính hãng - Giá tốt nhất thị trường</p>
        <button class="btn btn-light btn-lg mt-3 fw-bold text-primary px-4 rounded-pill shadow-sm">
          Mua sắm ngay hôm nay
        </button>
      </div>
    </div>

    <div class="container mb-5">
      <!-- Section: Danh mục nổi bật -->
      <h2 class="text-center fw-bold mb-4">Danh mục nổi bật</h2>
      <div class="row g-4 mb-5">
        <div class="col-md-3 col-6" v-for="i in 4" :key="'category-'+i">
          <div class="card border-0 shadow-sm text-center py-4 h-100 hover-effect">
            <div class="card-body">
              <!-- Dùng icon hoặc chữ tạm -->
              <h1 class="text-primary mb-3">📱</h1>
              <h5 class="card-title fw-bold mb-0">Danh mục {{ i }}</h5>
            </div>
          </div>
        </div>
      </div>

      <!-- Section: Sản phẩm mới nhất -->
      <h2 class="text-center fw-bold mb-4">Sản phẩm mới nhất</h2>
      <div class="row g-4">
        <!-- Vòng lặp in ra 8 sản phẩm mẫu -->
        <div class="col-lg-3 col-md-4 col-sm-6" v-for="i in 8" :key="'product-'+i">
          <div class="card h-100 shadow-sm border-0 product-card">
            <!-- Khung chứa ảnh sản phẩm tạm thời -->
            <div class="bg-light text-muted d-flex align-items-center justify-content-center border-bottom" style="height: 200px;">
              [Hình ảnh Sản phẩm {{ i }}]
            </div>
            
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-truncate">Sản phẩm Điện tử {{ i }}</h5>
              <p class="card-text text-danger fw-bold fs-5 mb-3">15.000.000 đ</p>
              
              <!-- Nút đẩy xuống dưới cùng -->
              <button class="btn btn-outline-primary mt-auto w-100">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Tạm thời mình chưa gọi API, chỉ dùng HTML/CSS để dựng khung giao diện trước
</script>

<style scoped>
/* Thêm một chút CSS hiệu ứng hover cho đẹp mắt */
.hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}

.product-card {
  transition: transform 0.2s;
}
.product-card:hover {
  transform: scale(1.02);
}
</style>