<template>
  <footer class="bg-dark text-white pt-5 pb-3 mt-5">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6">
          <h3 class="fw-bold mb-3">Tech<span class="text-custom-orange">Zone</span></h3>
          <p class="text-light text-opacity-75 pe-lg-4">
            Cửa hàng trực tuyến cung cấp các sản phẩm công nghệ hiện đại, chất lượng cao với mức giá cạnh tranh nhất thị trường.
          </p>
          <div class="d-flex gap-3 mt-3">
            <a href="#" class="text-white fs-5 hover-orange"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="text-white fs-5 hover-orange"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="text-white fs-5 hover-orange"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="text-white fs-5 hover-orange"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="fw-bold mb-3">Danh mục</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-decoration-none text-light text-opacity-75 hover-orange">Điện thoại</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-light text-opacity-75 hover-orange">Laptop</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-light text-opacity-75 hover-orange">Âm thanh</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-light text-opacity-75 hover-orange">Máy ảnh</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="fw-bold mb-3">Hỗ trợ</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-decoration-none text-light text-opacity-75 hover-orange">Trung tâm trợ giúp</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-light text-opacity-75 hover-orange">Chính sách bảo hành</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-light text-opacity-75 hover-orange">Chính sách đổi trả</a></li>
            <li class="mb-2"><a href="#" class="text-decoration-none text-light text-opacity-75 hover-orange">Vận chuyển</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="fw-bold mb-3">Đăng ký nhận tin</h5>
          <p class="text-light text-opacity-75">Nhận thông tin ưu đãi mới nhất từ chúng tôi.</p>
          <div class="input-group mb-3">
            <input type="text" class="form-control shadow-none" placeholder="Email của bạn">
            <button class="btn bg-custom-orange text-white fw-bold px-4" type="button">Gửi</button>
          </div>
        </div>
      </div>
      <hr class="border-light border-opacity-25 my-4">
      <div class="text-center text-light text-opacity-50" style="font-size: 0.9rem;">
        © 2026 TechZone. Bản quyền thuộc về TechZone.
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.text-custom-orange {
  color: #ff6243 !important;
}
.bg-custom-orange {
  background-color: #ff6243 !important;
}
.hover-orange:hover {
  color: #ff6243 !important;
  transition: color 0.2s ease-in-out;
}
</style>