<template>
  <div>
    <!-- Gọi component Header -->
    <ClientHeader />

    <!-- Nơi chứa nội dung các trang con (Trang chủ, Chi tiết SP...) -->
    <main style="min-height: 80vh;">
      <RouterView />
    </main>

    <!-- Gọi component Footer -->
    <ClientFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import ClientHeader from '../components/client/Header.vue'
import ClientFooter from '../components/client/Footer.vue'
</script>