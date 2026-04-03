<template>
  <div class="d-flex flex-column min-vh-100 bg-white">
    <!-- Header -->
    <ClientHeader />

    <!-- Main Content -->
    <main class="flex-grow-1">
      <RouterView />
    </main>

    <!-- Footer -->
    <ClientFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import ClientHeader from '../components/client/Header.vue'
import ClientFooter from '../components/client/Footer.vue'
</script>

<style>
/* Reset cơ bản cho toàn trang client */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #ffffff;
  color: #333333;
}
</style>