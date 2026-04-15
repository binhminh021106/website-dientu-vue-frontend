<template>
  <div class="admin-layout roboto-font vh-100 vw-100 overflow-hidden d-flex" style="background-color: #f4f6f9;">
    
    <!-- Sidebar -->
    <AdminSidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- Main Wrapper -->
    <div class="main-wrapper flex-grow-1 d-flex flex-column h-100 overflow-hidden w-100 transition-all">
      
      <!-- Header -->
      <AdminHeader @toggle="toggleSidebar" />

      <!-- Nội dung thay đổi động (Dashboard, Sản phẩm...) -->
      <main class="flex-grow-1 overflow-auto p-3 p-md-4 custom-scrollbar">
        <RouterView />
      </main>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'

// Import các component con
import AdminSidebar from '@/components/admin/Sidebar.vue'
import AdminHeader from '@/components/admin/Header.vue'

// State quản lý Sidebar
const isSidebarOpen = ref(window.innerWidth > 991)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Xử lý responsive tự động
const handleResize = () => {
  if (window.innerWidth > 991) {
    isSidebarOpen.value = true
  } else {
    isSidebarOpen.value = false
  }
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style>
/* CSS Reset & Cấu hình cuộn chung cho Admin */
.admin-layout {
  font-family: 'Roboto', sans-serif;
}
.transition-all {
  transition: all 0.3s ease;
}

/* Scrollbar gọn gàng, tinh tế */
.custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.25); }

/* Class màu xanh dương (Vuestic Blue) dùng chung cho Admin */
.text-v-blue { color: #154ec1 !important; }
.bg-v-blue { background-color: #154ec1 !important; color: white !important; }
</style>