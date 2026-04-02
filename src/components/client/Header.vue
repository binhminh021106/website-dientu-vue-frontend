<template>
  <!-- Navbar Bootstrap cho Khách hàng -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">BinhMinh Store</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Trang chủ</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sản phẩm</a>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link btn btn-outline-light ms-2" to="/login">Đăng nhập</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>