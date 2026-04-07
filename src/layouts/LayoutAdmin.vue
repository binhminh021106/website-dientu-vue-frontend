<template>
  <div class="admin-layout roboto-font vh-100 vw-100 overflow-hidden d-flex bg-light">
    
    <!-- Nhúng Component Sidebar bên trái -->
    <!-- Truyền trạng thái isOpen và bắt sự kiện close từ mobile -->
    <Sidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- Khu vực hiển thị bên phải -->
    <div class="main-wrapper flex-grow-1 d-flex flex-column h-100 overflow-hidden w-100">
      
      <!-- Nhúng Component Header -->
      <Header @toggle="toggleSidebar" />

      <!-- Nội dung chính (Thay đổi động theo URL bằng RouterView) -->
      <main class="flex-grow-1 overflow-auto p-3 p-md-4 custom-scrollbar">
        <RouterView />
      </main>

      <!-- Nhúng Component Footer -->
      <Footer />
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import 3 components vừa tạo
import Sidebar from '@/components/admin/Sidebar.vue'
import Header from '@/components/admin/Header.vue'
import Footer from '@/components/admin/Footer.vue'

// State quản lý việc ẩn/hiện Sidebar
// Mặc định: Mở trên PC (>991px), đóng trên Mobile/Tablet
const isSidebarOpen = ref(window.innerWidth > 991)

// Hàm xử lý khi bấm nút Hamburger trên Header
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Xử lý tự động đóng/mở Sidebar khi người dùng kéo giãn kích thước màn hình
const handleResize = () => {
  if (window.innerWidth > 991) {
    isSidebarOpen.value = true
  } else {
    isSidebarOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

.roboto-font {
  font-family: 'Roboto', sans-serif;
}
.bg-light {
  background-color: #f4f6f9 !important;
}

/* Custom Scrollbar cho Main Content */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent; 
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.1); 
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.2); 
}
</style>