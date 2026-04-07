<template>
  <div class="news-page roboto-font bg-white min-vh-100 pb-5">
    
    <!-- Banner & Breadcrumb -->
    <section class="page-banner position-relative d-flex align-items-center justify-content-center mb-5">
      <div class="position-absolute w-100 h-100 overlay"></div>
      <div class="container position-relative z-1 text-center text-white mt-4">
        <h2 class="fw-bold mb-3 fs-1 text-shadow">Tin tức</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-white text-decoration-none hover-text-brand">Trang chủ</RouterLink>
            </li>
            <li class="breadcrumb-item active text-white-50" aria-current="page">Tin tức</li>
          </ol>
        </nav>
      </div>
    </section>

    <div class="container">
      <div class="row gy-5">
        
        <!-- Cột Trái: Danh sách bài viết chính (Chiếm 8 phần) -->
        <div class="col-lg-8 pe-lg-4">
          <div class="row g-4">
            <!-- Vòng lặp in ra các bài viết -->
            <div class="col-md-6" v-for="article in articles" :key="article.id">
              <div class="card border border-light shadow-sm h-100 article-card rounded-3 overflow-hidden">
                <!-- Ảnh bài viết -->
                <div class="overflow-hidden position-relative bg-light" style="height: 220px;">
                  <div class="w-100 h-100 d-flex align-items-center justify-content-center text-muted img-wrapper transition-transform">
                    <span></span>
                  </div>
                </div>
                
                <!-- Nội dung bài viết -->
                <div class="card-body p-4 d-flex flex-column">
                  <div class="d-flex align-items-center text-muted mb-2 small" style="font-size: 0.85rem;">
                    <span class="me-3"><i class="fa-solid fa-user me-1"></i> {{ article.author }}</span>
                    <span><i class="fa-regular fa-clock me-1"></i> {{ article.date }}</span>
                  </div>
                  
                  <h5 class="card-title fw-bold mb-3 article-title text-truncate-2 lh-base">
                    <a href="#" class="text-dark text-decoration-none hover-brand">{{ article.title }}</a>
                  </h5>
                  
                  <p class="card-text text-muted mb-4 text-truncate-3" style="font-size: 0.95rem; line-height: 1.6;">
                    {{ article.excerpt }}
                  </p>
                  
                  <div class="mt-auto">
                    <a href="#" class="text-brand fw-bold text-decoration-none read-more-link" style="font-size: 0.9rem;">
                      ĐỌC TIẾP <i class="fa-solid fa-arrow-right-long ms-1 fs-6 align-middle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Phân trang (Pagination) -->
          <nav aria-label="Page navigation" class="mt-5 pt-3">
            <ul class="pagination justify-content-center justify-content-lg-start mb-0 gap-2">
              <li class="page-item disabled">
                <a class="page-link border-0 text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center" href="#" tabindex="-1" style="width: 40px; height: 40px;"><i class="fa-solid fa-angle-left"></i></a>
              </li>
              <li class="page-item active"><a class="page-link border-0 fw-bold rounded-circle d-flex align-items-center justify-content-center" href="#" style="width: 40px; height: 40px;">1</a></li>
              <li class="page-item"><a class="page-link border-0 text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center hover-bg-light" href="#" style="width: 40px; height: 40px;">2</a></li>
              <li class="page-item"><a class="page-link border-0 text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center hover-bg-light" href="#" style="width: 40px; height: 40px;">3</a></li>
              <li class="page-item">
                <a class="page-link border-0 text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center hover-bg-light" href="#" style="width: 40px; height: 40px;"><i class="fa-solid fa-angle-right"></i></a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Cột Phải: Sidebar (Chiếm 4 phần) -->
        <div class="col-lg-4">
          
          <!-- Widget: Danh mục tin tức -->
          <div class="sidebar-widget mb-5">
            <h5 class="widget-title fw-bolder text-uppercase mb-4 position-relative pb-2">
              Danh mục tin tức
              <span class="position-absolute bottom-0 start-0 bg-brand" style="height: 3px; width: 50px;"></span>
            </h5>
            <ul class="list-group list-group-flush border-top border-bottom">
              <li class="list-group-item py-3 px-0 border-light bg-transparent" v-for="(cat, index) in categories" :key="index">
                <a href="#" class="text-decoration-none text-dark fw-medium d-flex justify-content-between align-items-center hover-brand">
                  {{ cat.name }}
                  <i class="fa-solid fa-angle-right text-muted small"></i>
                </a>
              </li>
            </ul>
          </div>

          <!-- Widget: Tin tức nổi bật -->
          <div class="sidebar-widget">
            <h5 class="widget-title fw-bolder text-uppercase mb-4 position-relative pb-2">
              Tin tức nổi bật
              <span class="position-absolute bottom-0 start-0 bg-brand" style="height: 3px; width: 50px;"></span>
            </h5>
            <div class="d-flex flex-column gap-4">
              
              <div class="d-flex gap-3 align-items-start featured-news-item group-hover" v-for="news in featuredNews" :key="news.id">
                <div class="flex-shrink-0 bg-light rounded overflow-hidden" style="width: 90px; height: 75px;">
                  <div class="w-100 h-100 d-flex align-items-center justify-content-center text-muted small transition-transform img-wrapper" style="font-size: 0.65rem;">
                    [Ảnh {{ news.imageAlt }}]
                  </div>
                </div>
                <div>
                  <h6 class="fw-bold mb-1 lh-sm text-truncate-2" style="font-size: 0.95rem;">
                    <a href="#" class="text-dark text-decoration-none hover-brand">{{ news.title }}</a>
                  </h6>
                  <small class="text-muted"><i class="fa-regular fa-clock me-1"></i> {{ news.date }}</small>
                </div>
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
import { RouterLink } from 'vue-router'

// --- DỮ LIỆU GIẢ LẬP ĐỂ HIỂN THỊ ---

const articles = ref([
  { 
    id: 1, 
    imageAlt: 'iPhone 15 Review', 
    author: 'TechZone Team', 
    date: '15/11/2026', 
    title: 'Xu hướng lựa chọn điện thoại thông minh năm 2026 có gì khác biệt?', 
    excerpt: 'Thị trường smartphone liên tục có những sự thay đổi lớn, xuất phát từ nhu cầu người dùng, sự phát triển của AI và thiết kế gập ngày càng hoàn thiện.'
  },
  { 
    id: 2, 
    imageAlt: 'Laptop Gaming', 
    author: 'TechZone Team', 
    date: '12/11/2026', 
    title: 'Top 5 Laptop Gaming cấu hình khủng, tản nhiệt mát: Ưu nhược điểm, ứng dụng', 
    excerpt: 'Bạn đang tìm kiếm một cỗ máy chiến game thực thụ? Bài viết này sẽ phân tích chi tiết ưu nhược điểm của các dòng laptop gaming hot nhất hiện nay.'
  },
  { 
    id: 3, 
    imageAlt: 'Tai nghe Bluetooth', 
    author: 'TechZone Team', 
    date: '08/11/2026', 
    title: '[Giải đáp] Có nên mua tai nghe Bluetooth chống ồn chủ động (ANC) không?', 
    excerpt: 'Tai nghe ANC không quá phổ biến ở phân khúc giá rẻ nhưng đang được khá nhiều người dùng quan tâm vì khả năng đem lại không gian làm việc tĩnh lặng.'
  },
  { 
    id: 4, 
    imageAlt: 'Đồng hồ thông minh', 
    author: 'TechZone Team', 
    date: '05/11/2026', 
    title: 'Smartwatch đo sức khỏe loại nhỏ - giải pháp theo dõi thể trạng hiệu quả', 
    excerpt: 'Đồng hồ thông minh với kích thước nhỏ gọn nhưng tích hợp đầy đủ cảm biến nhịp tim, SpO2 đa dạng, mọi mẫu mã đang trở thành xu hướng.'
  },
  { 
    id: 5, 
    imageAlt: 'Bàn phím cơ', 
    author: 'TechZone Team', 
    date: '02/11/2026', 
    title: 'Điểm danh những mẫu Bàn phím cơ Custom đẹp nhất mùa hè 2026', 
    excerpt: 'Thị trường phím cơ luôn hướng tới sự đổi mới và tinh tế trong từng thiết kế. Gắn liền với tiêu chí "Chất lượng âm thanh và cảm giác gõ".'
  },
  { 
    id: 6, 
    imageAlt: 'Màn hình máy tính', 
    author: 'TechZone Team', 
    date: '28/10/2026', 
    title: 'Cách chọn kích thước màn hình máy tính phù hợp với không gian làm việc', 
    excerpt: 'Bạn muốn mua một chiếc màn hình lớn để làm việc đồ họa hoặc giải trí? Tuy nhiên bạn lại không biết chính xác khoảng cách ngồi bao nhiêu là hợp lý.'
  }
])

const categories = ref([
  { name: 'Đánh giá sản phẩm' },
  { name: 'Thủ thuật công nghệ' },
  { name: 'Tin khuyến mãi' },
  { name: 'Sự kiện công nghệ' },
  { name: 'Góc tư vấn' }
])

const featuredNews = ref([
  { id: 101, imageAlt: 'SP 1', title: 'Xu hướng lựa chọn điện thoại thông minh năm 2026...', date: '15/11/2026' },
  { id: 102, imageAlt: 'SP 2', title: 'Top 5 Laptop Gaming cấu hình khủng, tản nhiệt mát...', date: '12/11/2026' },
  { id: 103, imageAlt: 'SP 3', title: '[Giải đáp] Có nên mua tai nghe Bluetooth chống ồn...', date: '08/11/2026' },
  { id: 104, imageAlt: 'SP 4', title: 'Smartwatch đo sức khỏe loại nhỏ - giải pháp theo...', date: '05/11/2026' },
  { id: 105, imageAlt: 'SP 5', title: 'Điểm danh những mẫu Bàn phím cơ Custom đẹp...', date: '02/11/2026' }
])
</script>

<style scoped>
.roboto-font {
  font-family: 'Roboto', sans-serif;
}

/* Biến màu thương hiệu */
.text-brand { color: #d84727 !important; }
.bg-brand { background-color: #d84727 !important; }
.hover-brand:hover { color: #d84727 !important; transition: 0.2s ease; }

/* Banner Styling (Dùng hình ảnh không gian làm việc/tech) */
.page-banner {
  height: 250px;
  background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
}
.overlay {
  background-color: rgba(17, 24, 39, 0.7); /* Lớp phủ đen xanh mờ */
}
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}
.hover-text-brand:hover {
  color: #d84727 !important;
  transition: color 0.2s ease;
}

/* Cắt chữ (Truncate) */
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Hiệu ứng Card Bài viết */
.article-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
}

/* Hiệu ứng zoom ảnh khi hover */
.transition-transform {
  transition: transform 0.4s ease;
}
.article-card:hover .img-wrapper,
.group-hover:hover .img-wrapper {
  transform: scale(1.1);
}

/* Nút Đọc tiếp */
.read-more-link {
  display: inline-block;
  transition: transform 0.2s ease;
}
.read-more-link:hover {
  transform: translateX(5px);
}

/* Phân trang (Pagination Custom) */
.page-link {
  color: #333;
}
.page-item.active .page-link {
  background-color: #d84727;
  border-color: #d84727;
  color: white !important;
}
.hover-bg-light:hover {
  background-color: #f8f9fa;
}
.page-item.disabled .page-link {
  background-color: transparent;
  opacity: 0.5;
}

/* Sidebar Widget */
.widget-title {
  letter-spacing: 0.5px;
}
</style>