<template>
  <div class="dashboard-page pb-4">
    
    <div class="d-flex justify-content-between align-items-end mb-4">
      <div>
        <h4 class="fw-bold mb-1 text-dark">Tổng quan hệ thống</h4>
        <p class="text-muted mb-0 small">Theo dõi hoạt động kinh doanh và trạng thái cửa hàng</p>
      </div>
      <div class="d-none d-sm-block">
        <button class="btn bg-v-blue text-white fw-medium px-4 py-2 rounded-3 shadow-sm d-flex align-items-center gap-2 btn-hover">
          <i class="fa-solid fa-download"></i> Tải báo cáo
        </button>
      </div>
    </div>

    <!-- 4 THẺ THỐNG KÊ (VUESTIC STYLE) -->
    <div class="row g-4 mb-4">
      
      <div class="col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm rounded-4 h-100 stat-card">
          <div class="card-body p-4 d-flex align-items-center gap-3">
            <div class="icon-box bg-blue-light text-v-blue rounded-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 55px; height: 55px;">
              <i class="fa-solid fa-wallet fs-4"></i>
            </div>
            <div>
              <p class="text-muted mb-1 fw-medium" style="font-size: 0.9rem;">Tổng doanh thu</p>
              <h4 class="fw-bold text-dark mb-0">125.400.000đ</h4>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm rounded-4 h-100 stat-card">
          <div class="card-body p-4 d-flex align-items-center gap-3">
            <div class="icon-box bg-green-light text-success rounded-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 55px; height: 55px;">
              <i class="fa-solid fa-cart-arrow-down fs-4"></i>
            </div>
            <div>
              <p class="text-muted mb-1 fw-medium" style="font-size: 0.9rem;">Đơn hàng mới</p>
              <h4 class="fw-bold text-dark mb-0">45</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm rounded-4 h-100 stat-card">
          <div class="card-body p-4 d-flex align-items-center gap-3">
            <div class="icon-box bg-orange-light text-warning rounded-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 55px; height: 55px;">
              <i class="fa-solid fa-users fs-4"></i>
            </div>
            <div>
              <p class="text-muted mb-1 fw-medium" style="font-size: 0.9rem;">Khách hàng</p>
              <h4 class="fw-bold text-dark mb-0">1,240</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-xl-3">
        <div class="card border-0 shadow-sm rounded-4 h-100 stat-card">
          <div class="card-body p-4 d-flex align-items-center gap-3">
            <div class="icon-box bg-purple-light text-purple rounded-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 55px; height: 55px;">
              <i class="fa-solid fa-boxes-stacked fs-4"></i>
            </div>
            <div>
              <p class="text-muted mb-1 fw-medium" style="font-size: 0.9rem;">Sản phẩm</p>
              <h4 class="fw-bold text-dark mb-0">342</h4>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- KHU VỰC BẢNG & BIỂU ĐỒ -->
    <div class="row g-4">
      
      <!-- Bảng Đơn hàng gần đây -->
      <div class="col-xl-8">
        <div class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-header bg-white border-bottom border-light-subtle py-3 px-4 d-flex justify-content-between align-items-center rounded-top-4">
            <h6 class="fw-bold text-dark mb-0">Đơn hàng gần đây</h6>
            <a href="#" class="text-decoration-none small text-v-blue fw-medium">Xem tất cả <i class="fa-solid fa-angle-right ms-1"></i></a>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0 text-nowrap">
                <thead class="text-muted small text-uppercase" style="background-color: #f8fafc;">
                  <tr>
                    <th class="ps-4 fw-bold py-3 border-0">Mã đơn</th>
                    <th class="fw-bold py-3 border-0">Khách hàng</th>
                    <th class="fw-bold py-3 border-0">Ngày đặt</th>
                    <th class="fw-bold py-3 text-end border-0">Tổng tiền</th>
                    <th class="fw-bold py-3 text-center border-0">Trạng thái</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr v-for="order in recentOrders" :key="order.id">
                    <td class="ps-4 fw-bold text-dark border-light-subtle">
                      <a href="#" class="text-decoration-none text-v-blue">#{{ order.id }}</a>
                    </td>
                    <td class="border-light-subtle">
                      <div class="d-flex align-items-center gap-3">
                        <div class="rounded-circle bg-light text-muted d-flex align-items-center justify-content-center fw-bold shadow-sm" style="width: 35px; height: 35px; font-size: 0.85rem;">
                          {{ order.customer.charAt(0) }}
                        </div>
                        <span class="fw-medium text-dark">{{ order.customer }}</span>
                      </div>
                    </td>
                    <td class="text-muted small border-light-subtle">{{ order.date }}</td>
                    <td class="text-end fw-medium text-dark border-light-subtle">{{ order.total.toLocaleString('vi-VN') }}đ</td>
                    <td class="text-center border-light-subtle">
                      <span class="badge fw-medium px-3 py-2 rounded-pill" :class="getStatusClass(order.status)">
                        {{ order.status }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Khu vực Sản phẩm bán chạy (Cột nhỏ bên phải) -->
      <div class="col-xl-4">
        <div class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-header bg-white border-bottom border-light-subtle py-3 px-4 rounded-top-4">
            <h6 class="fw-bold text-dark mb-0">Sản phẩm bán chạy</h6>
          </div>
          <div class="card-body px-4 py-2">
            
            <div class="d-flex align-items-center gap-3 py-3 border-bottom border-light-subtle">
              <div class="bg-light rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 60px; height: 60px;">
                <i class="fa-solid fa-mobile-screen-button text-muted fs-4"></i>
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <h6 class="fw-bold mb-1 text-dark text-truncate" style="font-size: 0.95rem;">iPhone 15 Pro Max</h6>
                <p class="mb-0 text-muted small">Đã bán: <span class="fw-bold text-v-blue">142</span></p>
              </div>
            </div>

            <div class="d-flex align-items-center gap-3 py-3 border-bottom border-light-subtle">
              <div class="bg-light rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 60px; height: 60px;">
                <i class="fa-solid fa-laptop text-muted fs-4"></i>
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <h6 class="fw-bold mb-1 text-dark text-truncate" style="font-size: 0.95rem;">MacBook Air M2</h6>
                <p class="mb-0 text-muted small">Đã bán: <span class="fw-bold text-v-blue">98</span></p>
              </div>
            </div>

            <div class="d-flex align-items-center gap-3 py-3">
              <div class="bg-light rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 60px; height: 60px;">
                <i class="fa-solid fa-headphones text-muted fs-4"></i>
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <h6 class="fw-bold mb-1 text-dark text-truncate" style="font-size: 0.95rem;">AirPods Pro 2</h6>
                <p class="mb-0 text-muted small">Đã bán: <span class="fw-bold text-v-blue">215</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const recentOrders = ref([
  { id: 'TZ1045', customer: 'Nguyễn Văn A', date: '07/04/2026', total: 32500000, status: 'Hoàn thành' },
  { id: 'TZ1044', customer: 'Trần Thị B', date: '06/04/2026', total: 4990000, status: 'Đang xử lý' },
  { id: 'TZ1043', customer: 'Lê Hoàng C', date: '06/04/2026', total: 10500000, status: 'Chờ thanh toán' },
  { id: 'TZ1042', customer: 'Phạm Văn D', date: '05/04/2026', total: 29990000, status: 'Đã hủy' },
  { id: 'TZ1041', customer: 'Hoàng Thị E', date: '04/04/2026', total: 850000, status: 'Hoàn thành' },
])

const getStatusClass = (status) => {
  switch (status) {
    case 'Hoàn thành': return 'bg-green-light text-success'
    case 'Đang xử lý': return 'bg-blue-light text-v-blue'
    case 'Chờ thanh toán': return 'bg-orange-light text-warning'
    case 'Đã hủy': return 'bg-danger bg-opacity-10 text-danger'
    default: return 'bg-secondary bg-opacity-10 text-secondary'
  }
}
</script>

<style scoped>
/* Màu sắc Vuestic Theme */
.text-v-blue { color: #154ec1 !important; }
.bg-v-blue { background-color: #154ec1 !important; }
.btn-hover:hover { background-color: #113f9c !important; transform: translateY(-2px); transition: 0.2s; }

/* Icon Box Pastel Colors */
.bg-blue-light { background-color: #eef5ff; }
.bg-green-light { background-color: #eefcf0; }
.text-success { color: #3d9209 !important; }
.bg-orange-light { background-color: #fff8e5; }
.text-warning { color: #f59e0b !important; }
.bg-purple-light { background-color: #f5f0ff; }
.text-purple { color: #8b5cf6 !important; }

.border-light-subtle { border-color: #eef2f6 !important; }

/* Card Animations */
.stat-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.05) !important;
}

/* Table Hover Effect */
.table-hover tbody tr:hover {
  background-color: #f8fafc;
}
</style>