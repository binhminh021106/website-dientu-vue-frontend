<template>
  <div class="home-page roboto-font">
    
    <!-- 1. HERO BANNER SLIDER (Đã chuyển sang dùng v-for để hứng Data từ DB) -->
    <!-- Đã sửa data-bs-interval="3000" để tự chuyển sau 3s -->
    <div id="heroSlider" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      
      <!-- Chấm tròn chuyển slide -->
      <div class="carousel-indicators">
        <button 
          v-for="(slide, index) in heroSlides" 
          :key="'indicator-' + slide.id"
          type="button" 
          data-bs-target="#heroSlider" 
          :data-bs-slide-to="index" 
          :class="{ active: index === 0 }" 
          :aria-current="index === 0 ? 'true' : undefined" 
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>

      <!-- Nội dung các Slide (Đổ dữ liệu từ mảng heroSlides) -->
      <div class="carousel-inner">
        
        <div 
          v-for="(slide, index) in heroSlides" 
          :key="'slide-' + slide.id"
          class="carousel-item" 
          :class="{ active: index === 0 }"
        >
          <section class="hero-banner position-relative d-flex align-items-center justify-content-center" style="min-height: 500px; background-color: #f8f9fa;">
            <!-- Hình nền động -->
            <div class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden text-muted" :style="{ background: slide.bgGradient, opacity: slide.bgOpacity }">
               <span class="fs-4 opacity-50">[Ảnh nền Slider {{ index + 1 }}: {{ slide.imageAlt }}]</span>
            </div>
            
            <div class="container position-relative z-1 text-center text-md-start">
              <div class="row">
                <div class="col-lg-6 col-md-8">
                  <!-- Dữ liệu động: Badge, Tiêu đề, Mô tả, Nút bấm -->
                  <span class="badge mb-3 px-3 py-2 rounded-pill fs-6 fw-normal" :class="slide.badgeClass">{{ slide.badgeText }}</span>
                  
                  <!-- Dùng v-html để render thẻ <br> bên trong tiêu đề -->
                  <h1 class="display-4 fw-bolder text-dark mb-3 lh-sm" style="letter-spacing: -1px;" v-html="slide.titleHtml"></h1>
                  
                  <p class="fs-5 text-secondary mb-4 pe-lg-5 fw-light">
                    {{ slide.description }}
                  </p>
                  
                  <button class="btn btn-lg fw-bold px-5 rounded-0 shadow-sm btn-hover-slide" :class="slide.btnClass">
                    {{ slide.btnText }} <i class="fa-solid ms-2" :class="slide.btnIcon"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>

      <!-- Nút điều hướng Trái/Phải (Sẽ ẩn và chỉ hiện khi Hover vào) -->
      <button class="carousel-control-prev custom-slider-btn prev-btn" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
        <div class="nav-icon-wrapper bg-dark bg-opacity-25 rounded-circle d-flex justify-content-center align-items-center hover-bg-brand">
          <span class="carousel-control-prev-icon" aria-hidden="true" style="width: 1.2rem; height: 1.2rem;"></span>
        </div>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next custom-slider-btn next-btn" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
        <div class="nav-icon-wrapper bg-dark bg-opacity-25 rounded-circle d-flex justify-content-center align-items-center hover-bg-brand">
          <span class="carousel-control-next-icon" aria-hidden="true" style="width: 1.2rem; height: 1.2rem;"></span>
        </div>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- 2. CATEGORIES -->
    <section class="container py-5 mt-3">
      <div class="row g-4">
        <div class="col-lg-3 col-sm-6" v-for="(cat, index) in categories" :key="index">
          <div class="category-card position-relative overflow-hidden group-hover cursor-pointer" style="background-color: #f5f5f5; height: 220px;">
            <div class="img-wrapper w-100 h-100 d-flex align-items-center justify-content-center text-muted transition-transform">
              <span class="small"></span>
            </div>
            <div class="category-info position-absolute bottom-0 w-100 bg-white bg-opacity-75 p-3 text-center backdrop-blur transition-all">
              <h6 class="fw-bold mb-1 text-uppercase">{{ cat.name }}</h6>
              <span class="text-brand fw-medium" style="font-size: 0.85rem;">{{ cat.count }} sản phẩm</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FLASH SALE -->
    <section class="flash-sale-section py-5 my-4" style="background-color: #1a1a1a;">
      <div class="container">
        <div class="row g-4 align-items-center">
          <div class="col-lg-3 text-white">
            <h2 class="fw-bolder fst-italic mb-3 d-flex align-items-center gap-2">
              <i class="fa-solid fa-bolt text-warning"></i> FLASH SALE
            </h2>
            <p class="text-white-50 mb-4">Cơ hội săn deal công nghệ nửa giá duy nhất trong ngày. Nhanh tay kẻo lỡ!</p>
            
            <!-- Countdown Timer Dummy -->
            <div class="d-flex gap-2 mb-4 countdown-timer">
              <div class="bg-brand text-white p-2 rounded text-center" style="width: 50px;">
                <h5 class="fw-bold mb-0">12</h5><small style="font-size: 0.6rem;">GIỜ</small>
              </div>
              <div class="text-white fs-4 fw-bold mt-1">:</div>
              <div class="bg-brand text-white p-2 rounded text-center" style="width: 50px;">
                <h5 class="fw-bold mb-0">45</h5><small style="font-size: 0.6rem;">PHÚT</small>
              </div>
              <div class="text-white fs-4 fw-bold mt-1">:</div>
              <div class="bg-brand text-white p-2 rounded text-center" style="width: 50px;">
                <h5 class="fw-bold mb-0">30</h5><small style="font-size: 0.6rem;">GIÂY</small>
              </div>
            </div>
            
            <a href="#" class="text-warning text-decoration-none fw-bold border-bottom border-warning pb-1 hover-text-white">XEM TẤT CẢ</a>
          </div>

          <div class="col-lg-9">
            <div class="row g-3">
              <div class="col-md-4" v-for="product in flashSaleProducts" :key="product.id">
                <ProductCard :product="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. FEATURED PRODUCTS (Sản phẩm gợi ý) -->
    <section class="container py-5">
      <div class="d-flex justify-content-between align-items-end mb-4 border-bottom pb-2">
        <h3 class="fw-bold text-uppercase mb-0 position-relative pb-2" style="letter-spacing: 0.5px;">
          Sản phẩm gợi ý
          <span class="position-absolute bottom-0 start-0 w-50 bg-brand" style="height: 3px;"></span>
        </h3>
        <div class="d-flex gap-3">
          <a href="#" class="text-dark text-decoration-none fw-medium hover-brand">Điện thoại</a>
          <a href="#" class="text-muted text-decoration-none fw-medium hover-brand">Laptop</a>
          <a href="#" class="text-muted text-decoration-none fw-medium hover-brand">Phụ kiện</a>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-lg-3 col-md-4 col-sm-6" v-for="product in featuredProducts" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
      
      <div class="text-center mt-5">
        <button class="btn btn-outline-dark px-5 py-2 fw-medium rounded-0 hover-bg-brand">XEM THÊM 15 SẢN PHẨM KHÁC</button>
      </div>
    </section>

    <!-- 5. MID BANNER -->
    <section class="container my-5">
      <div class="row g-4">
        <div class="col-md-6">
           <div class="bg-light position-relative overflow-hidden d-flex align-items-center p-4 p-lg-5 h-100" style="background: linear-gradient(to right, #ece9e6, #ffffff);">
              <div class="position-absolute end-0 bottom-0 text-muted opacity-25 p-3"></div>
              <div class="position-relative z-1">
                <span class="text-brand fw-bold mb-2 d-block">MỚI RA MẮT</span>
                <h3 class="fw-bolder mb-3">ÂM THANH<br>ĐỈNH CAO</h3>
                <a href="#" class="text-dark fw-bold text-decoration-none border-bottom border-dark pb-1 hover-brand">MUA NGAY</a>
              </div>
           </div>
        </div>
        <div class="col-md-6">
           <div class="bg-dark text-white position-relative overflow-hidden d-flex align-items-center p-4 p-lg-5 h-100">
              <div class="position-absolute end-0 bottom-0 text-muted opacity-25 p-3"></div>
              <div class="position-relative z-1">
                <span class="text-warning fw-bold mb-2 d-block">GIẢM 20%</span>
                <h3 class="fw-bolder mb-3">SMARTWATCH<br>THẾ HỆ MỚI</h3>
                <a href="#" class="text-white fw-bold text-decoration-none border-bottom border-white pb-1 hover-text-warning">MUA NGAY</a>
              </div>
           </div>
        </div>
      </div>
    </section>

    <!-- 6. TESTIMONIALS (Khách hàng nói gì về chúng tôi) -->
    <section class="py-5" style="background-color: #f9f9f9;">
      <div class="container">
        <h3 class="fw-bold text-uppercase text-center mb-5" style="letter-spacing: 0.5px;">Khách hàng đánh giá</h3>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-5 col-md-6" v-for="review in testimonials" :key="review.id">
            <div class="bg-white p-4 shadow-sm h-100 border-top border-brand border-3">
              <div class="d-flex align-items-center mb-3 gap-3">
                <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white fw-bold" style="width: 50px; height: 50px;">
                  {{ review.name.charAt(0) }}
                </div>
                <div>
                  <h6 class="fw-bold mb-0">{{ review.name }}</h6>
                  <div class="text-warning small mt-1">
                    <i class="fa-solid fa-star" v-for="n in review.stars" :key="n"></i>
                  </div>
                </div>
              </div>
              <p class="text-muted fst-italic mb-0" style="line-height: 1.6;">"{{ review.content }}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. TIN TỨC CÔNG NGHỆ -->
    <section class="container py-5 my-4">
       <h3 class="fw-bold text-uppercase mb-4 position-relative pb-2 text-center" style="letter-spacing: 0.5px;">
         Tin Tức & Đánh Giá
       </h3>
       <div class="row g-4 mt-2">
         <div class="col-lg-4 col-md-6" v-for="article in news" :key="article.id">
           <div class="card border-0 h-100 group-hover cursor-pointer">
             <div class="overflow-hidden" style="height: 200px; background-color: #eee;">
               <div class="w-100 h-100 d-flex align-items-center justify-content-center text-muted transition-transform img-wrapper">
                 <span class="small">[Ảnh {{ article.imageAlt }}]</span>
               </div>
             </div>
             <div class="card-body px-0 pt-3">
               <small class="text-brand fw-bold mb-2 d-block"><i class="fa-regular fa-calendar me-1"></i> {{ article.date }}</small>
               <h5 class="card-title fw-bold hover-brand text-truncate-2">{{ article.title }}</h5>
               <p class="card-text text-muted small text-truncate-3">{{ article.summary }}</p>
               <a href="#" class="text-dark fw-bold text-decoration-none" style="font-size: 0.85rem;">ĐỌC TIẾP <i class="fa-solid fa-angle-right ms-1"></i></a>
             </div>
           </div>
         </div>
       </div>
    </section>

    <!-- 8. THƯƠNG HIỆU (LOGOS) -->
    <section class="border-top py-4">
      <div class="container">
        <div class="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center opacity-50 gap-4">
          <h4 class="fw-bolder fst-italic mb-0">[Logo Apple]</h4>
          <h4 class="fw-bolder fst-italic mb-0">[Logo Samsung]</h4>
          <h4 class="fw-bolder fst-italic mb-0">[Logo Sony]</h4>
          <h4 class="fw-bolder fst-italic mb-0">[Logo Asus]</h4>
          <h4 class="fw-bolder fst-italic mb-0">[Logo JBL]</h4>
          <h4 class="fw-bolder fst-italic mb-0">[Logo Dell]</h4>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  // Khởi tạo và kích hoạt thủ công Bootstrap Carousel để nó tự động trượt trong Vue
  const sliderElement = document.getElementById('heroSlider')
  if (sliderElement) {
    import('bootstrap').then(bootstrap => {
      const carousel = new bootstrap.Carousel(sliderElement, {
        interval: 3000,
        ride: 'carousel'
      })
      carousel.cycle() // Lệnh ép Slider bắt đầu đếm giờ để chạy
    }).catch(() => {
      // Fallback: Xử lý phòng trường hợp bạn load Bootstrap qua CDN trong file index.html
      if (window.bootstrap) {
        const carousel = new window.bootstrap.Carousel(sliderElement, {
          interval: 3000,
          ride: 'carousel'
        })
        carousel.cycle()
      }
    })
  }
})

// --- DỮ LIỆU HERO BANNER (Dành cho DB Load ra sau này) ---
const heroSlides = ref([
  {
    id: 1,
    badgeText: 'Công nghệ mới 2026',
    badgeClass: 'bg-brand',
    titleHtml: 'Thế Giới Công Nghệ <br> TRONG TẦM TAY',
    description: 'Khám phá bộ sưu tập điện thoại, laptop và phụ kiện công nghệ đỉnh cao. Nâng tầm cuộc sống hiện đại của bạn ngay hôm nay.',
    btnText: 'KHÁM PHÁ NGAY',
    btnClass: 'btn-brand',
    btnIcon: 'fa-arrow-right',
    bgGradient: 'linear-gradient(135deg, #ece9e6 0%, #ffffff 100%)',
    bgOpacity: 1,
    imageAlt: 'Điện thoại'
  },
  {
    id: 2,
    badgeText: 'Back to School',
    badgeClass: 'bg-dark',
    titleHtml: 'Laptop Thế Hệ Mới <br> HIỆU NĂNG VƯỢT TRỘI',
    description: 'Tối ưu hóa năng suất làm việc và học tập với các dòng Laptop chip xử lý mạnh mẽ nhất hiện nay. Giảm ngay 15% cho sinh viên.',
    btnText: 'XEM CHI TIẾT',
    btnClass: 'btn-dark',
    btnIcon: 'fa-arrow-right',
    bgGradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    bgOpacity: 0.15,
    imageAlt: 'Laptop'
  },
  {
    id: 3,
    badgeText: 'Khuyến mãi cực sốc',
    badgeClass: 'bg-danger',
    titleHtml: 'Âm Thanh Sống Động <br> GIẢM ĐẾN 50%',
    description: 'Đắm chìm trong không gian âm nhạc tuyệt hảo với bộ sưu tập tai nghe chống ồn và loa Bluetooth chính hãng giá tốt nhất.',
    btnText: 'SĂN DEAL NGAY',
    btnClass: 'btn-danger',
    btnIcon: 'fa-cart-arrow-down',
    bgGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
    bgOpacity: 0.15,
    imageAlt: 'Phụ kiện'
  }
])

// --- DỮ LIỆU GIẢ LẬP KHÁC ---

const categories = ref([
  { name: 'Điện thoại', count: 120, imageAlt: 'Điện thoại iPhone' },
  { name: 'Laptop & PC', count: 85, imageAlt: 'Laptop Gaming' },
  { name: 'Âm thanh', count: 64, imageAlt: 'Loa & Tai nghe' },
  { name: 'Phụ kiện', count: 230, imageAlt: 'Cáp sạc, Ốp lưng' }
])

const flashSaleProducts = ref([
  { id: 101, name: 'Tai nghe Bluetooth AirPods Pro 2', price: 4990000, oldPrice: 6500000, badge: '-23%', isNew: false, imageAlt: 'AirPods Pro' },
  { id: 102, name: 'Ổ cứng SSD Samsung 980 Pro 1TB', price: 2150000, oldPrice: 3200000, badge: '-32%', isNew: false, imageAlt: 'SSD Samsung' },
  { id: 103, name: 'Bàn phím cơ Logitech G Pro X', price: 2590000, oldPrice: 3500000, badge: '-26%', isNew: false, imageAlt: 'Bàn phím cơ' }
])

const featuredProducts = ref([
  { id: 1, name: 'Điện thoại iPhone 15 Pro Max 256GB Titan Tự nhiên', price: 29990000, oldPrice: 34990000, badge: '-14%', isNew: true, imageAlt: 'iPhone 15 Pro Max' },
  { id: 2, name: 'Laptop Gaming Acer ROG Strix G15 Core i7 13th', price: 32500000, oldPrice: null, badge: '', isNew: true, imageAlt: 'Laptop ROG' },
  { id: 3, name: 'Màn hình máy tính Dell UltraSharp U2723QE 27 inch 4K', price: 12490000, oldPrice: 15500000, badge: '-19%', isNew: false, imageAlt: 'Màn hình Dell' },
  { id: 4, name: 'Chuột không dây Logitech MX Master 3S', price: 2450000, oldPrice: 2990000, badge: '-18%', isNew: false, imageAlt: 'Chuột Logitech' },
  { id: 5, name: 'Đồng hồ thông minh Apple Watch Series 9 GPS 45mm', price: 10500000, oldPrice: 11990000, badge: '-12%', isNew: false, imageAlt: 'Apple Watch' },
  { id: 6, name: 'Loa Bluetooth Marshall Stanmore III', price: 8990000, oldPrice: 10500000, badge: '-14%', isNew: false, imageAlt: 'Loa Marshall' },
  { id: 7, name: 'Máy tính bảng iPad Pro M2 11 inch WiFi 128GB', price: 19890000, oldPrice: 23990000, badge: '-17%', isNew: false, imageAlt: 'iPad Pro' },
  { id: 8, name: 'Camera an ninh Xiaomi Smart Camera C300', price: 690000, oldPrice: 990000, badge: '-30%', isNew: false, imageAlt: 'Camera Xiaomi' }
])

const testimonials = ref([
  { id: 1, name: 'Nguyễn Văn A', stars: 5, content: 'Sản phẩm chính hãng, giao hàng cực kỳ nhanh chóng. Tôi mua chiếc laptop ở đây và nhận được sự tư vấn nhiệt tình từ đội ngũ. Rất đáng tiền!' },
  { id: 2, name: 'Trần Thị B', stars: 5, content: 'Tôi đã mua sắm tại TechZone nhiều lần và chưa bao giờ thất vọng. Đặc biệt thích các đợt Flash Sale vì mua được đồ công nghệ giá cực hời.' }
])

const news = ref([
  { id: 1, title: 'Đánh giá chi tiết iPhone 15 Pro Max sau 3 tháng sử dụng: Liệu có đáng nâng cấp?', date: '12/10/2026', summary: 'Cùng TechZone nhìn lại siêu phẩm của Apple sau một thời gian ra mắt để xem những thay đổi về khung viền Titan và cổng Type-C mang lại trải nghiệm thế nào.', imageAlt: 'Review iPhone' },
  { id: 2, title: 'Top 5 Laptop Gaming cấu hình khủng, tản nhiệt cực mát cho game thủ năm 2026', date: '05/10/2026', summary: 'Danh sách những cỗ máy chiến game không thể bỏ qua trong năm nay, từ các hãng danh tiếng như Asus ROG, Acer Predator đến Lenovo Legion.', imageAlt: 'Laptop Gaming' },
  { id: 3, title: 'Hướng dẫn cách chọn tai nghe chống ồn phù hợp cho môi trường văn phòng', date: '28/09/2026', summary: 'Không phải tai nghe nào cũng giống nhau. Bài viết này sẽ giúp bạn hiểu rõ về công nghệ ANC và cách chọn mua tai nghe để làm việc tập trung nhất.', imageAlt: 'Tai nghe chống ồn' }
])

// --- COMPONENT CON (Hiển thị thẻ sản phẩm để tái sử dụng) ---
// Tôi đã gộp lại khai báo một lần duy nhất tại đây thay vì mở thêm thẻ <script> thừa
const ProductCard = {
  props: ['product'],
  template: `
    <div class="card border-0 h-100 product-card rounded-0 group-hover bg-white cursor-pointer position-relative">
      
      <div class="position-relative overflow-hidden bg-light" style="height: 250px;">
        <!-- Badges (Top Left) -->
        <div v-if="product.badge" class="position-absolute top-0 start-0 z-2">
          <span class="badge bg-brand text-white fw-bold px-3 py-2 shadow-sm" style="border-bottom-right-radius: 10px; border-top-left-radius: 0; font-size: 0.85rem;">{{ product.badge }}</span>
        </div>
        <div v-else-if="product.isNew" class="position-absolute top-0 start-0 z-2">
          <span class="badge bg-success text-white fw-bold px-3 py-2 shadow-sm" style="border-bottom-right-radius: 10px; border-top-left-radius: 0; font-size: 0.85rem;">MỚI</span>
        </div>

        <!-- Wishlist Button (Top Right) -->
        <div class="position-absolute top-0 end-0 z-2 bg-brand text-white d-flex align-items-center justify-content-center wishlist-btn shadow-sm" style="width: 42px; height: 42px; border-bottom-left-radius: 10px;">
          <i class="fa-regular fa-heart fs-5"></i>
        </div>

        <!-- Actions (Cart & Quickview - Bottom Right) -->
        <div class="product-actions position-absolute z-2 d-flex flex-column gap-2">
           <button class="btn bg-white text-dark shadow-sm rounded-2 d-flex align-items-center justify-content-center action-btn" style="width: 42px; height: 42px;" title="Thêm vào giỏ">
             <i class="fa-solid fa-bag-shopping fs-5"></i>
           </button>
           <button class="btn bg-white text-dark shadow-sm rounded-2 d-flex align-items-center justify-content-center action-btn" style="width: 42px; height: 42px;" title="Xem nhanh">
             <i class="fa-regular fa-eye fs-5"></i>
           </button>
        </div>

        <!-- Image Placeholder -->
        <div class="w-100 h-100 d-flex align-items-center justify-content-center text-muted transition-transform img-wrapper">
           <span class="small">[Ảnh {{ product.imageAlt }}]</span>
        </div>
      </div>
      
      <!-- Info -->
      <div class="card-body d-flex flex-column px-0 py-3">
        <h6 class="card-title text-truncate-2 mb-2 text-dark fw-bold hover-brand" style="font-size: 0.95rem; line-height: 1.4;">{{ product.name }}</h6>
        <div class="mt-auto">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <span class="fw-bold fs-6" style="color: #e32727;">{{ product.price.toLocaleString('vi-VN') }}đ</span>
            <span v-if="product.oldPrice" class="text-muted text-decoration-line-through small">{{ product.oldPrice.toLocaleString('vi-VN') }}đ</span>
          </div>
        </div>
      </div>
    </div>
  `
}
</script>

<style scoped>
/* Màu sắc thương hiệu */
.text-brand { color: #d84727 !important; }
.bg-brand { background-color: #d84727 !important; }
.hover-brand:hover { color: #d84727 !important; transition: 0.2s; }
.hover-bg-brand:hover { background-color: #d84727 !important; color: white !important; border-color: #d84727 !important; transition: 0.2s; }

.cursor-pointer { cursor: pointer; }

/* ======================================= */
/* CHỈNH SỬA NÚT VÀ CHẤM SLIDER Ở ĐÂY      */
/* ======================================= */

/* Custom cho 2 nút trượt Trái / Phải ra xa hơn và Ẩn mặc định */
.custom-slider-btn {
  width: auto;
  opacity: 0; /* Làm tàng hình */
  transition: opacity 0.3s ease; /* Hiệu ứng mượt mà */
}
/* Trượt ra xa */
.custom-slider-btn.prev-btn { left: 2.5%; }
.custom-slider-btn.next-btn { right: 2.5%; }

/* Vòng bọc nút có lớp nền mờ */
.nav-icon-wrapper {
  width: 45px; 
  height: 45px; 
  transition: 0.3s; 
  backdrop-filter: blur(4px);
}

/* Khi hover chuột vào khối heroSlider (#heroSlider) -> HIỂN THỊ NÚT */
#heroSlider:hover .custom-slider-btn {
  opacity: 1; 
}


/* Các định dạng cho Slider Carousel Bootstrap (Chấm tròn) */
.carousel-indicators [data-bs-target] {
  width: 12px;
  height: 12px;
  border-radius: 10px; /* Đổi thành 10px thay vì 50% để khi giãn ra width nó mượt thành viên thuốc */
  margin: 0 6px;
  background-color: #d84727;
  opacity: 0.4;
  border: none; /* Bỏ viền mặc định của Bootstap */
  transition: opacity 0.3s ease, width 0.3s ease; /* Thay đổi width mượt mà */
}

/* Chấm khi được click hoặc trượt trúng (Active - Hình viên thuốc) */
.carousel-indicators .active {
  opacity: 1;
  width: 32px; /* Kéo dài thành hình viên thuốc */
}
/* ======================================= */

/* Rút gọn text */
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Animations & Hovers */
.transition-transform { transition: transform 0.4s ease; }
.transition-all { transition: all 0.3s ease; }

.group-hover:hover .img-wrapper {
  transform: scale(1.08);
}

.backdrop-blur {
  backdrop-filter: blur(5px);
}

/* Hiệu ứng Nút */
.btn-hover-slide {
  transition: all 0.3s ease;
}
.btn-hover-slide:hover {
  background-color: #b8361b !important;
  transform: translateX(5px);
}

/* Card Sản phẩm */
.product-card {
  transition: box-shadow 0.3s, border-color 0.3s;
}
.product-card:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

/* Icon Giỏ hàng trượt lên khi hover */
.product-actions {
  bottom: 15px; 
  right: -50px; /* Ẩn bên ngoài card */
  opacity: 0;
  transition: all 0.3s ease;
}
.product-card:hover .product-actions {
  right: 15px; /* Trượt vào trong */
  opacity: 1;
}
.action-btn {
  transition: all 0.2s ease;
  border: 1px solid #eee;
}
.action-btn:hover {
  background-color: #d84727 !important;
  color: white !important;
  border-color: #d84727 !important;
}
.wishlist-btn {
  transition: all 0.2s ease;
  cursor: pointer;
}
.wishlist-btn:hover {
  background-color: #b8361b !important;
}
</style>